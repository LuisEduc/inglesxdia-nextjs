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
                            if (ezstandalone.enabled) {
                                ezstandalone.refresh();
                            } else {
                                ezstandalone.enable();
                                ezstandalone.display();
                            }
                        });
                     `,
            }}
        />
    )
}
