import Link from "next/link"

export default function Footer() {
    return (
        <>
            <div className="text-center bg-light rounded mx-1 my-3">
                <div className="bagde-app" onClick={() => window.open("https://bit.ly/34j0kVS", "_blank")}>
                    <span>Descargue nuestra aplicación </span>
                    <span className="negrita">GRATIS</span>
                    <br/>
                    <img src="/google-play-badge.svg" alt="aplicacion" />
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
