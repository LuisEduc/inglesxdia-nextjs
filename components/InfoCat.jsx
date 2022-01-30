
export default function InfoCat({ titulo, descripcion, icono }) {
    return (
        <>
            <div className="grid-cat-info">
                <div className="titulo-cat-inicio">
                    <div>
                        <h2>{titulo}</h2>
                    </div>
                    <div className="icon-cat-info">
                        <i className={`fas fa-2x ${icono}`}></i>
                    </div>
                </div>
                <div style={{height: '10px'}}></div>
                <div className="detalles-cat-info">
                    <p>{descripcion}</p>
                </div>
            </div>
        </>
    )
}
