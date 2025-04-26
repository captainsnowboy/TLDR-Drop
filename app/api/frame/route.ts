import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  try {
    const body: FrameRequest = await req.json();
    const { isValid, message } = await getFrameMessage(body, { neynarApiKey: process.env.NEYNAR_ONCHAIN_KIT || 'NEYNAR_FROG_FM' });

    if (!isValid) {
      return new NextResponse('Message not valid', { status: 500 });
    }

    const text = message.input || '';
    let state = { page: 0 };
    try {
      state = JSON.parse(decodeURIComponent(message.state?.serialized));
    } catch (e) {
      console.error('State parse error:', e);
    }

    return new NextResponse(
      getFrameHtmlResponse({
        buttons: [
          { label: 'Show TL;DRs' },
          { label: 'Top 5 Trending' },
          { label: 'Base TL;DR' },
        ],
        image: {
          src: `${NEXT_PUBLIC_URL}/park-1.png`,
        },
        postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
        state: {
          page: state?.page + 1,
          time: new Date().toISOString(),
        },
      }),
    );
  } catch (e) {
    console.error('API error:', e);
    return new NextResponse('Internal server error', { status: 500 });
  }
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';