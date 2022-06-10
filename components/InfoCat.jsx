
export default function InfoCat({ titulo, descripcion, nivel }) {
    return (
        <div>
            <div className="grid-cat-info">
                <div className="titulo-cat-info">
                    <div>
                        {nivel === 'basico' ?
                            <span>Curso de nivel básico</span>
                            :
                            <span>Curso de nivel {nivel}</span>}
                        <h1>{titulo} en inglés</h1>
                    </div>
                </div>
                <div style={{ height: '10px' }}></div>
                <div className="detalles-cat-info">
                    <h2>{descripcion}</h2>
                </div>
            </div>
        </div>
    )
}
