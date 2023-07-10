import RouteChangeWrapper from "@/components/common/RouteChangeWrapper";
import { wrapper } from "@/features/app/store";
import "@/styles/globals.css";
import ThemeProvider from "@/utils/theme";
import { AnimatePresence } from "framer-motion";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
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
        <SessionProvider session={props.session}>
          <ThemeProvider>
            <AnimatePresence>
              <RouteChangeWrapper>
                <Component {...props.pageProps} />
              </RouteChangeWrapper>
            </AnimatePresence>
          </ThemeProvider>
        </SessionProvider>
      </Provider>
    </>
  );
};

// export default wrapper.withRedux(App);
export default App;
