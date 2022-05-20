import Image from "next/image"
import Buscador from "../components/Buscador"
import AdSense from 'react-adsense';
import Link from "next/link";

export default function Hero({ buscar }) {
    return (
        <>
            <div className="hero hero-bg">
                <div className="hero-text">
                    <div align="center">


                    </div>
                    <div className="hero-titulo">
                        <h1>Estudiar inglés online<span className="text-primary">.</span></h1>
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
                                <a>Vocabulario diario en inglés.</a>
                            </Link>
                            <p>Vocabulario fácil, medio y avanzado en inglés. Significado, traducción, frases de ejemplo y pronunciación, todos los días.</p>
                        </div>
                    </div>
                    <div className="hero-resumen-item">
                        <Link href="/#lecs">
                            <a href="/#lecs">
                                <div className="item-hero-number">
                                    <span>2</span>
                                </div>
                            </a>
                        </Link>
                        <div className="item-hero-text">
                            <Link href="/#lecs">
                                <a href="/#lecs">Frases y expresiones.</a>
                            </Link>
                            <p>Expresiones y frases útiles en inglés, verbos con todas las letras, lecturas, vocabulario básico de inglés y mucho más.</p>
                        </div>
                    </div>
                    <div className="hero-resumen-item">
                        <Link href="/#lecs">
                            <a href="/#lecs">
                                <div className="item-hero-number">
                                    <span>3</span>
                                </div>
                            </a>
                        </Link>
                        <div className="item-hero-text" >
                            <Link href="/#lecs">
                                <a href="/#lecs">Ejercicios para estudiar.</a>
                            </Link>
                            <p>Todas las lecciones incluyen cuestionario, traducción y pronunciación en inglés-español, la voz es natural y pausada.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}