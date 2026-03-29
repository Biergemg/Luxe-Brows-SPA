import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

export const runtime = 'nodejs';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

async function getAssetDataUrl(relativePath: string, mimeType: string) {
  const assetPath = path.join(process.cwd(), 'public', relativePath);
  const file = await readFile(assetPath);
  return `data:${mimeType};base64,${file.toString('base64')}`;
}

export default async function Image() {
  const heroBgSrc = await getAssetDataUrl('images/hero-bg.webp', 'image/jpeg');

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          position: 'relative',
          background: '#000000',
          color: '#F2F2F2',
          overflow: 'hidden',
        }}
      >
        <img
          src={heroBgSrc}
          alt=""
          width={1200}
          height={630}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.45,
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.32) 0%, rgba(0,0,0,0.58) 58%, rgba(0,0,0,1) 100%), radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.86) 100%), radial-gradient(circle at top, rgba(255,255,255,0.06), transparent 34%), radial-gradient(circle at bottom right, rgba(164,119,100,0.13), transparent 24%)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.08,
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.18) 0.45px, transparent 0.6px)',
            backgroundSize: '12px 12px',
          }}
        />

        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            padding: '72px 96px 84px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              border: '1px solid rgba(89,89,89,0.3)',
              background: 'rgba(0,0,0,0.6)',
              padding: '10px 18px',
              borderRadius: 999,
              color: '#F2F2F2',
              fontSize: 16,
              letterSpacing: 4,
              textTransform: 'uppercase',
              marginBottom: 34,
            }}
          >
            Plaza LA FÉ
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              fontFamily: 'Georgia, serif',
              fontSize: 78,
              lineHeight: 1.03,
              color: '#F5F5F5',
              marginBottom: 24,
              maxWidth: 900,
            }}
          >
            <span>Un espacio para</span>
            <span style={{ color: '#A47764', fontStyle: 'italic' }}>cuidarte y verte bien</span>
          </div>

          <div
            style={{
              display: 'flex',
              maxWidth: 840,
              color: '#C9C9C9',
              fontSize: 28,
              lineHeight: 1.35,
              textAlign: 'center',
            }}
          >
            Cejas, pestañas y faciales en un espacio pensado para que tu cita se sienta tranquila, cuidada y acorde a lo que te gusta.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
