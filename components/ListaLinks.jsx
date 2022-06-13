import Link from 'next/link'

export default function ListaLinks({ nivel, icono, slug, titulo }) {
    return (
        <>
            <div className="grid-lista-links">
                <Link href={`/lecs/${slug}`}>
                    <a>
                        <div className="titulo-lista-links">
                            <div>
                                {nivel === 'medio' ?
                                <h2>Curso nivel intermedio</h2>
                                :
                                <h2>Curso nivel {nivel}</h2>}
                                <h3>{titulo}</h3>
                            </div>
                            <div className="icon-lista-links">
                                <i className={`fas fa-2x ${icono}`}></i>
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
        </>
    )
}
