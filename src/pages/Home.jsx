import Header from '../components/Header/Header';

const Home = () => {
	return (
		<>
			<Header />
			<main className="section">
				<div className="container">
					<ul className="content-list">
						<li className="content-list__item">
							<h2 className="title-2">Frontend</h2>
							<p>
								JavaScript (ES6+), TypeScript, React, Next.js, Redux
								Toolkit, TanStack Query, Zustand, React Hook Form, Zod,
								dnd-kit, HTML5, CSS3 (Flexbox, Grid), Tailwind CSS, SCSS,
								Styled Components, Responsive Design, Accessibility
								(a11y), Figma, Framer Motion, GSAP
							</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">Backend</h2>
							<p>
								Node.js, Express.js, REST API, WebSockets, JWT
								Authentication, NextAuth, PostgreSQL, MongoDB, Prisma
							</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">Tools</h2>
							<p>
								Git, GitHub, Docker, Vite, Webpack, ESLint, Prettier,
								GitHub Actions (CI/CD), Vercel
							</p>
						</li>

						<li className="content-list__item">
							<h2 className="title-2">AI Tools</h2>
							<p>ChatGPT, GitHub Copilot, Cursor, Antigravity</p>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
};

export default Home;
