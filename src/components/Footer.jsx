export default function Footer({fraseFooter}) {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div className="footer">
                <h5>{currentYear} 🧡 {fraseFooter}</h5>
            </div>
        </footer>
    )
}