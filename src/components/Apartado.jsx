export default function Apartado({ titulo, descripcion }) {
    return (
        <section>
            <div className="apartado" id={titulo.toLowerCase().replace(/\s+/g, "-")}>
            <h2>{titulo}</h2>
                <div>
                    <p dangerouslySetInnerHTML={{ __html: descripcion }}></p>
{/*
                    {descripcion}
*/}
                </div>
            </div>
        </section>
    )
}