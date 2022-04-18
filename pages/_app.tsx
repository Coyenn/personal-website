import DarkModeDetector from "../components/utility/dark-mode-detector";
import Head from 'next/head';
import '../styles/globals.scss'

function App({ Component, pageProps }) {
  return (
    <div className='bg-gray-50 dark:bg-zinc-900 min-h-screen flex flex-col justify-between'>
      <Head>
        <title>Tim Ritter</title>
        <meta name="description" content="Tim Ritter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DarkModeDetector />
      <Component {...pageProps} />
    </div>
  )
}

export default App
