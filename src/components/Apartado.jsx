export default function Apartado({ titulo, children }) {
    return (
        <section>
            <div className="apartado">
            <h2>{titulo}</h2>
                <div>
                    {children}
                </div>
            </div>
        </section>
    )
}