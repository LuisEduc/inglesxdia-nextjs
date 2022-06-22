import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import { useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  // useEffect(() => {
  //   window.OneSignal = window.OneSignal || [];
  //   OneSignal.push(function () {
  //     OneSignal.init({
  //       appId: "afd4d492-d05b-45b1-857e-fc08aa277e62",
  //       notifyButton: {
  //         enable: true,
  //       },

  //       allowLocalhostAsSecureOrigin: true,
  //     });
  //   });

  //   return () => {
  //     window.OneSignal = undefined;
  //   };
  // }, []);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}


      {/* <Script
        src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
        strategy="afterInteractive"
        async=""
      /> */}

      <Script
        strategy="afterInteractive"
        async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3630578707238850"
        crossOrigin="anonymous"
      />

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />

      {/* <Script
        strategy="beforeInteractive"
        async src={`https://www.ezojs.com/ezoic/sa.min.js`}
      /> */}

      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <Component {...pageProps} />
    </>
  )
}

export default App