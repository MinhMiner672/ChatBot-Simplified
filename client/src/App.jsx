import { Routes, Route } from "react-router-dom"

import Home from "./routes/HomePage"
import RubyChat from "./routes/RubyChat"

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/home" element={<Home />} />
			<Route path="/chat" element={<RubyChat />} />
		</Routes>
	)
}

export default App
