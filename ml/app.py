from flask import Flask


app = Flask(__name__)

@app.route('/admin')
def main():
    return "Hello world this is the flask backend"

if __name__ == '__main__':
    app.run()