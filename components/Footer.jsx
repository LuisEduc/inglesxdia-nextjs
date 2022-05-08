import Link from "next/link"
import Script from 'next/script'

export default function Footer() {
    return (
        <>
            <Script
                id="bootstrap-min-js"
                strategy="afterInteractive"
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js"
                integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc"
                crossOrigin="anonymous"
            />

            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous">
            </link>
            
            {/* <div className="descarga-app" onClick={() => window.open("https://bit.ly/34j0kVS", "_blank")}>
                <span>Descargar aplicación gratis</span>
            </div> */}
            {/* <div className='banner-inferior-fijo'>
                <AdSense.Google
                    // banner-inferior-fijo
                    client='ca-pub-3630578707238850'
                    slot='2949297043'
                    style={{ display: 'block', height: 50 + 'px', width: 80 + '%', marginLeft: 'auto', marginRight: 'auto' }}
                    format=''
                />
            </div> */}
            <div className="text-center bg-light rounded mx-1 mb-5">
                {/* <div className="text-center bg-light rounded mx-1"> */}
                <div className="bagde-app" onClick={() => window.open("https://bit.ly/34j0kVS", "_blank")}>
                    <span>Descargue nuestra aplicación </span>
                    <span className="negrita">GRATIS</span>
                    <br />
                    <i className="fab fa-5x fa-google-play my-1"></i>
                </div>
                <div className="container">
                    <p className="text-secondary">
                        &copy; 2022 inglesxdia |
                        Todos los derechos reservados |
                        <Link href="/privacidad">
                            <a className="text-info" > Política de privacidad <span className="text-secondary"> | </span></a>
                        </Link>

                        <Link href="/terminos">
                            <a className="text-info" >Términos y condiciones <span className="text-secondary"> | </span></a>
                        </Link>

                        <Link href="/cookies">
                            <a className="text-info" >Política de cookies</a>
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}
