import { useState } from "react";

export default function Accordion({ title, children }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="container">
            <button className="cabecera" onClick={() => setOpen(!open)}>
                <span>{title}</span>
                <span>{open ? "▲" : "▼"}</span>
            </button>

            {
                open &&
                <div className="contenido">
                    <ul>
                        {children.map((valor, index) => (
                            <li key={index}>{valor}</li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    );
}
