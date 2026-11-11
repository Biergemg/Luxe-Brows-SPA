# Luxe Brows & Spa — Presentación V10.1

**Estado:** propuesta aislada de producción. **No publicar ni fusionar sin autorización explícita de la propietaria.** Rama: feat/luxe-v10-editorial-preview.

## Decisión creativa

La dueña quiere destacar el carrusel actual. Por ello, la portada V10.1 coloca **las once publicaciones originales del carrusel en primer plano**, conservando sus archivos, orden y contenido. La fotografía editorial sin textos se utiliza en el lookbook interior.

**Dirección de arte:** Luxury Editorial Beauty — espresso, champagne, marfil; tipografía editorial; iconografía lineal, ritmo visual, fotografías protagonistas y reservas claras.

## Mejoras V10.1

- Carrusel original con once imágenes del directorio public/images/carrusel/, grande y visible desde la primera pantalla.
- Controles anterior/siguiente, salto a una de once diapositivas, contador, progreso, pausa, navegación táctil, reproducción respetuosa con pestañas ocultas y preferencia de movimiento reducido.
- Encabezado con diamante de marca, iconos lineales de ubicación/horarios/servicios/experiencias/galería/preguntas e Instagram, navegación activa y progreso de lectura.
- GSAP para entradas escalonadas de titulares, paneles e imágenes, sin bloquear el desplazamiento y con fallback accesible.
- Lookbook interior asimétrico de seis fotografías limpias; las publicaciones originales solo se presentan en el carrusel principal.
- Catálogo de seis categorías con precios, descripciones, notas y datos originales; selector con teclado y área sticky en escritorio.
- Barra de reserva móvil que aparece al avanzar para no tapar el carrusel en la portada.
- Experiencia editorial, testimonios, ubicación, FAQ, reservas y pie de página con jerarquía consistente.

## Invariantes comerciales

Los archivos data/, lib/, app/aviso-de-privacidad/ y app/politicas-de-citas/ no se alteran frente a main. Por tanto, precios, servicios, testimonios, enlaces de Colavo y WhatsApp, dirección, horarios, perfiles sociales, tracking, SEO y políticas permanecen intactos.

## Verificación técnica

- npm run check: lint, TypeScript, build optimizado y generación estática de Next.js.
- npm run qa:v10: Playwright en 320, 375, 390, 768, 1024 y 1440 px; sin overflow; catálogo, menú móvil, interacción del carrusel 01→02→01, once indicadores, enlaces de reserva, imágenes visibles y errores JS.
- axe-core WCAG 2.0/2.1 A y AA: cero infracciones detectadas a 390 y 1440 px.
- Capturas de Chrome en escritorio y móvil verificadas.

## Presentación y autorización

Recorrer varias diapositivas del carrusel y confirmar que son exactamente las originales. Verificar dirección, horarios, precios, identidad, fotos y CTA. Mostrar también la experiencia móvil real. La rama debe permanecer en **Draft PR** hasta la aprobación explícita de la propietaria y un plan de despliegue reversible.

## Límites de evidencia

«Top 1 %» no es una certificación demostrada. Se requiere comparación externa, evaluación profesional y pruebas con usuarios. Tampoco se demuestra una mejora de reservas sin análisis de conversión. La propuesta V10.1 es un candidato visual y técnico verificable.