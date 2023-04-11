import Loading from "@/components/common/Loading";
import "@/styles/globals.css";
import store, { persistor } from "@/utils/store";
import ThemeProvider from "@/utils/theme";
import type { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);

    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);
    Router.events.on("routeChangeError", stopLoading);

    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
      Router.events.off("routeChangeError", stopLoading);
    };
  }, []);

  return (
    <>
      {/* Default Head */}
      <Head>
        <title>Web Serv | Developer Agency</title>
        <meta
          name="description"
          content="web serv - a web development service provider agency"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Providers */}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>
            {loading ? <Loading /> : <Component {...pageProps} />}
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
