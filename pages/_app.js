import '@/styles/globals.css'
import Script from 'next/script';
import Head from 'next/head';
import { Fragment } from 'react'
import { Poppins } from "@next/font/google";

const poppins = Poppins({
    weight: ["400", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});


export default function App({ Component, pageProps }) {
  return (
      <Fragment>
          <div className={poppins.className}>
              <Head>
                  <title>Quizard</title>
                  <meta
                      name="Students aids"
                      content="Created by Quizard Open Source team"
                  />
                  <meta
                      name="viewport"
                      content="width=device-width, initial-scale=1"
                  />
                  <link rel="icon" href="/favicon.ico" />
              </Head>
              <Component {...pageProps} />
              <Script
                  src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                  integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
                  crossorigin="anonymous"
              />
          </div>
      </Fragment>
  );
}
