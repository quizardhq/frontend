import '@/styles/globals.css';
import Head from 'next/head';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={poppins.className}>
      <Head>
        <title>Quizard</title>
        <meta
          name="Students aids"
          content="Created by Quizard Open Source team"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/quizzard.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
