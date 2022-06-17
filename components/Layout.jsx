import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'

import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'

export default function Layout({ children, home, buscar }) {

    const router = useRouter();

    useEffect(() => {

        const handleRouteChange = (url) => {
            NProgress.start()
        };

        router.events.on("routeChangeStart", handleRouteChange);
        router.events.on("routeChangeComplete", () => NProgress.done());
        return () => {
            router.events.off("routeChangeStart", handleRouteChange);
        };

    }, [])

    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Chewy&display=swap" rel="stylesheet" />

                <script dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-N4SG9PL');`}}></script>

                <script src="//www.ezojs.com/ezoic/sa.min.js"></script>

            </Head>

            <Navbar />
            <header>
                {home ? (
                    <Hero buscar={buscar} />
                ) : ''}
            </header>

            <main>
                <noscript dangerouslySetInnerHTML={{
                    __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N4SG9PL"
                    height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
                {children}
            </main>

            <Footer />
        </div>
    )
}

// Si no se envia la informacion meta
Layout.defaultProps = {
    title: "Next.js | Mi sitio web",
    description: "Descripción de mi sitio web"
}