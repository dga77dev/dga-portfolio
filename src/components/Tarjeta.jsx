import { Link } from 'react-router-dom';

export function Tarjeta({miMail, miTfno}) {
    const mailCompleto = `mailto:${miMail}?subject=Contacto via CV.`;
    return (
        <div className="tarjetaContacto">
            <ul>
                <li><i className="bi bi-geo-alt-fill"></i> Málaga y alrededores</li>
                <li><a href={mailCompleto}><i className="bi bi-envelope-at-fill"></i> {miMail}</a></li>
                <li><a href={`https://wa.me/${miTfno}?text=%C2%A1%C2%A1Hola%21%21%20he%20visto%20tu%20CV%20y%20quer%C3%ADa%20contactar%20contigo.`} target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-whatsapp"></i> {miTfno}
                </a></li>
                <li><a href="./src/assets/cv_david_godoy_avila.pdf" target="_blank" rel="noopener noreferrer"><i className="bi bi-file-earmark-person"></i> Descargar CV</a></li>
            </ul>
        </div>
    )
}