import '../styles/globals.scss'
import DarkModeDetector from "../components/dark-mode-detector";

function App({ Component, pageProps }) {
  return (
    <>
      <DarkModeDetector />
      <Component {...pageProps} />
    </>
  )
}

export default App
