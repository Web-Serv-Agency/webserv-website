import RouteChangeWrapper from "@/components/common/RouteChangeWrapper";
import { wrapper } from "@/features/app/store";
import "@/styles/globals.css";
import ThemeProvider from "@/utils/theme";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {/* Default Head */}
      <Head>
        <title>Web Serv | Developer Agency</title>
        <meta name="description" content="web serv - a web development service provider agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Providers */}
      <ThemeProvider>
        <AnimatePresence>
          <RouteChangeWrapper>
            <Component {...pageProps} />
          </RouteChangeWrapper>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
};

export default wrapper.withRedux(App);
