import Image from "next/image"
import Buscador from "../components/Buscador"
import AdSense from 'react-adsense';
import Link from "next/link";

export default function Hero({ buscar }) {
    return (
        <>
            <div className="hero hero-bg">
                <div className="hero-text">
                    <div className="hero-titulo">
                        <h1>Aprende inglés diario<span className="text-primary">.</span></h1>
                    </div>
                    <div className="buscador">
                        <Buscador buscar={buscar} />
                    </div>
                    <div className="div-img-hero">
                        <Image
                            src="/img/study.svg"
                            alt="studying girl"
                            width={310}
                            height={300}
                            objectFit="cover"
                        />
                    </div>
                    {/* <div className="mx-auto">
                        <a href="./blog/adquisicion-diaria-de-ingles" className="btn-mor">¿Cómo aprender inglés?</a>
                    </div> */}
                </div>

                <AdSense.Google
                    // 300x90-hero
                    client='ca-pub-3630578707238850'
                    slot='9778773781'
                    className='ads-mob'
                    style={{ display: 'inline-grid', width: 98 + '%', height: 90 + 'px' }}
                    format=''
                />

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
                                <a>Vocabulario diario en inglés.</a>
                            </Link>
                            <p>Vocabulario fácil, medio y avanzado en inglés. Significado, traducción, frases de ejemplo y pronunciación, todos los días.</p>
                        </div>
                    </div>
                    <div className="hero-resumen-item">
                        <div className="item-hero-number">
                            <Link href="/#lecs">
                                <a href="/#lecs">
                                    <div className="item-hero-number">
                                        <span>2</span>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className="item-hero-text">
                            <Link href="/#lecs">
                                <a href="/#lecs">Frases y expresiones en inglés.</a>
                            </Link>
                            <p>Expresiones y frases útiles en inglés, verbos con todas las letras, lecturas, vocabulario básico de inglés y mucho más.</p>
                        </div>
                    </div>
                    <div className="hero-resumen-item">
                        <div className="item-hero-number">
                            <Link href="/#lecs">
                                <a href="/#lecs">
                                    <div className="item-hero-number">
                                        <span>3</span>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className="item-hero-text" >
                            <Link href="/#lecs">
                                <a href="/#lecs">Ejercicios para practicar.</a>
                            </Link>
                            <p>Todas las lecciones incluyen cuestionario, traducción y pronunciación en inglés-español, la voz es natural y pausada.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}