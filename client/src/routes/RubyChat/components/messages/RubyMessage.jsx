import rubyAvt from "../images/rubyGasp.jpg"
import PropTypes from "prop-types"
import { useEffect, useState } from "react"

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
		<>
			<div
				id="ruby"
				className="flex flex-row justify-start pr-5 items-end gap-2 "
			>
				<img src={rubyAvt} alt="ruby" className="w-10 rounded-full" />
				<div
					id="messageContent"
					className={`text-sm md:text-lg lg:text-base md:mr-20 px-3 py-2 bg-pink-500 rounded-3xl text-white`}
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
							className={"text-blue-900"}
							href="#"
							onClick={handleModifyMsg}
						>
							{shortenerName === "expand" ? "expand" : "collapse"}
						</a>
						)
					</span>
				</div>
			</div>
		</>
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
