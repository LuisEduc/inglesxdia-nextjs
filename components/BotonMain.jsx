import Link from 'next/link'

export default function BotonMain({dir, icono, titulo, bg, css}) {
    return (
        <>
            <Link href={`${dir}`}>
                <a>
                    <div className={`btn-main ${bg}`}>
                        <i className={`fas ${icono} ${css}`}></i>
                        <h2>{titulo}</h2>
                    </div>
                </a>
            </Link>
        </>
    )
}
