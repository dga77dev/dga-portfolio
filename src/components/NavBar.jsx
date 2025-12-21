import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

/* Enlaces externos a. Enlaces internos: link. Enlaces anclas HashLink */

export default function NavBar({ linkedin, github }) {
    return (
        <nav className="navbar">
            <div className="brand">Portfolio & C.V</div>

            {/* Checkbox controlador del menú */}
            <input type="checkbox" id="menu-toggle" className="menu-toggle" />
            <label htmlFor="menu-toggle" className="toggle-btn"></label>

            <ul className="menu">
                <li><HashLink smooth to="#sobre-mí">Sobre mí</HashLink></li>
                <li><HashLink smooth to="#capacidades">Capacidades</HashLink></li>
                <li><HashLink smooth to="#habilidades-tecnológicas">Habilidades</HashLink></li>
                <li><HashLink smooth to="#formación">Formación</HashLink></li>
                <li><HashLink smooth to="#proyectos">Proyectos</HashLink></li>
                <li><Link to={github} target="_blank"><i className="bi bi-github"></i> Github</Link></li>
                <li><Link to={linkedin} target="_blank"><i className="bi bi-linkedin"></i> LinkedIn</Link></li>
            </ul>
        </nav>
    );
}