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

        return () => clearInterval(interval);
    }, []);

    return (
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
    );
}
