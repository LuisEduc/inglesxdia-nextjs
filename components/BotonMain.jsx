import Link from 'next/link'

export default function BotonMain({dir, icono, titulo, bg, css, cssIcon}) {
    return (
        <>
            <Link href={`${dir}`}>
                <a>
                    <div className={`btn-main ${bg}`}>
                        <i className={`fas ${icono} ${cssIcon}`}></i>
                        <p>{titulo}</p>
                    </div>
                </a>
            </Link>
        </>
    )
}
