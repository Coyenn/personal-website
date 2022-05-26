import Head from "next/head";

interface SEOProps {
    title?: string;
}

export default function SEO(props: SEOProps) {
    const title = props.title
        ? `${props.title}`
        : "Tim Ritter - Frontend Developer | Personal Website";

    return (
        <Head>
            {/* Default Tags */}
            <title>{title}</title>
            <meta name="robots" content="follow, index" />
            <meta name="description" content={title} />
            <link rel="icon" href="/favicon.ico" />
            <link rel="canonical" href="https://tim-ritter.com" />

            {/* Twitter Tags */}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:url" content="https://tim-ritter.com" />
            <meta name="twitter:image" content="/logo.png" />

            {/* Open Graph Tags */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Tim Ritter" />
            <meta property="og:image" content="/logo.png" />
            <meta property="og:url" content="https://tim-ritter.com" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={title} />
        </Head>
    );
}
