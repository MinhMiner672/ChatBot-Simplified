import rubyAvt from "../images/rubyGasp.jpg"
import PropTypes from "prop-types"
import { useEffect, useState } from "react"

import "./styles/rubyMsg.css"

export default function RubyMessage(props) {
	const { shortContent, fullContent, finalContent, state } = props
	const [finalMsgContent, setFinalMsgContent] = useState(finalContent)
	const [shortenerName, setShortenerName] = useState("")

	useEffect(() => {
		if (state === "shortened") {
			setShortenerName("expand")
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	function handleModifyMsg() {
		if (shortenerName === "expand") {
			setFinalMsgContent(fullContent)
			setShortenerName("collapse")
		} else if (shortenerName === "collapse") {
			setShortenerName("expand")
			setFinalMsgContent(shortContent)
		}
	}

	return (
		<main id="ruby" className="ruby-msg-wrapper">
			<img src={rubyAvt} alt="ruby" className="ruby-msg-avt" />
			<div
				id="messageContent"
				className="ruby-msg-content md:text-lg lg:text-base md:mr-20 text-sm"
			>
				{finalMsgContent}
				<span
					id="shorten-option"
					className={
						state === "shortened" ? "inline-block" : "hidden" // Whether or not to show the "expand", "collapse" button
					}
				>
					(
					<a
						className="text-blue-900"
						href="#"
						onClick={handleModifyMsg}
					>
						{shortenerName === "expand" ? "expand" : "collapse"}
					</a>
					)
				</span>
			</div>
		</main>
	)
}

RubyMessage.propTypes = {
	shortContent: PropTypes.string,
	fullContent: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
	finalContent: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.elementType,
	]),
	state: PropTypes.string,
}
