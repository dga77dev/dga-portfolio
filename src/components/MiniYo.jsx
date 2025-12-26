<<<<<<< HEAD
import { useEffect, useState, useRef } from "react";

export default function Miniyo() {
    const [visible, setVisible] = useState(false);
    const [showText, setShowText] = useState(false);
    const [topPosition, setTopPosition] = useState(0);
    const countRef = useRef(0);

    const mensaje = [
        "¡Hola! Bienvenido a mi portfolio",
        "Espero que te guste mi trabajo y mis ideas.",
        "Cualquier cosa, no dudes en contactarme."
    ];

    useEffect(() => {
        const startCycle = () => {
            if (countRef.current >= 3) return;

            countRef.current += 1;

            const randomTop = Math.floor(Math.random() * 70) + 10;
            setTopPosition(randomTop);

            setVisible(true);

            setTimeout(() => setShowText(true), 1000);  // Aparece en 1 seg cuando se para
            setTimeout(() => setShowText(false), 4500); // Tiempo para ocultar texto
            setTimeout(() => setVisible(false), 5000);  // Tiempo para ocultar imagen
        };

        startCycle();

        const interval = setInterval(() => {
            if (countRef.current >= 3) {
                clearInterval(interval);
                return;
            }
            startCycle();
        }, 6000); // Tiempo para reiniciar
=======
import { useEffect, useState } from "react";

export default function Miniyo() {
    const [visible, setVisible] = useState(false);
    const [topPosition, setTopPosition] = useState(0);

    useEffect(() => {
        const startCycle = () => {
            // Altura aleatoria (entre 10% y 80% del alto del viewport)
            const randomTop = Math.floor(Math.random() * 70) + 10;
            setTopPosition(randomTop);

            // Mostrar imagen
            setVisible(true);

            // Ocultar tras 3 segundos
            setTimeout(() => {
                setVisible(false);
            }, 3000);
        };

        // Primera aparición
        for (let i = 0; i < 3; i++) {
            startCycle();
        }

        // Repetir ciclo cada 6 segundos (20s visible + margen animación)
        const interval = setInterval(startCycle, 6000);
>>>>>>> 57fa905b0bebbae670932def45c3daa893bda625

        return () => clearInterval(interval);
    }, []);

    return (
<<<<<<< HEAD
        <div
            style={{
                position: "fixed",
                top: `${topPosition}vh`,
                left: visible ? "0px" : "-200px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                transition: "left 1s ease-in-out",
                zIndex: 9999,
                pointerEvents: "none",
            }}
        >
            <img
                src="/images/miniyo.svg"
                alt="Miniyo"
                style={{ width: "60px" }}
            />

            <span
                style={{
                    opacity: showText ? 1 : 0,
                    transition: "opacity 0.4s ease-in-out",
                    whiteSpace: "nowrap",
                    fontSize: "14px",
                    background: "rgba(0,0,0,0.7)",
                    color: "#fff",
                    padding: "4px 8px",
                    borderRadius: "6px",
                }}
            >
                {mensaje[countRef.current - 1]}
            </span>
        </div>
=======
        <>
            <img
                src="/images/miniyo.svg"
                alt="Miniyo"
                style={{
                    position: "fixed",
                    top: `${topPosition}vh`,
                    left: visible ? "20px" : "-200px",
                    transition: "left 1s ease-in-out",
                    width: "60px",
                    zIndex: 9999,
                    pointerEvents: "none",
                }}
            />

        </>
>>>>>>> 57fa905b0bebbae670932def45c3daa893bda625
    );
}
