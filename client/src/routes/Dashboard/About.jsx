import AboutSection from "./AboutSection"

export default function About() {
	const projectContent =
		"• Project name: Ruby-chan||• Technologies used: React, Tailwind CSS, NodeJS, Express||• Description: Đây là một trang web đơn giản được tích hợp 1 con chatbot tên Ruby dựa trên Bard API"

	const aboutContent =
		"• Mình tên Phạm Hoàng Minh, sinh năm 2008 và sống tại Hà Nội||• Hiện là học sinh chuẩn bị vào lớp 10 THPT CSP 🎓||• Mình có đam mê với công nghệ, ngôn ngữ yêu thích là Python, JS||• Rất rất và rất mong muốn được làm việc cùng với các senpai từ Steam Hacks với vai trò em út của team 😭"

	return (
		<div className="h-screen w-screen bg-rubySweating bg-no-repeat bg-cover bg-center">
			<div className="h-full w-full bg-black bg-opacity-80">
				<div className="h-full w-full px-6 md:px-20 lg:px-40 flex flex-col justify-center gap-5 text-white text-2xl">
					<AboutSection
						header="📜 About project"
						content={projectContent}
					/>
					<AboutSection header="🤡 About me" content={aboutContent} />
				</div>
			</div>
		</div>
	)
}
