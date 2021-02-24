import Head from 'next/head'

export default function Meta(props) {
    return (
        <Head>
            <link 
                rel="icon"
                sizes="32x32"
                href="/public/logo.png"
            />
            <title>
                name="title"
                content={`Lauryn Burrows | ${props.title}`}
            </title>
            <meta 
                name="description"
                content={props.desc}
            />
        </Head>
    )
}
