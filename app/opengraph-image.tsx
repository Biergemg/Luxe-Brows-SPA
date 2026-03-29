import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

export const runtime = 'nodejs';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

async function getLogoDataUrl() {
  const logoPath = path.join(process.cwd(), 'public', 'images', 'brand', 'logo-round.png');
  const logo = await readFile(logoPath);
  return `data:image/png;base64,${logo.toString('base64')}`;
}

export default async function Image() {
  const logoSrc = await getLogoDataUrl();

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
          fontFamily: 'serif',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at top left, rgba(255,255,255,0.07), transparent 28%), radial-gradient(circle at bottom right, rgba(164,119,100,0.24), transparent 28%), linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: 48,
            right: 48,
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 999,
            padding: '12px 24px',
            fontSize: 22,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#C8C8C8',
            display: 'flex',
          }}
        >
          Plaza LA FÉ · Local 1
        </div>

        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '72px 80px',
            gap: 48,
          }}
        >
          <div
            style={{
              width: 340,
              height: 340,
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.02)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 30px 80px rgba(0,0,0,0.45)',
            }}
          >
            <img src={logoSrc} width={300} height={206} alt="Luxe Brows & Spa" />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              maxWidth: 620,
            }}
          >
            <div
              style={{
                fontSize: 22,
                letterSpacing: 5,
                textTransform: 'uppercase',
                color: '#A6A6A6',
                marginBottom: 24,
                display: 'flex',
              }}
            >
              Luxe Brows & Spa
            </div>
            <div
              style={{
                fontSize: 76,
                lineHeight: 1.02,
                color: '#F5F5F5',
                marginBottom: 24,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span>Un espacio para</span>
              <span style={{ color: '#A47764', fontStyle: 'italic' }}>cuidarte y verte bien</span>
            </div>
            <div
              style={{
                fontSize: 30,
                lineHeight: 1.35,
                color: '#C9C9C9',
                display: 'flex',
                maxWidth: 600,
              }}
            >
              Cejas, pestañas y faciales en una experiencia cuidada, cálida y pensada para sentirse bien desde el primer vistazo.
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
