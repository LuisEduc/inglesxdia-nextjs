import Image from "next/image"

export default function ImgPost({ imagen }) {
    return (
        <>
            <div className="img-post">
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
        </>
    )
}
