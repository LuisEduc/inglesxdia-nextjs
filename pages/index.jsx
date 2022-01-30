import Layout from "../components/Layout"
import BloqueInicio from "../components/BloqueInicio"
import BotonMain from "../components/BotonMain"
import TituloBloque from "../components/TituloBloque"
import BloqueCatInicio from "../components/BloqueCatInicio"
import IconoSuperior from "../components/IconoSuperior"
import Head from "next/head"
import CookieConsent from "react-cookie-consent"

export default function index({ bloques, cats, buscar }) {

    return (
        <Layout home buscar={buscar}>
            <Head>
                <link rel="icon" href="/favicon.png" />
                <title>Curso de inglés básico desde cero para principiantes | inglesxdia</title>
                <meta name="description" content="Curso de inglés básico en línea con más de 100 lecciones para principiantes con pronunciación. Aprende inglés todos los días con nuestras publicaciones diarias de vocabulario básico, frases comunes, expresiones útiles, lecturas, formas de decir, frases para una conversación, inglés de nativos, phrasal verbs, conjugación de verbos y mucho más." />
            </Head>

            <BotonMain
                titulo='Vocabulario de hoy'
                icono='fa-stream'
                dir='/vocabulario'
                bg='bg-secundario'
            />

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
                icono='fa-sort-amount-down'
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
        const resBloques = await fetch('http://143.198.55.203/api/inicio')
        const bloques = await resBloques.json()
        const resCats = await fetch('http://143.198.55.203/api/categorias')
        const cats = await resCats.json()
        const resBuscar = await fetch(`http://143.198.55.203/api/buscar`)
        const buscar = await resBuscar.json()
        return {
            props: {
                bloques,
                cats,
                buscar,
            }
        }
    } catch (error) {
        console.log(error)
    }
}
