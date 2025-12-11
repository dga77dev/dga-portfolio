import Accordion from './Accordion.jsx';
export default function ApartadoAcordeones({ titulo, capacidades1, capacidades2 }) {
    return (
        <section>
            <div className="apartado" id={titulo.toLowerCase().replace(/\s+/g, "-")}>
            <h2>{titulo}</h2>
                <div>
                    <Accordion title="Desarrollo Web y programación" children={capacidades1} />
                    <Accordion title="Docencia" children={capacidades2} />
                    <Accordion title="Marketing Digital"/>
                </div>
            </div>
        </section>
    )
}