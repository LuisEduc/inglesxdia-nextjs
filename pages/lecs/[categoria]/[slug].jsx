
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
    const dataRel = data.slice(0, 6)

    return (
        <>
            <Layout>
                <Head>
                    <link rel="icon" href="/favicon.png" />
                    <title>{leccion[0].titulo_seo} | inglesxdia</title>
                    <meta name="description" content={leccion[0].descripcion} />
                </Head>

                <AdSense.Google
                    // 300x50-indi
                    client='ca-pub-3630578707238850'
                    slot='4052295657'
                    style={{
                        display: 'block',
                        height: 50 + 'px',
                        width: 90 + '%',
                        marginBottom: 15 + 'px',
                        marginTop: 15 + 'px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        textAlign: 'center'
                    }}
                    format=''
                />

                <BotonMain
                    titulo='Vocabulario de hoy'
                    icono='fa-stream'
                    dir='/vocabulario'
                    bg='bg-secundario'
                />

                <BotonMain
                    titulo='Lecciones similares'
                    icono='fa-chevron-circle-left'
                    dir={`/lecs/${dataCat.categoria[0].slug}`}
                    bg='bg-primario'
                />

                <AdSense.Google
                    // 300x90-indi-alto
                    client='ca-pub-3630578707238850'
                    slot='7109410627'
                    style={{
                        display: 'block',
                        height: 90 + 'px',
                        marginBottom: 17 + 'px',
                        marginTop: 17 + 'px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        textAlign: 'center'
                    }}
                    format=''
                    responsive='true'
                />

                <BotonMain
                    titulo='Escuchar audio'
                    icono='fa-headphones'
                    dir='#audio'
                    bg='bg-secundario'
                />

                <BotonMain
                    titulo='Resolver test'
                    icono='fa-graduation-cap'
                    dir='#test'
                    bg='bg-primario'
                />

                <AdSense.Google
                    // full-indi
                    client='ca-pub-3630578707238850'
                    slot='6905737434'
                    style={{ display: 'block', textAlign: 'center', marginBottom: 8 + 'px', }}
                    format='auto'
                    responsive='true'
                    layoutKey='-gw-1+2a-9x+5c'
                />

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
                                        priority
                                    />
                                </div>
                            ))
                        }
                    </Carousel>

                </div>

                {/* <AdSense.Google
                    // 300x250-indi
                    client='ca-pub-3630578707238850'
                    slot='6438145214'
                    className='ads-mob'
                    style={{ display: 'inline-block', width: 300 + 'px', height: 250 + 'px', margin: 'auto' }}
                    format=''
                /> */}

                <div id="test"></div>
                <AdSense.Google
                    // 300x90-indi
                    client='ca-pub-3630578707238850'
                    slot='2960276072'
                    className='ads-mob'
                    style={{ display: 'block', height: 90 + 'px' }}
                    format=''
                    responsive='true'
                />
                {/* <AdSense.Google
                    // full-indi-medio
                    client='ca-pub-3630578707238850'
                    slot='3511398233'
                    style={{ display: 'block', textAlign: 'center' }}
                    format='auto'
                    responsive='true'
                    layoutKey='-gw-1+2a-9x+5c'
                /> */}

                <div id="audio"></div>
                <Cuestionario
                    questions={preguntas}
                    nextQ={nextQ}
                    firstQ={firstQ}
                    valorInicial={0}
                />

                <AudioContainer
                    titulo={leccion[0].titulo}
                    audio={leccion[0].audio}
                />

                {/* <AdSense.Google
                    // full-indi-bajo
                    client='ca-pub-3630578707238850'
                    slot='4370311034'
                    style={{ display: 'block', textAlign: 'center' }}
                    format='auto'
                    responsive='true'
                    layoutKey='-gw-1+2a-9x+5c'
                /> */}

                {/* <AdSense.Google
                    // 300x50-indi
                    client='ca-pub-3630578707238850'
                    slot='4052295657'
                    style={{ display: 'block', height: 50 + 'px', marginBottom: 15 + 'px', marginTop: 15 + 'px', textAlign: 'center' }}
                    format=''
                    responsive='true'
                /> */}

                <BotonMain
                    titulo='Relacionadas'
                    icono='fa-grip-horizontal'
                    dir={`/lecs/${dataCat.categoria[0].slug}`}
                    bg='bg-secundario'
                />

                <AdSense.Google
                    // 300x90-indi-bajo
                    client='ca-pub-3630578707238850'
                    slot='8034749563'
                    style={{ display: 'block', height: 90 + 'px', marginBottom: 15 + 'px', marginTop: 15 + 'px', textAlign: 'center' }}
                    format=''
                    responsive='true'
                />

                {/* <TituloBloque
                    titulo='Relacionadas'
                    icono='fa-grip-horizontal'
                    bg='bg-secundario'
                /> */}
                {
                    <div className="galeria-bloque-inicio" style={{ marginTop: -25 + 'px' }}>
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
            revalidate: 10, // In seconds
        }
    } catch (error) {
        console.log(error)
    }
}