import { Link } from "react-router-dom"
import { useEffect } from "react"
import "./home.css"

export default function Home() {
	useEffect(() => {
		document.title = "Ruby-chan | Home"
	}, [])

	return (
		<div className="ruby-sweat-bg">
			<div className="color-bg">
				<main className="main-wrapper ruby-font">
					<h1 className="ruby-header">Ruby-chan</h1>
					<p className="short-desc">
						A simple but (probably) cute chat bot 🌟
					</p>
					<section className="links-section-wrapper">
						<Link to="/chat" id="button" className="chat-now-btn">
							Chat now!
						</Link>
					</section>
				</main>
			</div>
		</div>
	)
}
