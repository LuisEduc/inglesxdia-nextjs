import Layout from "../../components/Layout"
import BotonVoc from "../../components/BotonVoc"
import CardCarousel from "../../components/CardCarousel"
import "react-h5-audio-player/lib/styles.css";
import AudioPlayer from "react-h5-audio-player";
import Image from "next/image";
import Head from "next/head"
import AdSense from 'react-adsense'
import { useEffect, useState } from 'react'

export default function IndexVoc({ data }) {

    const [adsenseActive, setAdsenseActive] = useState();

    const reloadEzoic = () => {
        var ezstandalone = ezstandalone || {}
        ezstandalone.cmd = ezstandalone.cmd || []
        ezstandalone.cmd.push(function () {
            var percentageToRunEzoic = 50
            if (ezstandalone.isEzoicUser(percentageToRunEzoic) === true) {
                setAdsenseActive(false)
                ezstandalone.define(103, 105)
                ezstandalone.enable()
                ezstandalone.display()
            } else {
                setAdsenseActive(true)
            }
        });
    }

    useEffect(() => {
        if (adsenseActive) {
            console.log("adsenseActive true")
        } else {
            reloadEzoic()
            console.log("adsenseActive false")
        }
    }, [])

    return (
        <Layout>
            <Head>
                <link rel="icon" href="/favicon.png" />
                <title>Aprender palabras en inglés cada día | inglesxdia</title>
                <meta name="description" content="Aprende nuevo vocabulario en inglés todos los días. La palabras son básicas, medias y avanzadas, incluyen audio de la pronunciación y frases de ejemplo." />
            </Head>

            {
                adsenseActive ?
                    <AdSense.Google
                        // full-voc
                        client='ca-pub-3630578707238850'
                        slot='1345454840'
                        style={{
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginTop: 15 + 'px',
                            textAlign: 'center'
                        }}
                        format='auto'
                        responsive='true'
                    />
                    :
                    <div id="ezoic-pub-ad-placeholder-103"></div>
            }

            <div className="inicio-badge">
                <BotonVoc
                    title='Lecciones útiles'
                    text='color-blanco'
                    icon='fas fa-headphones fa-xs'
                    bg='bg-primario'
                    border='border-blanco'
                    dir='/#lecs'
                />
            </div>

            <div className="inicio-badge">
                <BotonVoc
                    title='Lecturas cortas'
                    text='color-blanco'
                    icon='fas fa-book-open fa-xs'
                    bg='bg-secundario'
                    border='border-blanco'
                    dir='/lecs/lc'
                />
            </div>

            {
                adsenseActive ?
                    <AdSense.Google
                        // 300x50-voc-alto
                        client='ca-pub-3630578707238850'
                        slot='9793863809'
                        style={{
                            display: 'block',
                            height: 50 + 'px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginTop: 15 + 'px',
                            textAlign: 'center'
                        }}
                        format=''
                        responsive='true'
                    />
                    :
                    ''
            }

            <div className="grid-info">
                <div className="info">
                    <div className="info-text">
                        <span className="info-text-subtitulo">Nuevo <span className="resalt-orange" style={{ color: '#fff' }}>vocabulario</span> en inglés</span>
                        <h1 className="font-weight-bold text-light info-text-titulo">Aprender palabras en inglés cada día<span className="text-primary">.</span></h1>
                    </div>
                    <div>
                        <a type="button" onClick={() => window.open("https://www.facebook.com/inglesxdia/", "_blank")} className="btn btn-outline-blue btn-redes">Visítanos
                            en Facebook<i className="ms-2 fab fa-facebook-square"></i></a>
                        <a type="button" onClick={() => window.open("https://www.youtube.com/channel/UC17wrAHkky26woClR91Pr1A", "_blank")} className="btn btn-outline-red btn-redes">Visítanos
                            en Youtube<i className="ms-2 fab fa-youtube"></i></a>
                    </div>
                </div>
                <div className="div-carousel-voc">
                    <CardCarousel
                        data={data}
                    />
                    {
                        adsenseActive ?
                            ''
                            :
                            <div id="ezoic-pub-ad-placeholder-105"></div>
                    }
                </div>
            </div>

            <div className="w-75 mx-auto text-center mt-5">
                <h2 className="font-weight-bold text-aviso-consejo">Consejos para aprender nuevo vocabulario en inglés con
                    <span className="resalt">inglesxdia.tech</span>
                </h2>
            </div>

            <div className="tips-container">
                <div className="tip">
                    <div className="tip-preview">
                        <span>Consejo 1</span>
                        <h3 className="tip-title">Dedicación</h3>
                        {/* <div className="img-bloque-tip mx-auto">
                            <Image
                                src="/img/dedicacion.svg"
                                alt="Dedicación en inglés"
                                width="100%"
                                height="100%"
                                layout="responsive"
                                priority
                            />
                        </div> */}
                    </div>
                    <div className="tip-info mt-3">
                        <span>inglesXdia</span>
                        <h2>Dedica parte de tu día a aprender vocabulario.</h2>
                        <p>Ingresa en la mañana, revisa, lee y escucha la pronunciación en inglés de las palabras del día. Si no te ha quedado claro puedes ingresar en cualquier momento y repetir la lección. Tu vocabulario aumentará porque al mes aprenderás 90 palabras.</p>
                    </div>
                </div>
                <div className="tip">
                    <div className="tip-preview">
                        <span>Consejo 2</span>
                        <h3 className="tip-title">Constancia</h3>
                        {/* <div className="img-bloque-tip mx-auto">
                            <Image
                                src="/img/sesion.svg"
                                alt="Constancia en inglés"
                                width="100%"
                                height="100%"
                                layout="responsive"
                                priority
                            />
                        </div> */}
                    </div>
                    <div className="tip-info mt-3">
                        <span>inglesXdia</span>
                        <h2>Utiliza el inglés en tu rutina diaria.</h2>
                        <p>Las palabras que proporcionamos son elegidas de forma que puedan ser usadas en situaciones
                            cotidianas, entonces, durante el día puedes integrar lo que has aprendido en oraciones o frases
                            simples, no hace falta decirlo en voz alta. De esta forma mejorará tu pronunciación en inglés.</p> </div>
                </div>
                <div className="tip">
                    <div className="tip-preview">
                        <span>Consejo 3</span>
                        <h3 className="tip-title">Imaginación</h3>
                        {/* <div className="img-bloque-tip mx-auto">
                            <Image
                                src="/img/brain.svg"
                                alt="Imaginación en inglés"
                                width="100%"
                                height="100%"
                                layout="responsive"
                                priority
                            />
                        </div> */}
                    </div>
                    <div className="tip-info mt-3">
                        <span>inglesXdia</span>
                        <h2>Piensa en inglés y aprende más rápido.</h2>
                        <p> No memorices el significado de la palabra, sino piensa lo que representa. ¿No está claro? Te
                            propongo un ejemplo: la palabra tree significa árbol, entonces no es recomendable repetir la típica
                            frase: tree, árbol, tree, árbol... Lo que debes hacer es pensar que tree representa una planta, con
                            un tronco leñoso, hojas y según el tipo puede tener frutas, etc. Así será mucho más fácil y rápido
                            el aprendizaje. </p></div>
                </div>
                <div className="tip">
                    <div className="tip-preview">
                        <span>Consejo 4</span>
                        <h3 className="tip-title">Asociación</h3>
                        {/* <div className="img-bloque-tip mx-auto">
                            <Image
                                src="/img/asociacion.svg"
                                alt="Asociación en inglés"
                                width="100%"
                                height="100%"
                                layout="responsive"
                                priority
                            />
                        </div> */}
                    </div>
                    <div className="tip-info mt-3">
                        <span>inglesXdia</span>
                        <h2>Aprende vocabulario de inglés asociando palabras.</h2>
                        <p> Recomendable para enriquecer tu vocabulario de verbos, la idea es relacionar el verbo
                            con una palabra en español. Vamos a practicar con ejemplos: </p>
                        <ul style={{ margin: '-12px 0 5px 0' }}>
                            <li>Bet - Apostar: Gastas todo el dinero <span className="text-verb">apostando</span>, <span className="text-verb">vete</span> de mi casa.</li>
                            <li>Come - Venir: Para <span className="text-verb">venir</span> a la piscina, <span className="text-verb">come</span> poco.</li>
                        </ul>
                        <p> Si lo notas, la asociación es más fácil de recordar cuando relacionas el significado del
                            verbo
                            <span className="text-verb">(apostar)</span> con una palabra en español parecida <span className="text-verb">(vete)</span> al verbo en inglés <span className="text-verb">(bet)</span>.
                        </p>
                    </div>
                </div>

            </div>

        </Layout>
    )
}

export async function getStaticProps() {
    try {
        const res = await fetch('https://admin.inglesxdia.com/api/palabras',
            {
                method: "GET",
                headers: {
                    "User-Agent": "*",
                    Accept: "application/json; charset=UTF-8",
                },
            })
        const data = await res.json()
        return {
            props: {
                data,
            },
            revalidate: 5, // In seconds
        }
    } catch (error) {
        console.log(error)
    }
}