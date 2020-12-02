import GlobalStyle from '../styles/GlobalStyles'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      
      <Component {...pageProps} />
    </>
  )
}
