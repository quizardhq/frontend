import Head from 'next/head';

export default function MetaTag({ title, description, url }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/assets/meta-image.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="meta-image.png" />

      {/* Others */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/assets/favicon.ico" />
    </Head>
  );
}
