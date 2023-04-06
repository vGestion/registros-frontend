import type { AppProps } from 'next/app'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

import '../styles/globals.css'
import { lightTheme, darkTheme } from '../themes';
import Footer from '@/components/ui/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={ lightTheme }>
      <CssBaseline />
      <Component {...pageProps} />
      <Footer/>
    </ThemeProvider>
  )
}
