import Accordion from './Accordion.jsx';
import Iconos from './Iconos.jsx';

export default function Apartado({ titulo, descripcion, cursos}) {
    // export default function Apartado({ titulo, children }) {

    const renderContenido = () => {

        // Contenido es texto (sobre mi)
        if (titulo === "Sobre mí") {
            return (
                <p dangerouslySetInnerHTML={{ __html: descripcion }} />
            );
        }

        if (titulo === "Formación") {
            return (
                <>
                    {descripcion.map((item, index) => (
                        <div key={index} className="formacionItem container">
                            <h3 className="formacionTitulo">{item.titulo}</h3>
                            <p><strong>{item.anio}</strong> - {item.centro}</p>
                            <p>{item.descripFormacion}</p>
                        </div>
                    ))}

                    <Accordion title="+ Cursos y certificaciones" >
                        {cursos.map((item, index) => (
                            <div key={index} className="formacionItem container">
                                <h3 className="formacionTitulo">{item.titulo}</h3>
                                <p><strong>{item.anio}</strong> - {item.centro}</p>
                                <p>{item.descripFormacion}</p>
                            </div>
                        ))}
                    </Accordion>
                </>
            );
        }

        if (titulo === "Habilidades") {
            return( 
                <div className="contenedorIconos">
                    {descripcion.map((tec, index) => (
                        <Iconos key={index} tec={tec} />
                    ))}
                </div>
            )
        }

    };

    return (
        <section>
            <div className="apartado" id={titulo.toLowerCase().replace(/\s+/g, "-")}>
                <h2 className="tituloApartado">{titulo}</h2>
                {renderContenido()}
            </div>
        </section>

    );
}