export default function Iconos({tec}) {
    const dato = tec.toUpperCase();
    return (
        <div className = "iconoTec">
            <div className = "icono">
                <img src={`./images/${tec}.svg`} alt={`logo ${tec}`} width={60}  />
            </div>
            <br />
            {dato}
        </div>  
    )
}