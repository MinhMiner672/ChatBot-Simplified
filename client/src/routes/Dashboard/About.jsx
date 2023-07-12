export default function About() {
	return (
		<div className="h-screen w-screen bg-rubySweating bg-no-repeat bg-cover bg-center">
			<div className="h-full w-full bg-black bg-opacity-80">
				<div
					id="content"
					className="h-full w-full flex flex-col justify-center text-white text-2xl px-52 "
				>
					<div id="about_project flex flex-col">
						<header>📜 About project</header>
						<div className="flex flex-row gap-2 ">
							<div
								id="vertical_line"
								className="h-24 border border-white"
							></div>
							<p className="">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Quia libero sequi animi eaque
								suscipit optio et eum delectus vero dolores
								illum assumenda non tempora dolorem minus
								facilis, qui ipsa neque.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
