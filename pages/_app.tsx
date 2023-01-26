import '../styles/globals.css';
import type { AppProps } from 'next/app';
import AppProvider from 'providers/AppProvider';

if (typeof window !== 'undefined') {
  const allEl = window.document.querySelector("body");
  window.addEventListener("keydown", (event) => {
    if (event.keyCode === 87) {
      if (allEl.classList.contains("wireframe")) {
        allEl.classList.remove("wireframe");
      } else {
        allEl.classList.add("wireframe");
      }
    }
  });
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider
    value={{}}
    >
    <Component {...pageProps} />
    </AppProvider>
  )
}


