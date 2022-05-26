
import Layout from "../../../components/Layout"
import BotonMain from "../../../components/BotonMain"
import TituloBloque from "../../../components/TituloBloque"
import AudioContainer from "../../../components/AudioContainer"
import BloqueInicio from "../../../components/BloqueInicio"
import Head from "next/head"
import Cuestionario from "../../../components/Cuestionario"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "react-h5-audio-player/lib/styles.css";
import Image from "next/image"
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import AdSense from 'react-adsense';
import GoogleAdSense from 'react-simple-adsense';
import Link from "next/link"

const settings = {
    showIndicators: false,
    showArrows: true,
    emulateTouch: true,
    showStatus: false,
    showThumbs: false,
    centerMode: false,
    infiniteLoop: true,
    showIndicators: true,
    preventMovementUntilSwipeScrollTolerance: true,
    swipeScrollTolerance: 60,
};

export default function Individual({ dataLec, dataCat }) {

    const { leccion, preguntas, imagenes } = dataLec;

    const [slide, setSlide] = useState(0);

    const onChange = (item) => {
        setSlide(item)
    }

    const dynamicRoute = useRouter().asPath

    useEffect(() => {
        setSlide(0)
    }, [dynamicRoute])

    const data = [];
    const nextQ = [];
    const firstQ = [];
    for (let index = 0; index < dataCat.lecciones.length; index++) {
        if (dataCat.lecciones[index].id != leccion[0].id) {
            const element = dataCat.lecciones[index];
            data.push(element)
        } else {
            dataCat.lecciones[index + 1] != undefined ?
                nextQ.push(dataCat.lecciones[index + 1]) :
                ''
        }
    }
    firstQ.push(dataCat.lecciones[0]);
    const dataRel = data.slice(0, 3)

    return (
        <>
            <Layout>
                <Head>
                    <link rel="icon" href="/favicon.png" />
                    <title>{leccion[0].titulo_seo}</title>
                    <meta name="description" content={leccion[0].descripcion} />
                </Head>

                {/* <!-- Ezoic - sidebar-lec - sidebar --> */}
                <div id="ezoic-pub-ad-placeholder-103"> </div>
                {/* <!-- End Ezoic - sidebar-lec - sidebar --> */}

                <AdSense.Google
                    // 300x200-indi-hero
                    client='ca-pub-3630578707238850'
                    slot='9793368963'
                    style={{
                        display: 'block',
                        height: 200 + 'px',
                        width: 85 + '%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginBottom: 15 + 'px',
                        marginTop: 15 + 'px',
                        textAlign: 'center'
                    }}
                    format=''
                />

                <div className="lecs-titulo">
                    <h1>{leccion[0].titulo_seo}</h1>
                </div>

                {/* <!-- Ezoic - display-lec-titulo - top_of_page --> */}
                <div id="ezoic-pub-ad-placeholder-104"> </div>
                {/* <!-- End Ezoic - display-lec-titulo - top_of_page --> */}

                <BotonMain
                    titulo='Vocabulario de hoy'
                    icono='fa-stream'
                    dir='/vocabulario'
                    bg='bg-secundario'
                />

                <AdSense.Google
                    // 300x200-indi-alto
                    client='ca-pub-3630578707238850'
                    slot='6369839715'
                    style={{
                        display: 'block',
                        height: 200 + 'px',
                        width: 85 + '%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        textAlign: 'center'
                    }}
                    format=''
                />

                {/* <!-- Ezoic - display-lec-btn-voc - top_of_page --> */}
                <div id="ezoic-pub-ad-placeholder-105"> </div>
                {/* <!-- End Ezoic - display-lec-btn-voc - top_of_page --> */}

                <BotonMain
                    titulo='Lecciones similares'
                    icono='fa-chevron-circle-left'
                    dir={`/lecs/${dataCat.categoria[0].slug}`}
                    bg='bg-primario'
                />

                {/* <!-- Ezoic - display-lec-btn-simil - top_of_page --> */}
                <div id="ezoic-pub-ad-placeholder-106"> </div>
                {/* <!-- End Ezoic - display-lec-btn-simil - top_of_page --> */}

                <div className="div-carousel-lec">
                    <Carousel {...settings} selectedItem={slide} onChange={onChange}>
                        {
                            imagenes.map(({ imagen }, id) => (
                                <div key={id} className="carousel-lec" >
                                    <Image
                                        src={`https://admin.inglesxdia.com/imagen/${imagen}`}
                                        alt={`${leccion[0].titulo_seo}`}
                                        width="85%"
                                        height="100%"
                                        layout="responsive"
                                        objectFit="cover"
                                        placeholder="blur"
                                        blurDataURL="/img/placeholder.webp"
                                        sizes="48vw"
                                        priority
                                    />
                                </div>
                            ))
                        }
                    </Carousel>
                </div>

                <AdSense.Google
                    // 300x100-indi-medio
                    client='ca-pub-3630578707238850'
                    slot='8201754571'
                    style={{
                        display: 'block',
                        height: 100 + 'px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        textAlign: 'center'
                    }}
                    format=''
                    responsive='true'
                />

                {/* <!-- Ezoic - display-lec-carousel - top_of_page --> */}
                <div id="ezoic-pub-ad-placeholder-108"> </div>
                {/* <!-- End Ezoic - display-lec-carousel - top_of_page --> */}

                <Cuestionario
                    questions={preguntas}
                    nextQ={nextQ}
                    firstQ={firstQ}
                    valorInicial={0}
                />

                {/* <!-- Ezoic - display-lec-test - top_of_page --> */}
                <div id="ezoic-pub-ad-placeholder-110"> </div>
                {/* <!-- End Ezoic - display-lec-test - top_of_page --> */}

                <AudioContainer
                    titulo={leccion[0].titulo}
                    audio={leccion[0].audio}
                />

                {/* <!-- Ezoic - display-lec-audio - top_of_page --> */}
                <div id="ezoic-pub-ad-placeholder-109"> </div>
                {/* <!-- End Ezoic - display-lec-audio - top_of_page --> */}

                <BotonMain
                    titulo='Relacionadas'
                    icono='fa-grip-horizontal'
                    dir={`/lecs/${dataCat.categoria[0].slug}`}
                    bg='bg-secundario'
                />

                {/* <!-- Ezoic - display-lec-btn-rel - top_of_page --> */}
                <div id="ezoic-pub-ad-placeholder-111"> </div>
                {/* <!-- End Ezoic - display-lec-btn-rel - top_of_page --> */}

                {
                    <div className="galeria-bloque-inicio" style={{ marginTop: -15 + 'px' }}>
                        {
                            dataRel.map(({ id, titulo, imagen, slug_cat, slug }) => (
                                <div key={id}>
                                    <BloqueInicio
                                        titulo={titulo}
                                        imagen={imagen}
                                        slug_cat={slug_cat}
                                        slug={slug}
                                    >
                                        <div style={{ height: '25px' }}></div>
                                    </BloqueInicio>
                                </div>
                            ))
                        }
                    </div>
                }

                <AdSense.Google
                    // 300x100-indi-bajo
                    client='ca-pub-3630578707238850'
                    slot='1183870334'
                    style={{
                        display: 'block',
                        height: 100 + 'px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginBottom: 15 + 'px',
                        textAlign: 'center'
                    }}
                    format=''
                    responsive='true'
                />

                {/* <!-- Ezoic - display-lec-rel - top_of_page --> */}
                <div id="ezoic-pub-ad-placeholder-112"> </div>
                {/* <!-- End Ezoic - display-lec-rel - top_of_page --> */}

            </Layout>
        </>
    )
}

