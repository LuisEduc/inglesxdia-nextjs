
import Layout from "../../../components/Layout"
import Link from 'next/link'
import BotonMain from "../../../components/BotonMain"
import ImgPost from "../../../components/ImgPost"
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
import { useState, useEffect, useRef } from 'react'

const settings = {
    showIndicators: false,
    showArrows: true,
    emulateTouch: true,
    showStatus: false,
    showThumbs: false,
    centerMode: false,
    infiniteLoop: true,
    preventMovementUntilSwipeScrollTolerance: true,
    swipeScrollTolerance: 40,
};

export default function individual({ dataLec, dataCat }) {


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
                    <title>{leccion[0].titulo_seo} | inglesxdia</title>
                    <meta name="description" content={leccion[0].descripcion} />
                </Head>
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
                <div className="div-carousel-lec">
                    <Carousel {...settings} selectedItem={slide} onChange={onChange}>
                        {
                            imagenes.map(({ imagen }, id) => (
                                <div key={id} className="carousel-lec" >
                                    <Image
                                        src={`http://143.198.55.203/imagen/${imagen}`}
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
                <AudioContainer
                    titulo={leccion[0].titulo}
                    audio={leccion[0].audio}
                />

                <div className={`btn-main bg-primario`} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <i className={`fas fa-graduation-cap`}></i>
                    <h2>Cuestionario</h2>
                </div>
                
                <Cuestionario
                    questions={preguntas}
                    nextQ={nextQ}
                    firstQ={firstQ}
                />

                <TituloBloque
                    titulo='Relacionadas'
                    icono='fa-grip-horizontal'
                    bg='bg-secundario'
                />
                {
                    <div className="galeria-bloque-inicio">
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
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossOrigin="anonymous"></script>
        </>
    )
}

export async function getStaticPaths() {
    try {
        const res = await fetch('http://143.198.55.203/api/lecciones')
        const data = await res.json()
        const paths = data.map(({ slug_cat, slug }) => ({
            params: {
                categoria: `${slug_cat}`,
                slug: `${slug}`,
            }
        }))
        return {
            paths,
            fallback: false,
        }
    } catch (error) {
        console.log(error)
    }
}

export async function getStaticProps({ params }) {
    try {
        const resLec = await fetch(`http://143.198.55.203/api/lecciones/${params.categoria}/${params.slug}`)
        const dataLec = await resLec.json()
        const resCat = await fetch(`http://143.198.55.203/api/categoria/${params.categoria}`)
        const dataCat = await resCat.json()
        return {
            props: {
                dataLec,
                dataCat,
            }
        }
    } catch (error) {
        console.log(error)
    }
}