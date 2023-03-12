import '@/styles/globals.css';
import Head from 'next/head';
import localFont from '@next/font/local';

const mena = localFont({
  src: '../fonts/MenaGrotesk-Regular.woff2',
  variable: '--mena-grotesk',
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${mena.variable} font-sans`}>
      <Head>
        <title>Quizard</title>
        <meta
          name="Students aids"
          content="Created by Quizard Open Source team"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
