
import Layout from "../../../components/Layout"
import BotonMain from "../../../components/BotonMain"
import InfoCat from "../../../components/InfoCat"
import OnePostCat from "../../../components/OnePostCat"
import Head from "next/head"
import AdSense from 'react-adsense'
import JsxParser from 'react-jsx-parser'
import Link from "next/link"
import { useState, useEffect } from 'react'

export default function IndexCat({ dataCat, dataContCat }) {

    const [adsenseActive, setAdsenseActive] = useState(false)

    const reloadEzoic = (percent, ids) => {
        var ezstandalone = window.ezstandalone || {}
        ezstandalone.cmd = ezstandalone.cmd || []
        ezstandalone.cmd.push(function () {

            var rand = Math.random() * 100
            console.log('Rand ', rand)

            if (percent > rand) {
                setAdsenseActive(false)
                console.log("adsenseActive false")
                ezstandalone.define(ids)
                if (ezstandalone.enabled) {
                    ezstandalone.refresh()
                } else {
                    ezstandalone.enable()
                    ezstandalone.display()
                }
            } else {
                ezstandalone.destroy()
                setAdsenseActive(true)
                console.log("adsenseActive true")
            }

        });
    }

    useEffect(() => {
        let percent = 10
        let ids = [100, 103, 105, 106, 108]
        reloadEzoic(percent, ids)
    }, [])

    const { catcontenido } = dataContCat.contenido[0]
    let texto = ''

    catcontenido ?
        texto = catcontenido
            .replace(/<p><br><\/p>/g, '<div class="space"></div>')
            .replace(/ql-cursor/g, '')
            .replace(/<a/g, '<Link')
            .replace(/target="_blank">/g, '><a class="enlace">')
            .replace(/<\/a>/g, '</a></Link>')
        : ''

    texto === '<div class="space"></div>' ?
        texto = ''
        : ''

    return (

        <Layout>
            <Head>
                <link rel="icon" href="/favicon.png" />
                <title>{dataCat.categoria[0].titulo} en inglés | Curso de inglés en línea</title>
                <meta name="description" content={dataCat.categoria[0].descripcion} />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"></link>
            </Head>

            <BotonMain
                titulo='Vocabulario de hoy'
                icono='fa-stream'
                dir='/vocabulario'
                bg='bg-secundario'
            />

            {
                adsenseActive ?
                    <AdSense.Google
                        // full-cat
                        client='ca-pub-3630578707238850'
                        slot='2941801066'
                        style={{
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            textAlign: 'center'
                        }}
                        format='auto'
                        responsive='true'
                    />
                    :
                    <div id="ezoic-pub-ad-placeholder-103"></div>
            }

            <InfoCat
                icono={dataCat.categoria[0].icono}
                titulo={dataCat.categoria[0].titulo}
                nivel={dataCat.categoria[0].nivel}
                descripcion={dataCat.categoria[0].descripcion}
            />

            {
                adsenseActive ?
                    ''
                    :
                    <div id="ezoic-pub-ad-placeholder-105"></div>
            }

            {texto === '' ?
                ''
                :
                (
                    <div>
                        <JsxParser components={{ Link }} jsx={`${texto}`} className="contenido" />
                    </div>
                )
            }

            {
                adsenseActive ?
                    ''
                    :
                    <div id="ezoic-pub-ad-placeholder-106"></div>
            }

            <div>
                <BotonMain
                    titulo='Todas las lecciones'
                    icono='fa-home'
                    dir='/#lecciones'
                    bg='bg-primario'
                />
            </div>

            {
                adsenseActive ?
                    <div className="text-center">
                        <AdSense.Google
                            // 320x50-cat-medio
                            client='ca-pub-3630578707238850'
                            slot='4629132616'
                            style={{
                                display: 'inline-block',
                                width: 320 + 'px',
                                height: 50 + 'px',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                textAlign: 'center'
                            }}
                        />
                    </div>
                    :
                    <div id="ezoic-pub-ad-placeholder-108"></div>
            }

            <div className="galeria-posts-cat">
                {
                    dataCat.lecciones.map(({ id, slug, slug_cat, titulo, imagen, audio }) => (
                        <div key={id}>
                            <OnePostCat
                                titulo={titulo}
                                imagen={imagen}
                                audio={audio}
                                slug={slug}
                                slug_cat={slug_cat}
                            />
                        </div>
                    ))
                }
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    try {
        const res = await fetch('https://admin.inglesxdia.com/api/categorias',
            {
                method: "GET",
                headers: {
                    "User-Agent": "*",
                    Accept: "application/json; charset=UTF-8",
                },
            })
        const data = await res.json()
        const paths = data.categorias.map(({ slug }) => ({
            params: {
                categoria: `${slug}`
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
        const resCat = await fetch(`https://admin.inglesxdia.com/api/categoria/${params.categoria}`,
            {
                method: "GET",
                headers: {
                    "User-Agent": "*",
                    Accept: "application/json; charset=UTF-8",
                },
            })
        const dataCat = await resCat.json()

        const resContCat = await fetch(`https://admin.inglesxdia.com/api/catcontenido/${params.categoria}`,
            {
                method: "GET",
                headers: {
                    "User-Agent": "*",
                    Accept: "application/json; charset=UTF-8",
                },
            })
        const dataContCat = await resContCat.json()

        return {
            props: {
                dataCat,
                dataContCat
            },
            revalidate: 5, // In seconds
        }
    } catch (error) {
        console.log(error)
    }
}