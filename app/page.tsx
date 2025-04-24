import { getFrameMetadata } from '@coinbase/onchainkit/frame';

export default function Home() {
  const frameMetadata = getFrameMetadata({
    buttons: [
      { label: 'Show TL;DRs' },
      { label: 'Top 5 Trending' },
      { label: 'Base TL;DR' },
    ],
    image: 'https://i.imgur.com/0jD5WVs.png', // Placeholder unicorn image
    post_url: 'https://tldr-drop.vercel.app/api/frame', // Your Vercel URL + /api/frame
  });

  return (
    <main>
      <h1>@captainsnowboy’s Weekly TL;DR Drop 🦄</h1>
      <meta name="fc:frame" content="vNext" />
      {Object.entries(frameMetadata).map(([key, value]) => (
        <meta key={key} name={key} content={value} />
      ))}
    </main>
  );
}
