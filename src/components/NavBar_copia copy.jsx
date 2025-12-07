import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

export default function NavBar({ linkedin, github }) {
    return (
        <nav className="navbar">
            <div className="brand">Portfolio David G.A</div>
            <input type="checkbox" id="menu-toggle"/>
            <label for="menu-toggle" class="toggle-btn"></label>
            
            <ul className="nav-links">
                <li><HashLink to="#capacidades">Capacidades</HashLink></li>
                <li><HashLink to="#habilidades">Habilidades</HashLink></li>
                <li><HashLink to="#proyectos">Proyectos</HashLink></li>
                <li><Link to={github} target="_blank"><i className="bi bi-github"></i></Link></li>
                <li><Link to={linkedin} target="_blank"><i className="bi bi-linkedin"></i></Link></li>
            </ul>
        </nav>
    )

}