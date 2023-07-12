import rubyAvatar from "./images/ruby.jpg"

export default function RubyProfile() {
	return (
		<div className="w-full h-16 flex flex-row justify-center items-center gap-x-2">
			<img
				src={rubyAvatar}
				alt="ruby_avatar"
				className="rounded-lg w-14 md:w-16"
			/>
			<div id="text">
				<h1
					id="name"
					className="text-lg md:text-xl text-stone-100 font-bold"
				>
					Ruby Hoshino
				</h1>
				<p id="author" className="text-base text-stone-400">
					created by <b className="text-stone-300">@MinhMiner</b>
				</p>
			</div>
		</div>
	)
}
