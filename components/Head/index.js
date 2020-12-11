import React from 'react'
import Head from 'next/head'
import Favicon from '../../public/favicon.ico'

const HeadHtml = () => {
    return (
        <Head>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
            <meta name="description" content="My page description" />
            <link rel="shortcut icon" href={Favicon} />
            <title>GitHub Stats</title>
        </Head>
    )
}

export default HeadHtml
