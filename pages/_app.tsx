import Head from "next/head";
import Footer from "../components/layout/footer";
import "../styles/globals.scss";
import BackgroundGrid from "../components/utility/background-grid";
import Header from "../components/layout/header";

function App({ Component, pageProps }) {
    return (
        <div className="flex min-h-screen flex-col justify-between bg-neutral-900">
            <Head>
                <title>Tim Ritter</title>
                <meta
                    property="og:title"
                    content="Tim Ritter | Person Website"
                />
                <meta
                    name="twitter:title"
                    content="Tim Ritter | Person Website"
                />

                <link rel="canonical" href="https://tim-ritter.com" />
                <meta property="og:url" content="https://tim-ritter.com" />
                <meta name="twitter:url" content="https://tim-ritter.com" />

                <meta property="og:image" content="/logo.png" />
                <meta name="twitter:image" content="/logo.png" />
                <meta
                    property="og:description"
                    content="Hey there! I'm Tim, a 17-year-old trainee Software Developer from Germany."
                />

                <meta
                    name="description"
                    content="Hey there! I'm Tim, a 17-year-old trainee Software Developer from Germany."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <BackgroundGrid>
                <div className="lg:py-30 py-10 sm:py-20">
                    <Component {...pageProps} />
                </div>
            </BackgroundGrid>
            <Footer />
        </div>
    );
}

export default App;
