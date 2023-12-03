import "./styles/chatArea.css";
import PropTypes from "prop-types";

export default function ChatArea({ messages }) {
  return (
    <ul className="chat-area-box">
      {messages.value.map((eachMessage, msgIndex) => {
        return <li key={msgIndex}>{eachMessage}</li>;
      })}
    </ul>
  );
}

ChatArea.propTypes = {
  messages: PropTypes.array,
};
