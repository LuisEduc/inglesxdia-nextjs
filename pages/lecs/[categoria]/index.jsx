
import Layout from "../../../components/Layout"
import BotonMain from "../../../components/BotonMain"
import InfoCat from "../../../components/InfoCat"
import OnePostCat from "../../../components/OnePostCat"
import Head from "next/head"
import AdSense from 'react-adsense';

export default function post({ dataCat }) {
    return (

        <Layout>
            <Head>
                <link rel="icon" href="/favicon.png" />
                <title>{dataCat.categoria[0].titulo} en inglés | Estudiar inglés online</title>
                <meta name="description" content={dataCat.categoria[0].descripcion} />
            </Head>
            <BotonMain
                titulo='Vocabulario de hoy'
                icono='fa-stream'
                dir='/vocabulario'
                bg='bg-secundario'
            />

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
                layoutKey='-gw-1+2a-9x+5c'
            />

            {/* <AdSense.Google
                // feed-cat
                client='ca-pub-3630578707238850'
                slot='9843295884'
                style={{ display: 'block', textAlign: 'center' }}
                format='fluid'
                layoutKey='-6t+ed+2i-1n-4w'
            /> */}

            <InfoCat
                icono={dataCat.categoria[0].icono}
                titulo={dataCat.categoria[0].titulo}
                descripcion={dataCat.categoria[0].descripcion}
            />

            <AdSense.Google
                // 300x100-cat
                client='ca-pub-3630578707238850'
                slot='8253725468'
                style={{
                    display: 'block',
                    height: 100 + 'px',
                    marginBottom: 15 + 'px',
                    marginTop: 15 + 'px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    textAlign: 'center'
                }}
                format=''
                responsive='true'
            />

            <div>
                <BotonMain
                    titulo='Todas las lecciones'
                    icono='fa-home'
                    dir='/#lecs'
                    bg='bg-primario'
                />
            </div>

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
        return {
            props: {
                dataCat,
            },
            revalidate: 5, // In seconds
        }
    } catch (error) {
        console.log(error)
    }
}