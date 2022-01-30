import Link from 'next/link'

export default function BloqueCatInicio({nivel, icono, slug, titulo, descripcion}) {
    return (
        <>
            <div className="grid-cat-inicio">
                <Link href={`/lecs/${slug}`}>
                    <a>
                        <div className="titulo-cat-inicio">
                            <div>
                                <span>Nivel {nivel}</span>
                                <h2>{titulo}</h2>
                            </div>
                            <div className="icon-cat-inicio">
                                <i className={`fas fa-2x ${icono}`}></i>
                            </div>
                        </div>
                    </a>
                </Link>
                <div className="detalles-cat-inicio">
                    <p>{descripcion}</p>
                    <div className="flex-center">
                        <Link href={`/lecs/${slug}`}>
                            <a type="button" className="btn btn-in-cat">Detalles<i className="fas fa-headphones-alt ms-2"></i></a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
