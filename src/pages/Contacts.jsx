const Contacts = () => {
	return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">Contacts</h1>

				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">Location</h2>
						<p>Belarus · Open to remote work</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Telegram</h2>
						<p>
							<a
								href="https://t.me/Mr_IgorAleksandrovich"
								target="_blank"
								rel="noopener noreferrer"
							>
								@Mr_IgorAleksandrovich
							</a>
						</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Email</h2>
						<p>
							<a href="mailto:iharmanakhau@gmail.com">
								iharmanakhau@gmail.com
							</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	);
};

export default Contacts;
