import chatGPT from "../images/Chat-GPT.jpg"
import PropTypes from "prop-types"

import "./styles/botMsg.css"

export default function BotMessage(props) {
	const { content } = props

	return (
		<main id="ruby" className="ruby-msg-wrapper">
			<img src={chatGPT} alt="ruby" className="ruby-msg-avt" />
			<div
				id="messageContent"
				className="ruby-msg-content md:text-lg lg:text-base md:mr-20 text-sm"
			>
				{content}
			</div>
		</main>
	)
}

BotMessage.propTypes = {
	content: PropTypes.string,
}
