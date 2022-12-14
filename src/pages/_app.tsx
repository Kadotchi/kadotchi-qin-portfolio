import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/Header'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header title='Shimabu IT University' />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
