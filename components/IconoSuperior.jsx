export default function IconoSuperior({color, bg, icono}) {
    return (
        <>
            <div className='icono-superior' style={{color: `${color}`, background: `${bg}`}}>
                <i className={`fas ${icono}`}></i>
            </div>
        </>
    )
}
