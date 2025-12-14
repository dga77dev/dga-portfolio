export default function Iconos({tec}) {
    const dato = tec.toUpperCase();
    return (
        <div className = "iconoTec">
            <img src={`./images/${tec}.svg`} alt={`logo ${tec}`} width={60} />
            <br></br>
            {dato}
        </div>  
    )

}