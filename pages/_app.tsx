import DarkModeDetector from "../components/utility/dark-mode-detector";
import Head from 'next/head';
import Footer from "../components/layout/footer";
import '../styles/globals.scss'

function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-50 dark:bg-zinc-900">
      <Head>
        <title>Tim Ritter</title>
        <meta name="description" content="Tim Ritter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto py-10 sm:py-20 lg:py-30 px-10 sm:px-20 overflow-hidden">
        <DarkModeDetector />
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}

export default App
