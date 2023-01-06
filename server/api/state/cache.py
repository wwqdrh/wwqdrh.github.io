from urllib import parse
from http.server import BaseHTTPRequestHandler, HTTPServer
import json

SimpleCache = dict()

class handler(BaseHTTPRequestHandler):
    def query(self) -> dict[str, list[str]]:
        url_parser = parse.urlparse(self.path)
        args = {}
        for key, val in parse.parse_qs(url_parser.query).items():
            args[key] = list(map(parse.unquote, val))
        return args

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()
        self.wfile.close()

    def do_GET(self):
        try:
            args = self.query()
            if 'name' not in args:
                raise Exception('name not in query')
            
            res = []
            for item in args['name']:
                res.append(SimpleCache.get(item, 'N/A'))
            
            self.send_response(200)
            self.send_header('Content-type','application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"code": 0, "msg": "ok", "data": res}).encode('utf-8'))
        except Exception as e:
            self.send_response(500)
            self.send_header('Content-type','application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"code": 1, "msg": str(e)}).encode('utf-8'))
    
    def do_POST(self):
        try:
            body = self.rfile.read(int(self.headers['content-length'])).decode(encoding="utf-8")
            args = json.loads(body)
            if 'name' not in args or 'data' not in args:
                raise Exception('[request] no have name or data')

            SimpleCache[args.get('name')] = args.get('data')
            self.send_response(200)
            self.send_header('Content-type','application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"code": 0, "msg": "ok"}).encode('utf-8'))
        except Exception as e:
            self.send_response(500)
            self.send_header('Content-type','application/json')
            self.end_headers()
            self.wfile.write(json.dumps({"code": 1, "msg": str(e)}).encode('utf-8'))

if __name__ == '__main__':
    host = ('0.0.0.0', 8000)
    server = HTTPServer(host, handler)
    print("Starting server, listen at: %s:%s" % host)
    server.serve_forever()