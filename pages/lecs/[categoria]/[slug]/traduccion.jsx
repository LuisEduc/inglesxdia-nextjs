
import ReactDiffViewer, { DiffMethod } from 'react-diff-viewer';
import { useState, useEffect, useRef } from 'react'
import Layout from '../../../../components/Layout';
import BotonMain from '../../../../components/BotonMain';
import Link from 'next/link';
import AdSense from 'react-adsense';
import Head from 'next/head';

export default function Traduccion({ contLec, slug_categoria, slug_leccion }) {

    const reloadEzoic = (ids) => {
        var ezstandalone = window.ezstandalone || {}
        ezstandalone.cmd = ezstandalone.cmd || []
        ezstandalone.cmd.push(function () {
            ezstandalone.define(ids)
            if (ezstandalone.enabled) {
                ezstandalone.refresh()
            } else {
                ezstandalone.enable()
                ezstandalone.display()
            }
        });
    }

    useEffect(() => {
        let ids = [100]
        reloadEzoic(ids)
    }, [])

    let refTextArea = useRef()

    const { contenido } = contLec.contenido[0];

    let texto = contenido
        .replace(/ style="color((.|\n)*?);"/g, '')
        .replace(/<em> <\/em((.|\n)*?)>/g, '')
        .replace(/<strong><em><span class="ql-cursor((.|\n)*?)strong>/g, '')
        .replace(/<span class="ql-cursor((.|\n)*?)span>/g, '')
        .replace('<h2>', '*--*')
        .replace('</h2>', '*--*')
        .replace(/<p><strong><em>/g, '*--*')
        .replace(/<\/em><\/strong><\/p><p><em>/g, '*--*')
        .replace('</em></p>', '*--*')

    const miTexto = texto.split("*--*")
    const textoIng = miTexto[3]
    const textoEsp = miTexto[4]

    const [message, setMessage] = useState('');
    const [diferencia, setDiferencia] = useState(false);
    const [resultado, setResultado] = useState('Traducción');

    const handleChange = event => {
        setMessage(event.target.value);
        setDiferencia(false)
    };

    const handleClick = event => {
        event.preventDefault();
        if (textoEsp === message) {
            setResultado('Traducción correcta')
            setDiferencia(true)
        } else if (message === '') {
            refTextArea.current.placeholder = 'Escriba algo...'
        } else {
            setResultado('Existen errores')
            setDiferencia(true)
        }
    };

    const auto_grow = () => {
        refTextArea.current.style.height = "5px";
        refTextArea.current.style.height = (refTextArea.current.scrollHeight) + "px";
    }

    const newStyles = {
        variables: {
            light: {
                wordRemovedBackground: '#fff',
                wordAddedBackground: '#fdb8c0',
                wordRemovedBackground: '#fdb8c0',
                removedBackground: '#e6ffed',
                addedBackground: '#fff',
            }
        },
    };

    return (

        <Layout>

            <Head>
                <link rel="icon" href="/favicon.png" />
                <title>{miTexto[1]} · Ejercico de traducción</title>
                <meta name="description" content={miTexto[3]} />
            </Head>

            <div className="text-center">
                <AdSense.Google
                    // 300x50-traduc-alto
                    client='ca-pub-3630578707238850'
                    slot='4949470890'
                    style={{
                        display: 'block',
                        height: 50 + 'px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 12 + 'px',
                        textAlign: 'center'
                    }}
                    format=''
                    responsive='true'
                />
            </div>

            <div className="lecs-titulo">
                <h1>
                    EJERCICIO DE TRADUCCIÓN
                    <br />
                    <span>Recuerde respetar las tildes y los signos de puntuación.</span>
                </h1>
            </div>

            <BotonMain
                titulo='Vocabulario de hoy'
                icono='fa-stream'
                dir='/vocabulario'
                bg='bg-secundario'
            />

            <div className="text-center">
                <AdSense.Google
                    // 300x250-traduc
                    client='ca-pub-3630578707238850'
                    slot='8697144212'
                    style={{
                        display: 'block',
                        height: 250 + 'px',
                    }}
                    format=''
                    responsive='true'
                />
            </div>

            <BotonMain
                titulo='Regresar'
                icono='fa-chevron-circle-left'
                dir={`/lecs/${slug_categoria}/${slug_leccion}`}
                bg='bg-primario'
            />

            <div className="texto-main-traduccion">
                <h2>{textoIng}</h2>
            </div>

            <div className="div-textarea-traduccion">
                <textarea
                    onInput={() => auto_grow()}
                    ref={refTextArea}
                    className="textarea-traduccion"
                    type="text"
                    id="message"
                    name="message"
                    onChange={handleChange}
                    value={message}
                    placeholder='Traduzca el texto...'
                    autoComplete="off"
                />
            </div>

            <div className="text-center">
                <AdSense.Google
                    // 300x50-traduc-medio
                    client='ca-pub-3630578707238850'
                    slot='8996527114'
                    style={{
                        display: 'block',
                        height: 50 + 'px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 15 + 'px',
                        textAlign: 'center'
                    }}
                    format=''
                    responsive='true'
                />
            </div>

            <Link href=''>
                <a>
                    <div className="btn-main bg-primario" onClick={handleClick}>
                        <i className="fas fa-graduation-cap"></i>
                        <p>Comprobar</p>
                    </div>
                </a>
            </Link>

            {
                diferencia ?
                    <div className="texto-main-resultado">
                        <h3>{resultado}</h3>
                        <ReactDiffViewer
                            oldValue={textoEsp}
                            newValue={message}
                            styles={newStyles}
                            hideLineNumbers={true}
                            showDiffOnly={false}
                            compareMethod={DiffMethod.WORDS}
                        />
                    </div>
                    :
                    ''
            }

        </Layout>
    )
}

export async function getStaticPaths() {
    try {
        const res = await fetch('https://admin.inglesxdia.com/api/lecturas',
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

        const slug_categoria = params.categoria
        const slug_leccion = params.slug
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
                contLec,
                slug_categoria,
                slug_leccion
            },
            revalidate: 5, // In seconds
        }
    } catch (error) {
        console.log(error)
    }
}