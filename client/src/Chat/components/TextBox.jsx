import { signal } from "@preact/signals-react";
import UserMessage from "./messages/UserMessage";
import BotMessage from "./messages/BotMessage";
import PropTypes from "prop-types";
import "./styles/textBox.css";

const botTyping = signal(false);
const userCurrentMsg = signal("");

export default function TextBox({ messages }) {
  // When user presses enter and has typed "something"
  function handleKeyPressed(event) {
    if (event.key === "Enter") {
      event.preventDefault();

      // If the input box has some content
      if (userCurrentMsg.length !== 0) {
        const userTypedMsg = event.target.value;
        const userMsg = <UserMessage content={userTypedMsg} />;

        // Add the user message to msg list and render that out
        messages.value = [userMsg, ...messages.value];

        // Async function
        submitMessage(userTypedMsg);

        // Clear the input box
        userCurrentMsg.value = "";
        botTyping.value = true;

        // Instantly send the typing message after a short delay
        setTimeout(() => {
          const watingReponses = [
            "Just a moment...",
            "A few seconds...",
            "Hang in there...",
            "I'm processing...",
            "Typing...",
            "Almost done...",
          ];
          const randomIndex = Math.floor(Math.random() * watingReponses.length);
          const botMsg = <BotMessage content={watingReponses[randomIndex]} />;
          messages.value = [botMsg, ...messages.value];
        }, 1000);
      }
    }
  }

  function handleTyping(event) {
    event.preventDefault();
    userCurrentMsg.value = event.target.value;
  }

  async function submitMessage(messageInput) {
    if (!messageInput) return;

    const myData = { prompt: messageInput };

    try {
      // This is what makes the function async
      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(myData),
      });

      // json() also returns a Promise -> use await to resolve() it
      // shortContent is actually a list of message chunks
      const { content } = await response.json();

      const botMsg = <BotMessage content={content} />;

      // // Remove the processing msg
      const msgListCopy = [...messages.value];
      msgListCopy.shift();
      messages.value = [...msgListCopy];

      // Send Bot's Msg after a short delay (to make it natural)
      setTimeout(() => {
        messages.value = [botMsg, ...messages.value];
        botTyping.value = false;
      }, 300);
    } catch (err) {
      alert("Something went wrong, please contact MinhMiner#2793 on Discord");
    }
  }

  return (
    <>
      <main className="input-box-wrapper">
        <input
          className="input-box"
          disabled={botTyping.value ? true : false}
          value={userCurrentMsg.value}
          onKeyDown={handleKeyPressed}
          onChange={handleTyping}
          autoComplete="off"
          autoFocus
          rows="1"
          placeholder={botTyping.value ? "Typing..." : "Enter your message"}
        ></input>
      </main>
    </>
  );
}

TextBox.propTypes = {
  messages: PropTypes.array,
};
