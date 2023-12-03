from flask import Flask, request
from flask_cors import CORS
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()
client = OpenAI()

all_prompts = []

app = Flask(__name__)
cors = CORS(app, origins=["http://localhost:5173"])


@app.route("/chat", methods=["POST"])
def chat():
    prompt = request.get_json()["prompt"]
    all_prompts.append({"role": "user", "content": prompt})
    bot_response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=all_prompts,
    )

    bot_msg_content = bot_response.choices[0].message.content
    return {"content": bot_msg_content}


@app.route("/clear-chat", methods=["POST"])
def clear_chat():
    all_prompts = []
    return


if __name__ == "__main__":
    app.run(debug=True)
