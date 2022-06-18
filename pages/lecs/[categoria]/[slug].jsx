
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
import Link from "next/link"
import JsxParser from 'react-jsx-parser'
import ListaLinks from "../../../components/ListaLinks"
import EzoicAds from "../../../components/EzoicAds"

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

export default function Individual({ dataLec, dataCat, cats, contLec }) {

    const { leccion, preguntas, imagenes } = dataLec;

    const { contenido } = contLec.contenido[0];

    let texto = ''

    contenido ?
        texto = contenido
            .replace(/<p><br><\/p>/g, '<div class="space"></div>')
            .replace(/<h3><br><\/h3>/g, '<div class="space"></div>')
            .replace(/<h2><br><\/h2>/g, '<div class="space"></div>')
            .replace(/ql-cursor/g, '')
            .replace(/<a/g, '<Link')
            .replace(/target="_blank">/g, '><a class="enlace">')
            .replace(/<\/a>/g, '</a></Link>')
            .replace(/<u><\/u>/g, '')
            .replace('<h2>¡Completa', '*--*<h2>¡Completa')
            .replace(' style="color: rgb(0, 0, 0);"', '')
        : ''

    texto === '<div class="space"></div>' ?
        texto = ''
        : ''

    const miTexto = texto.split("*--*");
    let textos = miTexto[0]

    const [slide, setSlide] = useState(0);

    const onChange = (item) => {
        setSlide(item)
    }


    const reloadEzoic = (ids) => {
        let ezstandalone = window.ezstandalone || {};
        ezstandalone.cmd = ezstandalone.cmd || [];
        ezstandalone.cmd.push(function () {
            ezstandalone.setEzoicAnchorAd(false);
            ezstandalone.define(ids);
            ezstandalone.refresh();
            ezstandalone.enable();
            ezstandalone.display();
        });
    }

    useEffect(() => {
        const ids = [103, 105, 108, 109, 110, 115, 118, 124, 128, 129, 132]
        reloadEzoic(ids)
        console.log('Ezoic listo')
    }, [])

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

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                    <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"></link>
                </Head>

                <div id="ezoic-pub-ad-placeholder-103"> </div>

                <div className="lecs-titulo">
                    <h1>{leccion[0].titulo_seo}</h1>
                </div>

                {/* <div id="ezoic-pub-ad-placeholder-105"> </div> */}

                <BotonMain
                    titulo='Vocabulario de hoy'
                    icono='fa-stream'
                    dir='/vocabulario'
                    bg='bg-secundario'
                />

                <div id="ezoic-pub-ad-placeholder-108"> </div>

                <BotonMain
                    titulo='Lecciones similares'
                    icono='fa-chevron-circle-left'
                    dir={`/lecs/${dataCat.categoria[0].slug}`}
                    bg='bg-primario'
                />

                {/* <div id="ezoic-pub-ad-placeholder-109"> </div> */}

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
                                    />
                                </div>
                            ))
                        }
                    </Carousel>
                </div>

                <div id="ezoic-pub-ad-placeholder-110"> </div>

                <Cuestionario
                    questions={preguntas}
                    nextQ={nextQ}
                    firstQ={firstQ}
                    valorInicial={0}
                >
                </Cuestionario>

                {/* <div id="ezoic-pub-ad-placeholder-111"> </div> */}

                <AudioContainer
                    titulo={leccion[0].titulo}
                    audio={leccion[0].audio}
                />

                <div id="ezoic-pub-ad-placeholder-115"> </div>

                <Link href='https://bit.ly/34j0kVS'>
                    <a>
                        <div className='btn-main bg-app'>
                            <i className='fab fa-google-play fa-xs'></i>
                            <p>Descargar aplicación</p>
                        </div>
                    </a>
                </Link>

                <div id="ezoic-pub-ad-placeholder-118"> </div>

                {textos === '' ?
                    ''
                    :
                    (
                        <div>
                            <JsxParser components={{ Link }} jsx={`${textos}`} className="contenido" />
                        </div>
                    )
                }

                <div id="ezoic-pub-ad-placeholder-124"> </div>

                <BotonMain
                    titulo='Relacionadas'
                    icono='fa-grip-horizontal'
                    dir={`/lecs/${dataCat.categoria[0].slug}`}
                    bg='bg-secundario'
                />

                <div id="ezoic-pub-ad-placeholder-128"> </div>

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

                <div id="ezoic-pub-ad-placeholder-129"> </div>

                <BotonMain
                    titulo='Todos los cursos'
                    icono='fa-grip-horizontal'
                    dir={`/#cursos`}
                    bg='bg-primario'
                />

                <div className="div-lista-links">
                    {
                        cats.categorias.map(({ id, icono, slug, nivel, titulo }) => (
                            <div key={id}>
                                <ListaLinks
                                    icono={icono}
                                    nivel={nivel}
                                    titulo={titulo}
                                    slug={slug}
                                />
                            </div>
                        ))
                    }
                </div>

                <div id="ezoic-pub-ad-placeholder-132"> </div>
                
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
            // fallback: false,
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

        const resCats = await fetch('https://admin.inglesxdia.com/api/categorias',
            {
                method: "GET",
                headers: {
                    "User-Agent": "*",
                    Accept: "application/json; charset=UTF-8",
                },
            })
        const cats = await resCats.json()

        const resContLec = await fetch(`https://admin.inglesxdia.com/api/contenido/${params.categoria}/${params.slug}`,
            {
                method: "GET",
                headers: {
                    "User-Agent": "*",
                    Accept: "application/json; charset=UTF-8",
                },
            })
        const contLec = await resContLec.json()

        return {
            props: {
                dataLec,
                dataCat,
                cats,
                contLec
            },
            revalidate: 5, // In seconds
        }
    } catch (error) {
        console.log(error)
    }
}