import Layout from "../components/Layout"
import BloqueInicio from "../components/BloqueInicio"
import BotonMain from "../components/BotonMain"
import TituloBloque from "../components/TituloBloque"
import BloqueCatInicio from "../components/BloqueCatInicio"
import IconoSuperior from "../components/IconoSuperior"
import Head from "next/head"
import CookieConsent from "react-cookie-consent"
import AdSense from 'react-adsense';

export default function index({ bloques, cats, buscar }) {

    return (
        <Layout home buscar={buscar}>
            <Head>
                <link rel="icon" href="/favicon.png" />
                <title>Curso de inglés en línea | inglesxdia</title>
                <meta name="description" content="Clases de inglés todos los días de lecturas cortas, lecturas básicas, vocabulario básico, frases comunes, expresiones, formas de decir, verbos, phrasal verbs y mucho más." />
            </Head>

            <BotonMain
                titulo='Vocabulario de hoy'
                icono='fa-stream'
                dir='/vocabulario'
                bg='bg-secundario'
            />

            <AdSense.Google
                // 300x100-inicio-voc
                client='ca-pub-3630578707238850'
                slot='5353536865'
                style={{
                    display: 'block',
                    height: 100 + 'px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: -12 + 'px',
                    textAlign: 'center'
                }}
                format=''
                responsive='true'
            />

            <div id="lecs"></div>

            {
                bloques.secciones.map(({ id, icono, titulo, color, bg, data }) => (
                    <div key={id}>
                        <TituloBloque
                            titulo={titulo}
                            icono={icono}
                            bg="bg-primario"
                        />
                        <div id="cats" className="galeria-bloque-inicio">
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

            <TituloBloque
                titulo='Todas las categorías'
                icono='fa-th-list'
                bg='bg-primario'
            />

            <AdSense.Google
                // 300x100-inicio-bajo
                client='ca-pub-3630578707238850'
                slot='5282218829'
                style={{
                    display: 'block',
                    height: 100 + 'px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: -32 + 'px',
                    textAlign: 'center'
                }}
                format=''
                responsive='true'
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
