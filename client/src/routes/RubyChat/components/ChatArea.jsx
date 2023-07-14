import { useContext } from "react"
import { UserContext } from "../RubyChat"

import "./styles/chatArea.css"

export default function ChatArea() {
	const { allMessages } = useContext(UserContext)

	return (
		<ul className="chat-area-box">
			{allMessages.map((eachMessage, msgIndex) => {
				return <li key={msgIndex}>{eachMessage}</li>
			})}
		</ul>
	)
}
