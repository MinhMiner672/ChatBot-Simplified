import "./styles/chatArea.css"

export default function ChatArea({ messages }) {
	return (
		<ul className="chat-area-box">
			{messages.value.map((eachMessage, msgIndex) => {
				return <li key={msgIndex}>{eachMessage}</li>
			})}
		</ul>
	)
}
