import ChatArea from "./components/ChatArea"
import TextBox from "./components/TextBox"
import "./chat.css"

import { signal } from "@preact/signals-react"

const allMessages = signal([])

export default function Chat() {
	return (
		<div className="background sm:px-32 md:px-48 lg:px-[24rem]">
			<main className="h-full flex flex-col justify-center gap-3">
				<ChatArea messages={allMessages}></ChatArea>
				<TextBox messages={allMessages}></TextBox>
			</main>
		</div>
	)
}
