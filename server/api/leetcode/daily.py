from http.server import BaseHTTPRequestHandler
import json

from lib.leetcode import question

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        try:
            ques = question.get_question_of_today()
            self.send_response(200)
            self.send_header('Content-type','application/json')
            self.end_headers()
            self.wfile.write(json.dumps(question.get_question_of_today(), ensure_ascii=False).encode('utf-8'))
        except Exception as e:
            self.send_response(500)
            self.end_headers()
            self.wfile.write(str(e).encode('utf-8'))