
export default function TituloBloque({icono, titulo, bg}) {
    return (
        <>
            <div className={`titulo-bloque ${bg}`}>
                <h2>{titulo}</h2>
                <i className={`fas ${icono}`}></i>
            </div>
        </>
    )
}
