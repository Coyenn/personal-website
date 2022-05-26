import Footer from "../components/layout/footer";
import "../styles/globals.scss";
import Header from "../components/layout/header";
import DarkModeDetector from "../components/utility/dark-mode-detector";
import { NextWebVitalsMetric } from "next/app";
import SEO from "./_seo";

function App({ Component, pageProps }) {
    return (
        <>
            <SEO />
            <div className="flex min-h-screen flex-col justify-between bg-white dark:bg-neutral-900">
                <DarkModeDetector>
                    <Header />
                    <div className="lg:pt-30 pt-10 sm:pt-20">
                        <Component {...pageProps} />
                    </div>
                    <Footer />
                </DarkModeDetector>
            </div>
        </>
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
