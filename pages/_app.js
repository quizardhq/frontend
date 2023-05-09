import '@/styles/globals.css';
import localFont from 'next/font/local';

import { wrapper } from '../redux/store';

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

 function App({ Component, pageProps }) {
  return (
    <div className={`${mena.variable} font-sans bg-[#F5FFF3]`}>
      <Component {...pageProps} />
    </div>
  );
}

export default wrapper.withRedux(App);
