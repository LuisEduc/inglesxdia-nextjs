import Image from "next/image"
import Buscador from "../components/Buscador"
import AdSense from 'react-adsense';
import Link from "next/link";

export default function Hero({ buscar }) {
    return (
        <>
            <div className="hero-bg">
                <div style={{ height: '15px' }}></div>
                <AdSense.Google
                    // full-hero
                    client='ca-pub-3630578707238850'
                    slot='4810977003'
                    style={{
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        textAlign: 'center'
                    }}
                    format='auto'
                    responsive='true'
                />
                {/* <AdSense.Google
                    // 300x250-inicio-hero
                    client='ca-pub-3630578707238850'
                    slot='4249839185'
                    style={{
                        display: 'block',
                        height: 250 + 'px',
                        width: 90 + '%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        textAlign: 'center'
                    }}
                    format=''
                /> */}
                <div className="hero">
                    <div className="hero-text">
                        <div className="hero-titulo">
                            <h1>Curso de inglés en línea<span className="text-primary">.</span></h1>
                        </div>
                        <div className="buscador">
                            <Buscador buscar={buscar} />
                        </div>
                    </div>

                    <div className="hero-resumen-grid">
                        <div className="hero-resumen-titulo">
                            <h2>¿Qué ofrece <span className="resalt-mor">inglesxdia.tech</span>?</h2>
                        </div>
                        <div className="hero-resumen-item">
                            <Link href="/vocabulario">
                                <a>
                                    <div className="item-hero-number">
                                        <span>1</span>
                                    </div>
                                </a>
                            </Link>
                            <div className="item-hero-text">
                                <Link href="/vocabulario">
                                    <a>
                                        <h3>
                                            Vocabulario diario en inglés.
                                        </h3>
                                    </a>
                                </Link>
                                <p>Vocabulario fácil, medio y avanzado en inglés. Significado, traducción, frases de ejemplo y pronunciación todos los días.</p>
                            </div>
                        </div>
                        <div className="hero-resumen-item">
                            <Link href="/#lecciones">
                                <a href="/#lecciones">
                                    <div className="item-hero-number">
                                        <span>2</span>
                                    </div>
                                </a>
                            </Link>
                            <div className="item-hero-text">
                                <Link href="/#lecciones">
                                    <h3>
                                        <a href="/#lecciones">Lecturas cortas y básicas.</a>
                                    </h3>
                                </Link>
                                <p>Lecturas en inglés para principiantes y nivel intermedio. Textos y cuentos cortos para aprender inglés.</p>
                            </div>
                        </div>
                        <div className="hero-resumen-item">
                            <Link href="/#lecciones">
                                <a href="/#lecciones">
                                    <div className="item-hero-number">
                                        <span>3</span>
                                    </div>
                                </a>
                            </Link>
                            <div className="item-hero-text" >
                                <Link href="/#cursos">
                                    <h3>
                                        <a href="/#cursos">Clases para practicar.</a>
                                    </h3>
                                </Link>
                                <p>Frases, expresiones, verbos, verbos frasales, frases motivadoras, conversaciones en inglés con traducción.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}