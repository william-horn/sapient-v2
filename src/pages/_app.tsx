import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <h1>Static website title</h1>
      <Component {...pageProps} />
    </div>
  )
}
