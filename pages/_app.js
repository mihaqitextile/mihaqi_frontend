import "@/styles/globals.css";
import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Provider } from "react-redux";
import store from "@/store/store";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mihaqi | Chinese home textile product manufacturer</title>
        <meta
          name="description"
          content="Shaoxing Mihaqi Home Textile Co., Ltd., formerly known as Henglong Home Textile, was established in 1998. It is dedicated to the research and development of curtain fabrics, customized processing of curtain products, as well as the production of home textile products such as bedding, four piece sets, duvet covers, and tablecloths."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}
