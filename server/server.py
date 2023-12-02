from flask import Flask

app = Flask(__name__)


@app.route("/chat")
def chat():
    return {"content": "hello im a bot"}


if __name__ == "__main__":
    app.run(debug=True)
