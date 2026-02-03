import project01 from './../img/projects/01.jpg';
import project01Big from './../img/projects/01-big.jpg';

import project02 from './../img/projects/02.png';
import project02Big from './../img/projects/02-big.png';

import project03 from './../img/projects/03.webp';
import project03Big from './../img/projects/03-big.webp';

import project04 from './../img/projects/04.jpg';
import project04Big from './../img/projects/04-big.jpg';

import project05 from './../img/projects/05.jpg';
import project05Big from './../img/projects/05-big.jpg';

import project06 from './../img/projects/06.jpg';
import project06Big from './../img/projects/06-big.jpg';

const projects = [
	{
		id: 1,
		title: 'TechStore Shop',
		skills: [
			'React, ',
			'Redux / Redux Thunk, ',
			'REST API Integration, ',
			'Vite, ',
			'JavaScript (ES6+), ',
			'Session Management, ',
			'Node.js/Express, ',
			'Docker, ',
			'MongoDB/Mongoose, ',
			'Authentication & Authorization, ',
			'Security Practices, ',
			'Error Handling ',
		],
		img: project01,
		imgBig: project01Big,
		gitHubLink: 'https://github.com/mi8mto/TechStore-project/',
	},
	{
		id: 2,
		title: 'NEXPO',
		img: project02,
		imgBig: project02Big,
		skills: 'React, Next.js, TypeScript, Tailwind CSS, Prisma, PostgreSQL, Kanban Boards, Gantt Charts, Drag & Drop (@dnd-kit), Dashboard Design, UI/UX, Zod Validation, NextAuth, Vercel',
		gitHubLink: 'https://nexpo-psi.vercel.app/',
	},
	{
		id: 3,
		title: 'Bubble chat',
		img: project03,
		imgBig: project03Big,
		skills: 'React, Vite, Tailwind CSS, WebSocket (ws), Node.js, real-time chat, Canvas API, sessionStorage, GitHub, Vercel, Railway, component-based architecture, animations, responsive design, UX/UI design.',
		gitHubLink: 'https://github.com/mi8mto/BubbleChat',
	},
	{
		id: 4,
		title: 'Bear Barber',
		img: project04,
		imgBig: project04Big,
		skills: 'HTML5, CSS3 (Flexbox, Grid, Responsive Design, Media Queries), JavaScript (DOM Manipulation, Event Handling, ES6+), Smooth Scrolling, Modal Windows, Form Validation, API Integration (Telegram Bot API), Environment Variables, Git, GitHub, Vercel (Serverless Functions, Deployment, Environment Configuration), Designed and prototyped the user interface in Figma',
		gitHubLink: 'https://github.com/mi8mto/Bear_barber',
	},
	{
		id: 5,
		title: 'Weather sounds',
		img: project05,
		imgBig: project05Big,
		skills: 'TypeScript, DOM Manipulation, Event Handling, Audio API, Dynamic Styling, ES6+, Array Methods, State Management, SCSS/CSS, Frontend Architecture, Asset Management, UX/UI Interactivity.',
		gitHubLink: 'https://github.com/mi8mto/weather-app-sounds',
	},
	{
		id: 6,
		title: 'Virtual keyboard',
		img: project06,
		imgBig: project06Big,
		skills: 'JavaScript (ES6+), DOM manipulation, Event handling, OOP, State management, LocalStorage, Multi-language support, HTML5, CSS3.',
		gitHubLink: 'https://mi8mto.github.io/virtual-keyboard/',
	},
];

export { projects };
