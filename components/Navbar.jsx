import Link from 'next/link'
import { useRef } from 'react'

export default function Navbar() {

    let refMenu = useRef()
    let refNav = useRef()

    const Desplegar = () => {
        if (refMenu.current.className.includes('active')) {
            refMenu.current.className = 'menu-trigger'
            refNav.current.style.display = 'none'
        } else {
            refMenu.current.className += ' active'
            refNav.current.style.display = 'block'
        }
    }

    return (
        <>
            <div className="header-area header-sticky background-header">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                <Link href="/">
                                    <a className="logo">INGLES<em>X</em>DIA</a>
                                </Link>
                                <ul ref={refNav} className="nav">
                                    <li>
                                        <Link href="/vocabulario">
                                            <a className="active">Vocabulario de hoy</a>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href="/blog">
                                            <a>Blog</a>
                                        </Link>
                                    </li> */}
                                    <li>
                                        <Link href="/">
                                            <a>Lecciones</a>
                                        </Link>
                                    </li>

                                </ul>
                                <a ref={refMenu} onClick={Desplegar} className='menu-trigger'>
                                    <span>Menu</span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* <div className="descarga-app" onClick={() => window.open("https://bit.ly/34j0kVS", "_blank")}>
                    <span>Descargar aplicación gratis</span>
                    <img src="/play.svg" />
                </div> */}
            </div>
            <div style={{ height: 80 }}></div>
        </>
    )
}
