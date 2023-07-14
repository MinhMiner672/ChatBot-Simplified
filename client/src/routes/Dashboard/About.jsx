import AboutSection from "./AboutSection"
import homeIcon from "./images/home.png"
import "./about.css"

export default function About() {
	const projectContent =
		"• Project name: Ruby-chan||• Technologies used: React, Tailwind CSS, NodeJS, Express||• Description: Đây là một trang web đơn giản được tích hợp 1 con chatbot tên Ruby dựa trên Bard API"

	const aboutContent =
		"• Mình tên Phạm Hoàng Minh, sinh năm 2008 và sống tại Hà Nội||• Hiện là học sinh chuẩn bị vào lớp 10 THPT CSP 🎓||• Mình có đam mê với công nghệ, ngôn ngữ yêu thích là Python, JS||• Rất rất và rất mong muốn được làm việc cùng với các senpai từ Steam Hacks với vai trò em út của team 😭"

	return (
		<div className="ruby-sweat-bg">
			<a href="/home" className="home-btn-wrapper">
				<img
					src={homeIcon}
					alt=""
					className="home-icon home-btn-style"
				/>
			</a>

			<section className="color-bg">
				<main className="about-section-wrapper">
					<AboutSection
						header="📜 About project"
						content={projectContent}
					/>
					<AboutSection header="🤡 About me" content={aboutContent} />
				</main>
			</section>
		</div>
	)
}
