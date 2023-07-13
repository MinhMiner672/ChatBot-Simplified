import { useState } from "react"
import PropTypes from "prop-types"

export default function AboutSection(props) {
	const [toggled, setToggled] = useState(false)
	const { header, content } = props

	const allLines = content.split("||")

	function changeToggle() {
		setToggled((prevState) => !prevState)
	}

	return (
		<div className="flex flex-col">
			<header
				onClick={changeToggle}
				className="bg-gray-500 bg-opacity-30 p-3 rounded-lg font-bold font-mono text-2xl hover:bg-opacity-60 hover:cursor-pointer select-none"
			>
				{header}
			</header>
			<ul
				className={
					"items-center gap-2 text-base border-l-2 border-gray-600 pl-1 " +
					(toggled ? "" : "hidden")
				}
			>
				{allLines.map((eachLine, eachLineIndex) => {
					return (
						<li key={eachLineIndex}>
							{eachLine}
							<br />
						</li>
					)
				})}
			</ul>
		</div>
	)
}

AboutSection.propTypes = {
	header: PropTypes.string,
	content: PropTypes.string,
	lineHeight: PropTypes.string,
}
