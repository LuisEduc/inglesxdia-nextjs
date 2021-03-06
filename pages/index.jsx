import Layout from "../components/Layout"
import BloqueInicio from "../components/BloqueInicio"
import BotonMain from "../components/BotonMain"
import TituloBloque from "../components/TituloBloque"
import BloqueCatInicio from "../components/BloqueCatInicio"
import IconoSuperior from "../components/IconoSuperior"
import Head from "next/head"
import CookieConsent from "react-cookie-consent"
import AdSense from 'react-adsense'
import { useState, useEffect } from 'react'

export default function Index({ bloques, cats, buscar }) {

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    const reloadEzoic = (ids, cookieIXD) => {
        var ezstandalone = window.ezstandalone || {}
        ezstandalone.cmd = ezstandalone.cmd || []
        ezstandalone.cmd.push(function () {
            if (cookieIXD) {
                ezstandalone.define(ids)
                if (ezstandalone.enabled) {
                    ezstandalone.refresh()
                } else {
                    ezstandalone.enable()
                    ezstandalone.display()
                }
            } else {
                ezstandalone.destroy()
                console.log("cookieIXD false")
            }
        });
    }

    useEffect(() => {
        let ids = [100]
        let cookieIXD = getCookie('CookieIXD')
        reloadEzoic(ids, cookieIXD)
    }, [])

    return (
        <Layout home buscar={buscar}>
            <Head>
                <link rel="icon" href="/favicon.png" />
                <title>Curso de inglés en línea / inglesxdia</title>
                <meta name="description" content="Lecciones de inglés básico todos los días. En este curso en línea para principiantes aprende a hablar, leer y escribir en inglés gratis con nuestras publicaciones diarias, perfectas para niños, adolescentes y adultos." />
            </Head>

            <div id="lecciones"></div>

            <BotonMain
                titulo='Vocabulario de hoy'
                icono='fa-stream'
                dir='/vocabulario'
                bg='bg-secundario'
            />

            <AdSense.Google
                // full-inicio
                client='ca-pub-3630578707238850'
                slot='3265336329'
                style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    textAlign: 'center'
                }}
                format='auto'
                responsive='true'
            />

            {
                bloques.secciones.map(({ id, icono, titulo, color, bg, data }) => (
                    <div key={id}>
                        <TituloBloque
                            titulo={titulo}
                            icono={icono}
                            bg="bg-primario"
                        />
                        <div className="galeria-bloque-inicio">
                            {
                                data.map(({ id, titulo, imagen, slug_cat, slug }) => (
                                    <div key={id}>
                                        <BloqueInicio titulo={titulo} imagen={imagen} slug_cat={slug_cat} slug={slug}>
                                            <IconoSuperior
                                                icono={icono}
                                                color={color}
                                                bg={bg}
                                            />
                                        </BloqueInicio>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }

            <div id="cursos"></div>

            <TituloBloque
                titulo='Todos los cursos'
                icono='fa-th-list'
                bg='bg-primario'
            />

            <div className="galeria-cat">
                {
                    cats.categorias.map(({ id, icono, slug, nivel, titulo, descripcion }) => (
                        <div key={id}>
                            <BloqueCatInicio
                                icono={icono}
                                nivel={nivel}
                                titulo={titulo}
                                descripcion={descripcion}
                                slug={slug}
                            />
                        </div>
                    ))
                }
            </div>

            <CookieConsent
                location="bottom"
                buttonText="Aceptar"
                cookieName="CookieIXD"
                style={{ background: "#f6f6f6" }}
                buttonStyle={{
                    background: "#7c76b9",
                    color: "#f6f6f6",
                    fontSize: "13px",
                    borderRadius: "5px",
                    margin: "0px 15px 10px"
                }}
                expires={150}
            >
                <span style={{ fontSize: "14px", color: "#232d39" }}>Utilizamos cookies, si continúa navegando, está aceptando su uso.</span>
            </CookieConsent>
        </Layout>

    )
}

export async function getStaticProps() {
    try {
        const resBloques = await fetch('https://admin.inglesxdia.com/api/inicio',
            {
                method: "GET",
                headers: {
                    "User-Agent": "*",
                    Accept: "application/json; charset=UTF-8",
                },
            })
        const bloques = await resBloques.json()
        const resCats = await fetch('https://admin.inglesxdia.com/api/categorias',
            {
                method: "GET",
                headers: {
                    "User-Agent": "*",
                    Accept: "application/json; charset=UTF-8",
                },
            })
        const cats = await resCats.json()
        const resBuscar = await fetch(`https://admin.inglesxdia.com/api/buscar`,
            {
                method: "GET",
                headers: {
                    "User-Agent": "*",
                    Accept: "application/json; charset=UTF-8",
                },
            })
        const buscar = await resBuscar.json()
        return {
            props: {
                bloques,
                cats,
                buscar,
            },
            revalidate: 5, // In seconds
        }
    } catch (error) {
        console.log(error)
    }
}
