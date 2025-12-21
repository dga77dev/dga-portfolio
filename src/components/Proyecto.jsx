import { Link } from "react-router-dom";

export default function Proyecto({ proyecto }) {
    const { nombre, pagina, descripcion, tecs, enlace } = proyecto;

    return (
        <article className="tarjetaProyecto">

            <h3 className="proyectoTitulo">{nombre}</h3>

            <div className="contenedorIconos contenedorIconos2">
                {tecs.map((tec) => (
                    <div className="iconoMini" key={tec}>
                        <img src={`/images/${tec}.svg`} alt={`logo ${tec}`} />
                    </div>
                ))}
            </div>

            <div className="proyectoImagen">
                <img src={`/proyectos/${nombre.toLowerCase().replace(/\s+/g, "")}.jpg`} alt={`Proyecto ${nombre}`} />
            </div>
            
            {/* Texto provisional */}
            <p className="proyectoProximamente">
                {descripcion}
            </p>
            <br/>
            
            <div className="botoneraProyecto">
                <p>
                    {/* Enlace externo */}
                    {enlace ? (
                        <a href={enlace} target="_blank" rel="noopener noreferrer" className="proyectoEnlace">
                            Ver proyecto
                        </a>
                    ) : (
                        <span>
                            Enlace no disponible
                        </span>
                    )}
                </p>

                <p>
                    {/*Enlace interno*/}

                    {pagina ? (
                        <Link to="/pages" className="proyectoEnlace">Ver detalles</Link>

                    ) : (
                        <span>
                            Detalles próximamente
                        </span>
                    )}
                </p>
            </div>
        </article>
    );
}
