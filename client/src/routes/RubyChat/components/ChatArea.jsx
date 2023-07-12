import { useContext } from "react"
import { UserContext } from "../RubyChat"
import { v4 as uuidv4 } from "uuid"

export default function ChatArea() {
	const { allMessages } = useContext(UserContext)

	return (
		<ul className="w-full h-3/4 px-3 py-5 my-3 flex flex-col-reverse gap-5 rounded-2xl drop-shadow-2xl overflow-y-scroll text-lg text-white bg-gradient-to-r from-indigo-700 to-blue-900">
			{allMessages.map((eachMessage) => {
				return <li key={uuidv4()}>{eachMessage}</li>
			})}
		</ul>
	)
}
