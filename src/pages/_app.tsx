import "@/styles/globals.css";
import store, { persistor } from "@/utils/store";
import theme, { poppins } from "@/utils/theme";
import { ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppProps) {
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
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                fontFamily: poppins.className,
              }}
            >
              <Component {...pageProps} />
            </Box>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}
