import chatGPT from "../images/Chat-GPT.jpg";
import PropTypes from "prop-types";
import "./styles/botMsg.css";

export default function BotMessage({ content }) {
  return (
    <main id="ruby" className="bot-msg-wrapper">
      <img src={chatGPT} alt="ruby" className="bot-msg-avt" />
      <div
        id="messageContent"
        className="bot-msg-content md:text-lg lg:text-base md:mr-20 text-sm"
      >
        {content}
      </div>
    </main>
  );
}

BotMessage.propTypes = {
  content: PropTypes.string,
};
