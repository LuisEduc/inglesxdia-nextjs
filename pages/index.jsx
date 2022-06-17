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
                <title>▷ Curso de inglés básico en línea / inglesxdia</title>
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
                // 300x250-inicio-voc
                client='ca-pub-3630578707238850'
                slot='5293878410'
                style={{
                    display: 'block',
                    height: 250 + 'px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: -15 + 'px',
                    textAlign: 'center'
                }}
                format='rectangle'
                responsive=''
            />

            {/* <AdSense.Google
                // full-inicio-voc
                client='ca-pub-3630578707238850'
                slot='3909957638'
                style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: -15 + 'px',
                    textAlign: 'center'
                }}
                format='auto'
                responsive='true'
            /> */}

            {/* <AdSense.Google
                // 300x100-inicio-voc
                client='ca-pub-3630578707238850'
                slot='5353536865'
                style={{
                    display: 'block',
                    height: 100 + 'px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: -15 + 'px',
                    textAlign: 'center'
                }}
                format=''
                responsive='true'
            /> */}

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
                        {/* <AdSense.Google
                            // 300x50-inicio
                            client='ca-pub-3630578707238850'
                            slot='4872113806'
                            style={{
                                display: 'block',
                                height: 50 + 'px',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginTop: 15 + 'px',
                                marginBottom: -15 + 'px',
                                textAlign: 'center'
                            }}
                            format=''
                            responsive='true'
                        /> */}
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
