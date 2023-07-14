import aquaAvt from "../images/aquaMsgAvt.png"
import PropTypes from "prop-types"
import "./styles/aquaMsg.css"

export default function AquaMessage(props) {
	const { content } = props

	return (
		<main id="aqua" className="msg-wrapper">
			<div className="msg-content">{content}</div>
			<img src={aquaAvt} alt="aqua" className="aqua-avt" />
		</main>
	)
}

AquaMessage.propTypes = {
	content: PropTypes.string,
}
