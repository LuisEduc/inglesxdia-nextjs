
export default function InfoCat({ titulo, descripcion, icono }) {
    return (
        <div>
            <div className="grid-cat-info">
                <div className="titulo-cat-info">
                    <div>
                        <h1>{titulo} en inglés</h1>
                    </div>
                    {/* <div className="icon-cat-info">
                        <i className={`fas fa-2x ${icono}`}></i>
                    </div> */}
                </div>
                <div style={{height: '10px'}}></div>
                <div className="detalles-cat-info">
                    <h2>{descripcion}</h2>
                </div>
            </div>
        </div>
    )
}
