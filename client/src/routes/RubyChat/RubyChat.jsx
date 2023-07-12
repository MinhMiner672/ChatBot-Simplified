import { createContext, useState } from "react"

import RubyProfile from "./components/RubyProfile"
import ChatArea from "./components/ChatArea"
import TextBox from "./components/InputBox"

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
			<div className="py-7 px-5 sm:px-20 md:px-50 lg:px-72 w-screen h-screen bg-aiSky bg-no-repeat bg-cover">
				<div className="h-full flex-col">
					<RubyProfile></RubyProfile>
					<ChatArea></ChatArea>
					<TextBox></TextBox>
				</div>
			</div>
		</UserContext.Provider>
	)
}
