import { signal } from "@preact/signals-react";
import ChatArea from "./components/ChatArea";
import TextBox from "./components/TextBox";
import BotMessage from "./components/messages/BotMessage";
import "./chat.css";

// Send welcome message
const botWelcomeMsg = (
  <BotMessage content="Hi there, I'm just another Chat-GPT but with simpler UI created by MinhMiner, glad to talk to you 🤗" />
);
const allMessages = signal([botWelcomeMsg]);

// Clear the chat history data
await fetch("http://localhost:5000/clear-chat");

export default function Chat() {
  return (
    <div className="background sm:px-32 md:px-48 lg:px-[24rem]">
      <main className="h-full flex flex-col justify-center gap-3">
        <ChatArea messages={allMessages}></ChatArea>
        <TextBox messages={allMessages}></TextBox>
      </main>
    </div>
  );
}
