

import Image from "next/image"
import Link from "next/link"
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";


export default function OnePostCat({ slug, slug_cat, titulo, imagen, audio }) {

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
                                    src={`https://admin.inglesxdia.com/imagen/${imagen}`}
                                    alt={`${titulo}`}
                                    width="85%"
                                    height="100%"
                                    layout="responsive"
                                    objectFit="cover"
                                    placeholder="blur"
                                    blurDataURL="/img/placeholder.webp"
                                    sizes="50vw"
                                    priority
                                />
                            </div>
                        </a>
                    </Link>
                    <div>
                        <AudioPlayer
                            src = {`https://admin.inglesxdia.com/api/audio/${audio}`}
                            customAdditionalControls={[]}
                            customVolumeControls={[]}
                            autoPlay={false}
                            autoPlayAfterSrcChange={false}
                            preload="none"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
