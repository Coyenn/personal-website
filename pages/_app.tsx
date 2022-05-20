import Head from "next/head";
import Footer from "../components/layout/footer";
import "../styles/globals.scss";
import BackgroundGrid from "../components/utility/background-grid";
import Header from "../components/layout/header";
import DarkModeDetector from "../components/utility/dark-mode-detector";
import { NextWebVitalsMetric } from "next/app";

function App({ Component, pageProps }) {
    return (
        <div className="flex min-h-screen flex-col justify-between bg-white dark:bg-neutral-900">
            <Head>
                <title>
                    Tim Ritter - Frontend Developer | Personal Website
                </title>
                <meta
                    property="og:title"
                    content="Tim Ritter - Frontend Developer | Personal Website"
                />
                <meta
                    name="twitter:title"
                    content="Tim Ritter - Frontend Developer | Personal Website"
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
            <DarkModeDetector>
                <Header />
                <BackgroundGrid>
                    <div className="lg:pt-30 pt-10 sm:pt-20">
                        <Component {...pageProps} />
                    </div>
                </BackgroundGrid>
                <Footer />
            </DarkModeDetector>
        </div>
    );
}

export default App;

// Web vitals and logging via Axiom
// (Axiom.com/vercel)
export function reportWebVitals(metric: NextWebVitalsMetric) {
    const url = process.env.NEXT_PUBLIC_AXIOM_INGEST_ENDPOINT;

    if (!url) {
        return;
    }

    const body = JSON.stringify({
        route: window.__NEXT_DATA__.page,
        ...metric,
    });

    if (navigator.sendBeacon) {
        navigator.sendBeacon(url, body);
    } else {
        fetch(url, { body, method: "POST", keepalive: true });
    }
}
