import './styles.css';

const Header = () => {
	return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Hi, my name is <em>Ihar</em>
					</strong>
					<br />
					Frontend Developer
				</h1>
				<div className="header__text">
					<p>I build modern, responsive, and user-focused web interfaces.</p>
					<p>I enjoy turning ideas into clean and scalable code.</p>
				</div>
				<a
					href="https://raw.githubusercontent.com/mi8mto/cv/main/Ihar_Manakhau_Frontend_Developer_CV.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="btn"
				>
					Download CV
				</a>
			</div>
		</header>
	);
};

export default Header;
