import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/main.css';

import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Contacts from './pages/Contacts';
import ScrollToTop from './utils/scrollToTop';

function App() {
	return (
		<Router>
			<div className="App">
				<ScrollToTop />
				<Navigation />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/project/:id" element={<Project />} />
					<Route path="/contacts" element={<Contacts />} />
				</Routes>

				<Footer />
			</div>
		</Router>
	);
}

export default App;
