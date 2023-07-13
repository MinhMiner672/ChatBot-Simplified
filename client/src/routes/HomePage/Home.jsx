import { Link } from "react-router-dom"

export default function Home() {
	return (
		<div className="h-screen w-screen bg-rubySweating bg-no-repeat bg-cover bg-center">
			<div className="h-full w-full bg-black bg-opacity-80">
				<div className="ruby-font flex flex-col justify-center items-center h-screen w-screen bg-red">
					<h1 className="rubyHeader text-5xl md:text-6xl text-[#ffadff] drop-shadow-xl">
						Ruby-chan
					</h1>
					<p className="text-lg md:text-xl text-stone-300">
						A simple but (probably) cute chat bot 🌟
					</p>
					<div className="gap-3 flex-row flex justify-center items-center text-white font-bold  mt-5">
						<Link
							to="/chat"
							id="button"
							className="p-2 px-4 rounded-lg text-lg hover:cursor-pointer transition-all hover:bg-pink-300 border-2 border-pink-300"
						>
							Chat now!
						</Link>
						<Link to="/about" className="hover:underline">
							About me ➜
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
