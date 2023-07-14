import rubyAvatar from "./images/ruby.jpg"
import homeIcon from "./images/home.png"

import "./styles/rubyProfile.css"

export default function RubyProfile() {
	return (
		<main className="ruby-profile-wrapper">
			<a href="/home" className="home-icon-wrapper">
				<img src={homeIcon} alt="home icon" className="home-icon" />
			</a>
			<img
				src={rubyAvatar}
				alt="ruby_avatar"
				className="ruby-profile-avt"
			/>
			<div id="text">
				<h1 id="name" className="ruby-name-title">
					Ruby Hoshino
				</h1>
				<p id="author" className="text-base text-stone-400">
					created by <b className="text-stone-300">@MinhMiner</b>
				</p>
			</div>
		</main>
	)
}
