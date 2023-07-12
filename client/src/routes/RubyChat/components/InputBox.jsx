import { useContext, useState } from "react"
import { UserContext } from "../RubyChat"

import AquaMessage from "./messages/AquaMessage"
import RubyMessage from "./messages/RubyMessage"
import ThreeDots from "./messages/ThreeDots"

export default function TextBox() {
	// Message global data fetching
	const { setAllMessages } = useContext(UserContext)
	const [userCurrentTypingMsg, setUserCurrentTypingMsg] = useState("")
	const [rubyIsTyping, setRubyTyingState] = useState(false)

	// When user is typing in the chat box
	// always change the content in the chat box, otherwise it will freeze
	function handleTyping(event) {
		event.preventDefault()
		setUserCurrentTypingMsg(event.target.value)
	}

	// Clear the entire chat
	function clearChat(e) {
		e.preventDefault()

		setRubyTyingState(false)

		setAllMessages(() => {
			return []
		})
	}

	// This function has a fetch request so it must be async
	// (asynchronous process)
	async function submitMessage(messageInput) {
		if (!messageInput) return

		const myData = { author: "Aqua", content: messageInput }
		const backendLocalURL = "http://localhost:8080/ruby"

		// These statements below will run in order as they are in an async function
		// which makes them look like sync although they're actually async
		try {
			// This is what makes the function async
			const responseMsg = await fetch(backendLocalURL, {
				method: "POST",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify(myData),
			})

			// json() also returns a Promise -> use await to resolve() it
			// shortContent is actually a list of message chunks
			const responseMsgInJson = await responseMsg.json()
			const { shortContent, fullContent } = responseMsgInJson
			const finalContent = !shortContent ? fullContent : shortContent[0]
			const messageState = !shortContent ? "static" : "shortened"

			const rubyMessageComponent = (
				<RubyMessage
					fullContent={fullContent}
					shortContent={shortContent[0]}
					finalContent={finalContent}
					state={messageState}
				/>
			)

			// Remove the three dots msg
			setAllMessages((prevMessages) => {
				let readyToShiftPrevMsg = [...prevMessages]
				readyToShiftPrevMsg.shift()
				return readyToShiftPrevMsg
			})

			// Send Ruby's Msg after a short delay (to make it natural)
			setTimeout(() => {
				setAllMessages((prevMessages) => {
					return [rubyMessageComponent, ...prevMessages]
				})

				// Change the placeholder in the text input
				// back to normal as Ruby finishes her message
				// allowing user to continue typing
				setRubyTyingState(false)
			}, 300)
		} catch (err) {
			console.error(err)
		}
	}

	// When user presses enter and has typed "something"
	function handleKeyPressed(event) {
		if (event.key === "Enter") {
			event.preventDefault()

			// If the input box has some content
			if (userCurrentTypingMsg.length !== 0) {
				const userTypedMsg = event.target.value
				const aquaMsgTemplate = <AquaMessage content={userTypedMsg} />

				// Add Aqua msg to msg list and render that out
				setAllMessages((prevMessages) => {
					return [aquaMsgTemplate, ...prevMessages]
				})

				// Ruby's typing signal message
				const threeDotsMsg = (
					<RubyMessage
						fullContent={ThreeDots}
						shortContent=""
						finalContent={ThreeDots}
						state="static"
					/>
				)

				// This function is asynchronous
				// which allows other functions to execute synchronously without having to wait for
				// this function to complete -> it will return the result after it's completed
				submitMessage(userTypedMsg)

				// Clear the input box
				setUserCurrentTypingMsg("")
				setRubyTyingState(true)

				// Instantly send the typing message after a short delay
				setTimeout(() => {
					setAllMessages((prevMessages) => {
						return [threeDotsMsg, ...prevMessages]
					})
				}, 1000)
			}
		}
	}

	return (
		<div>
			<form>
				<div className="flex items-center gap-2 py-2 px-3 rounded-lg">
					<button
						id="clear"
						className="border-2 border-cyan-600 hover:bg-cyan-600 hover:opacity-100 text-white opacity-70 font-bold py-2 px-4 rounded-full"
						onClick={clearChat}
					>
						Clear
					</button>

					{/* Typing area */}
					<input
						id="chat"
						rows="1"
						className="rounded-full p-3 block mx-1 w-full text-lg text-gray-200 bg-gray-800 dark:placeholder-gray-400"
						placeholder={
							rubyIsTyping
								? "Ruby is typing..."
								: "Please talk to me :3"
						}
						disabled={rubyIsTyping ? true : false}
						value={userCurrentTypingMsg}
						onKeyDown={handleKeyPressed}
						onChange={handleTyping}
						autoComplete="off"
						autoFocus
					></input>
				</div>
			</form>
			<script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
		</div>
	)
}
