import { Routes, Route } from "react-router-dom"

// App.js

import Home from "./routes/HomePage"
import About from "./routes/Dashboard"
import RubyChat from "./routes/RubyChat"

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/home" element={<Home />} />
			<Route path="/app" element={<RubyChat />} />
			<Route path="/dashboard" element={<About />} />
		</Routes>
	)
}

export default App
