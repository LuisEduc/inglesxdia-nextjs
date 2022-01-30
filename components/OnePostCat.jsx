

import Image from "next/image"
import Link from "next/link"
import { useRef } from 'react'
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";


export default function OnePostCat({ slug, slug_cat, titulo, imagen, audio }) {

    let refAudio = useRef()

    const Play = (music) => {
            refAudio.current.audio.current.src = `http://143.198.55.203/api/audio/${music}`
            refAudio.current.audio.current.play();
    }

    return (
        <>

            <div>
                <div className="one-post-cat">
                    <Link href={`/lecs/${slug_cat}/${slug}`}>
                        <a>
                            <div className="one-post-cat-top" style={{ height: '100%' }}>
                                <h2>{titulo}</h2>
                            </div>
                        </a>
                    </Link>
                    <Link href={`/lecs/${slug_cat}/${slug}`}>
                        <a className="bg-one-post-cat-mid ">
                            <div className="one-post-cat-mid">
                                <Image
                                    src={`http://143.198.55.203/imagen/${imagen}`}
                                    width="85%"
                                    height="100%"
                                    layout="responsive"
                                    objectFit="cover"
                                    placeholder="blur"
                                    blurDataURL="/img/placeholder.webp"
                                    priority
                                />
                            </div>
                        </a>
                    </Link>
                    <div>
                        <AudioPlayer
                            ref={refAudio}
                            src = ''
                            onPlayError={() => Play(`${audio}`)}
                            customAdditionalControls={[]}
                            customVolumeControls={[]}
                            autoPlay={false}
                            autoPlayAfterSrcChange={false}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
