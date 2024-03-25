import { AppProps } from "next/app";

import GlobalStyle from "../styles/global";
import { theme } from "../styles/index";
import { ThemeProvider } from "styled-components";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <title>Kronoos</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
