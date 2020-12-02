import React from 'react'
import Head from 'next/head'

const HeadHtml = () => {
    return (
        <Head>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
            <meta name="description" content="My page description" />
            <title>GitHub Stats</title>
        </Head>
    )
}

export default HeadHtml
