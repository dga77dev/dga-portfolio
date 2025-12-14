import Accordion from './Accordion.jsx';

export default function Apartado({ titulo, descripcion, cursos }) {

    if (titulo === "Formación") {
        return (
            <section>
                <div
                    className="apartado"
                    id={titulo.toLowerCase().replace(/\s+/g, "-")}
                >
                    <h2>{titulo}</h2>
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
                    
                </div>
            </section>
        );
    }

    if (titulo === "Sobre mí") {
        return (
            <section>
                <div
                    className="apartado"
                    id={titulo.toLowerCase().replace(/\s+/g, "-")}
                >
                    <h2>{titulo}</h2>
                    <p dangerouslySetInnerHTML={{ __html: descripcion }} />
                </div>
            </section>
        );
    }

    return null;
}
