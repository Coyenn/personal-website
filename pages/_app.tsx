import DarkModeDetector from "../components/utility/dark-mode-detector";
import Head from 'next/head';
import Footer from "../components/layout/footer";
import '../styles/globals.scss'
import BackgroundGrid from "../components/utility/background-grid";

function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-50 dark:bg-zinc-900">
      <Head>
        <title>Tim Ritter</title>
        <meta property='og:title' content='Tim Ritter' />
        <meta name='twitter:title' content='Tim Ritter' />

        <link rel='canonical' href='https://tim-ritter.com' />
        <meta property='og:url' content='https://tim-ritter.com' />
        <meta name='twitter:url' content='https://tim-ritter.com' />

        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:image" content="/logo.png" />
        <meta property="og:description" content="Hey there! I'm Tim, a 17-year-old trainee Software Developer from Germany." />

        <meta name="description" content="Hey there! I'm Tim, a 17-year-old trainee Software Developer from Germany." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DarkModeDetector>
        <BackgroundGrid>
          <div className="container mx-auto py-10 sm:py-20 lg:py-30 px-10 sm:px-20 overflow-hidden">
            <Component {...pageProps} />
          </div>
        </BackgroundGrid>
      </DarkModeDetector>
      <Footer />
    </div>
  )
}

export default App
