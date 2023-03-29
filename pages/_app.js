import '@/styles/globals.css';
import Head from 'next/head';
import localFont from '@next/font/local';

const mena = localFont({
  src: [
    {
      path: '../fonts/MenaGrotesk-Regular.woff2',
      style: 'normal',
      weight: '400',
    },
    { path: '../fonts/MenaGrotesk-Bold.woff2', style: 'bold', weight: '700' },
    {
      path: '../fonts/MenaGrotesk-SemiBold.woff2',
      style: 'semibold',
      weight: '600',
    },

    { path: '../fonts/MenaGrotesk-Light.woff2', style: 'light', weight: '300' },
    {
      path: '../fonts/MenaGrotesk-Medium.woff2',
      style: 'medium',
      weight: '500',
    },
  ],
  variable: '--mena-grotesk',
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${mena.variable} font-sans bg-[#F5FFF3]`}>
      <Head>
        <title>Quizard - Engage and Interact with your Audience</title>
        <meta
          name="title"
          content="Quizard - Engage and Interact with your Audience"
        />
        <meta
          name="description"
          content="Quizard is an all-in-one platform for engaging your audience with interactive quiz sessions"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quizardhq.com/" />
        <meta
          property="og:title"
          content="Quizard - Engage and Interact with your Audience"
        />
        <meta
          property="og:description"
          content="Quizard is an all-in-one platform for engaging your audience with interactive quiz sessions"
        />
        <meta property="og:image" content="/assets/meta-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://quizardhq.com/" />
        <meta
          property="twitter:title"
          content="Quizard - Engage and Interact with your Audience"
        />
        <meta
          property="twitter:description"
          content="Quizard is an all-in-one platform for engaging your audience with interactive quiz sessions"
        />
        <meta property="twitter:image" content="meta-image.png" />

        {/* Others */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
