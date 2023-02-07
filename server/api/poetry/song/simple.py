from http.server import BaseHTTPRequestHandler,  HTTPServer
import json
import random

import requests

def get_song_url() -> str:
    ids = [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000] + \
        [i * 1000 for i in range(10, 255)]
    
    return f"https://raw.githubusercontent.com/wwqdrh/chinese-poetry/master/json/poet.song.{random.sample(ids, 1)[0]}.json"


class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        try:
            response = requests.get(get_song_url())
            try:
                data = response.json()
                self.send_response(200)
                self.send_header('Content-type','application/json')
                self.end_headers()
                self.wfile.write(json.dumps(random.sample(data, 1), ensure_ascii=False).encode('utf-8'))
            except ValueError:
                raise Exception(f"Failed to decode JSON, API response: {response.text}")
            except BaseException as error:
                    raise Exception(f"Unexpected {error=}, {type(error)=}")
        except Exception as e:
            self.send_response(500)
            self.end_headers()
            self.wfile.write(str(e).encode('utf-8'))

if __name__ == '__main__':
    host = ('0.0.0.0', 8000)
    server = HTTPServer(host, handler)
    print("Starting server, listen at: %s:%s" % host)
    server.serve_forever()