import Script from "next/script"

export default function EzoicAds({ ids }) {
    return (
        <Script
            id="ezoic-init"
            dangerouslySetInnerHTML={{
                __html: `
                        var ezstandalone = window.ezstandalone || {};
                        ezstandalone.cmd = ezstandalone.cmd || [];
                        ezstandalone.cmd.push(function() {
                            ezstandalone.define(${ids});
                            ezstandalone.enable();
                            ezstandalone.display();
                        });

                        setInterval(function() {
                            ezstandalone.refresh(); 
                        }, 10);
                     `,
            }}
        />
    )
}
