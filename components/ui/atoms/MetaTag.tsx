import Head from 'next/head';

export default function MetaTag({ title, description, url }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {/* Open Graph / Facebook */}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://quizardhq.com/assets/og:image.png"
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content="https://quizardhq.com/assets/og:image.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@quizardHQ" />
      <meta property="og:url" content="https://quizardhq.com" />
      <meta name="twitter:creator" content="@quizardHQ" />

      {/* Others */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/assets/favicon.png" type="image/png" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta charSet="utf-8" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image:alt"
        content="Quizard: The spellbinding game-based learning platform that makes every quiz a magical adventure!"
      />
      <meta property="og:locale" content="en_US" />
      <meta name="robots" content="index,follow"></meta>
    </Head>
  );
}
