import aquaAvt from "../images/aquaMsgAvt.png"
import PropTypes from "prop-types"

export default function AquaMessage(props) {
	const { content } = props

	return (
		<>
			<div
				id="aqua"
				className="flex flex-row justify-end items-end gap-2"
			>
				<div
					id="messageContent"
					className="text-sm md:text-lg lg:text-base md:ml-20 px-3 py-2 bg-blue-500 rounded-3xl text-white"
				>
					{content}
				</div>
				<img src={aquaAvt} alt="aqua" className="w-10 rounded-full" />
			</div>
		</>
	)
}

AquaMessage.propTypes = {
	content: PropTypes.string,
}
