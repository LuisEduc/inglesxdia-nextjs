
import Script from "next/script"

export default function ScriptAdSenseEzoic({ adsenseActive }) {
    return (
        <>
            {
                adsenseActive ?
                    <Script
                        strategy="afterInteractive"
                        async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3630578707238850"
                        crossOrigin="anonymous"
                    />
                    :
                    ''
            }
        </>
    )
}
