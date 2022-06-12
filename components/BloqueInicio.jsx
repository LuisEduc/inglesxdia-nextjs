import Image from 'next/image'
import Link from 'next/link'

export default function BloqueInicio({ children, titulo, imagen, slug_cat, slug }) {
    return (
        <>
            <div className="bloque-inicio">
                <div className="mx-auto">
                    {children}
                    <Link href={`/lecs/${slug_cat}/${slug}`}>
                        <a>
                            <div className="img-bloque-inicio">
                                <Image
                                    src={`${imagen}`}
                                    alt={titulo}
                                    layout="fill"
                                    objectFit="cover"
                                    placeholder="blur"
                                    blurDataURL="/img/placeholder.webp"
                                    sizes="17vw"
                                    priority
                                />
                            </div>
                        </a>
                    </Link>
                </div>
                <Link href={`/lecs/${slug_cat}/${slug}`}>
                    <a className="mx-auto">
                        <div className="text-bloque-inicio">
                            <p>
                                {titulo}
                            </p>
                        </div>
                    </a>
                </Link>
            </div>
        </>
    )
}
