import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import Bard from "bard-ai"

import path from "path"
import { fileURLToPath } from "url"

dotenv.config()
// NOTE: Utility functions are defined after being called

const Ruby = Bard
const PORT = process.env.PORT || 3000

await Ruby.init(process.env.COOKIE)
const newConversation = new Ruby.Chat()

const app = express()

app.use(express.static("public"))
app.use(express.json())
app.use(
	cors({
		origin: "*",
	})
)

app.listen(PORT, () => {
	console.log(`Ruby's alive on port ${PORT}`)
})

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.get("/", (req, res) => {
	res.sendFile("index.html", { root: path.join(__dirname, "public") })
})

// The user message data will be sent here
app.post("/", (req, res) => {
	const userMessage = req.body.content
	const responseResult = {}

	responseResult.shortContent = ""
	try {
		replyMsg(userMessage).then((replyMessage) => {
			// If the reply is too long
			if (replyMessage.split(" ").length >= 40) {
				const shortenedMessage = shortenMessage(replyMessage)
				responseResult.shortContent = shortenedMessage
			}
			responseResult.fullContent = replyMessage

			// Status 200 means OK
			res.status(200).send(JSON.stringify(responseResult))
		})
	} catch (err) {
		console.log(err)
	}
})

async function replyMsg(inputMsg) {
	return await newConversation.ask(inputMsg)
}

function shortenMessage(originalMessage) {
	// Actually it will trim out 30 words, idk why :)
	const numberOfWords = 31
	const regExTemplate = new RegExp(
		`([^ ]*[ ]{0,1}){1,${numberOfWords}}`,
		"ig"
	)
	const finalResult = originalMessage.match(regExTemplate)
	return finalResult
}

export default app
