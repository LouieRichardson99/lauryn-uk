import Head from 'next/head'

export default function Meta(props) {
    return (
        <Head>
            <html lang="en" />
            <link 
                rel="icon"
                sizes="32x32"
                href="/logo.png"
            />
            <title>
                {`Lauryn Burrows | ${props.title}`}
            </title>
            <meta 
                name="description"
                content={props.desc}
            />
            <script
                src="https://kit.fontawesome.com/61950111e7.js"
                crossOrigin="anonymous"
            />
        </Head>
    )
}
