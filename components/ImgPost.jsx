import Image from "next/image"

export default function ImgPost({ imagen }) {
    return (
        <>
            <div className="img-post">
                <Image
                    src={`${imagen}`}
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
