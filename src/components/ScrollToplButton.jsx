// ScrollTopButton.jsx
import { useState, useEffect } from "react";

export default function ScrollTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Mostrar botón si se baja más de 200px
            setVisible(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        visible && (
            <button className="scrollTopBtn" onClick={scrollToTop}>
                ↑ Subir arriba
            </button>
        )
    );
}
