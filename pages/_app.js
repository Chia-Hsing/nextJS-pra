import Head from 'next/head'
import LayOut from '../components/layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <LayOut>
            <Head>
                <meta name="viewpoint" content="width=device-width, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
        </LayOut>
    )
}

export default MyApp
