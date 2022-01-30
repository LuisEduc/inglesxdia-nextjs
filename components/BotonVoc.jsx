import Link from "next/link"

export default function BotonVoc({ title, text, icon, bg, border, dir }) {
    return (
        <>
            <Link href={`${dir}`}>
                <a>
                    <div className={`btn-voc ${bg} ${border}`}>
                        <h2 className={`${text}`}>{title}</h2>
                        <i className={`vibrar ${icon} ${text}`}></i>
                    </div>
                </a>
            </Link>
        </>
    )
}
