import { createContext, useState } from "react"

import RubyProfile from "./components/RubyProfile"
import ChatArea from "./components/ChatArea"
import TextBox from "./components/InputBox"

import "./rubyChat.css"

export const UserContext = createContext(null)

export default function RubyChat() {
	const [allMessages, setAllMessages] = useState([])

	return (
		<UserContext.Provider
			value={{
				allMessages: allMessages,
				setAllMessages: setAllMessages,
			}}
		>
			<div className="background sm:px-20 md:px-50 lg:px-72">
				<main className="h-full flex-col">
					<RubyProfile></RubyProfile>
					<ChatArea></ChatArea>
					<TextBox></TextBox>
				</main>
			</div>
		</UserContext.Provider>
	)
}
