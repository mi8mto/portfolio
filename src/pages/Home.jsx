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
								JavaScript (ES6+), TypeScript, React, Redux Toolkit,
								HTML5, CSS3 (Flexbox, Grid), Tailwind CSS, Styled
								Components, Responsive Layout, Accessibility (a11y)
							</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">Backend</h2>
							<p>
								Node.js, Express.js, REST API, Authentication, PostgreSQL
								(Prisma)
							</p>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
};

export default Home;
