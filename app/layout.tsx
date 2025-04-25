import { ReactNode } from 'react';
import Head from 'next/head';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://i.imgur.com/0jD5WVs.png" />
        <meta property="fc:frame:button:1" content="Show TL;DRs" />
        <meta property="fc:frame:button:2" content="Top 5 Trending" />
        <meta property="fc:frame:button:3" content="Base TL;DR" />
        <meta property="fc:frame:post_url" content="https://tldr-drop.vercel.app/api/frame" />
        <meta property="og:title" content="@captainsnowboy’s Weekly TL;DR Drop" />
        <meta property="og:image" content="https://i.imgur.com/0jD5WVs.png" />
        <title>@captainsnowboy’s Weekly TL;DR Drop</title>
      </Head>
      <body>{children}</body>
    </html>
  );
}