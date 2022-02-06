import Image from "next/image"
import Buscador from "../components/Buscador"

export default function Hero({buscar}) {
    return (
        <>
            <div className="hero hero-bg">
                <div className="hero-text">
                    <div className="hero-titulo">
                        <h1>Curso de inglés básico en línea<span className="text-primary">.</span></h1>
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
                    <div className="mx-auto">
                        <a href="./blog/adquisicion-diaria-de-ingles" className="btn-mor">¿Cómo aprender inglés?</a>
                    </div>
                </div>
                <div className="hero-resumen-grid">
                    <div className="hero-resumen-titulo">
                        <h2>¿Qué ofrece <span className="resalt-mor">inglesxdia.tech</span>?</h2>
                    </div>
                    <div className="hero-resumen-item">
                        <div className="item-hero-number">
                            <span>1</span>
                        </div>
                        <div className="item-hero-text">
                            <h2>Aprender vocabulario en inglés.</h2>
                            <p>Vocabulario fácil, medio y avanzado en inglés, significado, traducción, frases de ejemplo y pronunciación, todos los días.</p>
                        </div>
                    </div>
                    <div className="hero-resumen-item">
                        <div className="item-hero-number">
                            <span>2</span>
                        </div>
                        <div className="item-hero-text">
                            <h2>Frases y expresiones en inglés.</h2>
                            <p>Expresiones y frases útiles en inglés, verbos con todas las letras, lecturas, vocabulario básico de inglés y mucho más.</p>
                        </div>
                    </div>
                    <div className="hero-resumen-item">
                        <div className="item-hero-number">
                            <span>3</span>
                        </div>
                        <div className="item-hero-text" >
                            <h2>Ejercicios para practicar.</h2>
                            <p>Todas las lecciones incluyen cuestionario, traducción y pronunciación en inglés-español, la voz es natural y pausada.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}