export async function getStaticPaths() {
    try {
        const res = await fetch('https://admin.inglesxdia.com/api/lecciones',
            {
                method: "GET",
                headers: {
                    "User-Agent": "*",
                    Accept: "application/json; charset=UTF-8",
                },
            })
        const data = await res.json()
        const paths = data.map(({ slug_cat, slug }) => ({
            params: {
                categoria: `${slug_cat}`,
                slug: `${slug}`,
            }
        }))
        return {
            paths,
            fallback: 'blocking',
        }
    } catch (error) {
        console.log(error)
    }
}

export async function getStaticProps({ params }) {
    try {
        const resLec = await fetch(`https://admin.inglesxdia.com/api/lecciones/${params.categoria}/${params.slug}`
            ,
            {
                method: "GET",
                headers: {
                    "User-Agent": "*",
                    Accept: "application/json; charset=UTF-8",
                },
            })
        const dataLec = await resLec.json()
        const resCat = await fetch(`https://admin.inglesxdia.com/api/categoria/${params.categoria}`,
            {
                method: "GET",
                headers: {
                    "User-Agent": "*",
                    Accept: "application/json; charset=UTF-8",
                },
            }
        )
        const dataCat = await resCat.json()
        return {
            props: {
                dataLec,
                dataCat,
            },
            revalidate: 5, // In seconds
        }
    } catch (error) {
        console.log(error)
    }
}