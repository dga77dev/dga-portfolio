import Accordion from './Accordion.jsx';
import Iconos from './Iconos.jsx';
import Proyecto from './Proyecto.jsx';

export default function Apartado({ titulo, descripcion, cursos }) {
    // export default function Apartado({ titulo, children }) {

    const renderContenido = () => {

        // Contenido es texto (sobre mi)
        if (titulo === "Sobre mí") {
            return (
                <section>
                    <p dangerouslySetInnerHTML={{ __html: descripcion }} />
                </section>
            );
        }

        if (titulo === "Formación") {
            return (
                <section>
                    {descripcion.map((item, index) => (
                        <div key={index} className="formacionItem container2">
                            <h3 className="formacionTitulo">{item.titulo}</h3>
                            <p><strong>{item.anio}</strong> - {item.centro}</p>
                            <p>💠{item.descripFormacion}</p>
                        </div>
                    ))}

                    <Accordion title="+ Cursos y certificaciones" >
                        {cursos.map((item, index) => (
                            <div key={index} className="formacionItem container">
                                <h3 className="formacionTitulo">{item.titulo}</h3>
                                <p><strong>{item.anio}</strong> - {item.centro}</p>
                                <p>💠{item.descripFormacion}</p>
                            </div>
                        ))}
                    </Accordion>
                </section>
            );
        }

        if (titulo === "Habilidades Tecnológicas") {
            return (
                <section>
                    <div className="contenedorIconos">
                        {descripcion.map((tec, index) => (
                            <Iconos key={index} tec={tec} />
                        ))}
                    </div>
                </section>
            )
        }

        if (titulo === "Proyectos") {
            return (

                <section>
                    <div className = "contenedorProyectos">
                        {descripcion.map((p) => (
                            <Proyecto key={p.id} proyecto={p} />
                        ))}
                    </div>
                </section>

            );
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