import Footer from './Footer'
import Head from 'next/head'

export default function Layout({children}) {
    return (
        <div>
            <Head>
                <link rel="icon" type="image/png" sizes="32x32" href="/logo.png"></link>
                <script src="https://kit.fontawesome.com/61950111e7.js" crossorigin="anonymous"></script>
            </Head>
            {children}
            <Footer />
        </div>

    )
}
