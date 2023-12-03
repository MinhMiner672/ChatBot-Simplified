import KazuhaAvt from "../images/Kazuha.jpg";
import PropTypes from "prop-types";
import "./styles/userMsg.css";

export default function UserMessage(props) {
  const { content } = props;

  return (
    <main id="aqua" className="msg-wrapper">
      <div className="msg-content">{content}</div>
      <img src={KazuhaAvt} alt="Kazuha" className="kazuha-avt" />
    </main>
  );
}

UserMessage.propTypes = {
  content: PropTypes.string,
};
