import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://i.imgur.com/3vDIVvk.jpeg" />
        <meta property="fc:frame:button:1" content="Show TL;DRs" />
        <meta property="fc:frame:button:2" content="Top 5 Trending" />
        <meta property="fc:frame:button:3" content="Base TL;DR" />
        <meta property="fc:frame:post_url" content="https://tldr-drop.vercel.app/api/frame" />
        <meta property="og:title" content="@captainsnowboy’s Weekly TL;DR Drop" />
        <meta property="og:image" content="https://i.imgur.com/3vDIVvk.jpeg" />
        <title>@captainsnowboy’s Weekly TL;DR Drop</title>
      </Head>
      <main>
        <h1>@captainsnowboy’s Weekly TL;DR Drop 🦄</h1>
      </main>
    </>
  );
}