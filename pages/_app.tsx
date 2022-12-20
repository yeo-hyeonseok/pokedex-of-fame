import '../styles/globals.css'
import type { AppProps } from 'next/app'
import GlobalNavBar from 'src/components/molecules/GlobalNavBar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalNavBar versionInfo="v1.0.0" id="global-nav-bar" />
      <Component {...pageProps} />
    </>
  )
}
