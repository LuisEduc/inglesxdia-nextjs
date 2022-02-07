// 404.js
import Link from 'next/link'
import Layout from '../components/Layout'

export default function FourOhFour() {

    return (
        <Layout>
            <div className='bg-404 container-404'>
            <h1>404</h1>
            <h2>Página no encontrada</h2>
            <Link href="/">
                <a>
                    Ir al inicio
                </a>
            </Link>
            </div>
        </Layout>
    )
}

