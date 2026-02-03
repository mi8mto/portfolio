import { NavLink } from 'react-router-dom';

import './style.css';

const Project = ({ title, img, index, id }) => {
	return (
		<NavLink to={`/project/${index}`}>
			<li className="project">
				<img src={img} alt={title} className="project__img" />
				{id}
				<h3 className="project__title">{title}</h3>
			</li>
		</NavLink>
	);
};

export default Project;
