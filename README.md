# Luxe Brows & Spa

Landing page de producción para **Luxe Brows & Spa** construida con **Next.js 16**, **React 19** y **Tailwind CSS 4**.

## Stack

- Next.js 16.2.1
- React 19.2.4
- TypeScript 5
- Tailwind CSS 4
- ESLint 9

## Requisitos

- Node.js 20+ recomendado
- npm 10+

## Desarrollo local

```bash
npm install
npm run dev
```

Servidor local por defecto: `http://localhost:3000`

## Validación de calidad

```bash
npm run lint
npm run build
npm run check
```

`npm run check` ejecuta lint + build y es el comando recomendado antes de subir cambios a GitHub o desplegar.

## Variables de entorno

Copia `.env.example` si necesitas activar integraciones opcionales:

```bash
cp .env.example .env.local
```

Variables disponibles:

- `NEXT_PUBLIC_SITE_URL`: URL pública del sitio
- `NEXT_PUBLIC_GA_ID`: Google Analytics (si no usarás GTM)
- `NEXT_PUBLIC_GTM_ID`: Google Tag Manager
- `NEXT_PUBLIC_GOOGLE_MAPS_URL`: link público de Google Maps
- `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL`: URL de embed para reemplazar el mapa actual

### Prioridad de tracking

- Si defines `NEXT_PUBLIC_GTM_ID`, el sitio usa **GTM**
- Si no hay GTM pero sí `NEXT_PUBLIC_GA_ID`, el sitio usa **GA**
- Si no defines ninguno, el sitio funciona sin tracking

## Deploy en Vercel

1. Sube este proyecto a un repositorio en GitHub
2. Importa el repositorio en Vercel
3. Configura las variables de entorno necesarias
4. Ejecuta un deploy normal

No hay pasos manuales especiales para producción.

## SEO y share

El proyecto ya incluye:

- metadata centralizada
- Open Graph y Twitter Cards
- favicon, app icons y manifest
- `robots.ts` y `sitemap.ts`
- JSON-LD para negocio local y FAQ

## Estructura relevante

- `app/` — rutas, layout, metadata runtime y manifest/robots/sitemap
- `components/sections/` — bloques del landing
- `components/integrations/` — scripts opcionales de tracking
- `data/` — contenido del negocio
- `lib/` — configuración centralizada, SEO, env, maps y utilidades

## Notas

- El proyecto está preparado para Vercel sin CI adicional obligatorio
- Las integraciones externas son opcionales y no rompen build si no están configuradas
- La experiencia visual aprobada del sitio debe mantenerse; los cambios futuros deben respetar la dirección actual
