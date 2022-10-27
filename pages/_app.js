import ProvideContext from '../components/stateContext'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ProvideContext>
      <Component {...pageProps} />
    </ProvideContext>
  )
}

export default MyApp
