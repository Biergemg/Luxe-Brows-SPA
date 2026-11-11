# Luxe Brows & Spa — V10.2 / Experiencia editorial integral

**Estado:** propuesta de revisión en rama `feat/luxe-v10-editorial-preview`. No modificar producción ni fusionar a `main` sin aprobación explícita de la propietaria.

## Una identidad, un diseño adaptable

La versión V10.2 utiliza exactamente los mismos componentes, fotografías, textos, colores, navegación y modelo de interacción en escritorio, tablet y móvil. Las reglas responsive solo reorganizan la retícula, escalan las imágenes y ajustan los espacios. No existen dos sitios ni dos líneas visuales distintas.

**Dirección creativa:** Luxury Editorial Beauty: fondos espresso, marfil y champagne, tipografía editorial, encuadres fotográficos protagonistas, iconografía lineal, transiciones discretas y prioridad permanente a la reserva.

## Intervenciones

- Portada: mantiene las 11 publicaciones originales, su orden y sus textos, con navegación táctil, controles y pausa que respeta movimiento reducido.
- Encabezado: logo editorial, diamante, horario y ubicación, rutas a secciones, CTA de reserva; menú abierto con la misma identidad visual y contenido.
- Experiencia: el titular aparece antes de las imágenes al fluir la retícula, y permanece junto a la composición fotográfica en escritorio.
- Transición de marca: banda cinética con las categorías comerciales de Luxe, sin bloquear scroll ni reproducir audio.
- Catálogo: seis categorías con servicios, descripciones y precios originales; selector accesible.
- Testimonios: citas originales, no reescritas.
- Galería: composición fotográfica asimétrica común a todos los anchos. Las seis imágenes se amplían mediante diálogo nativo, con teclado, Escape, controles y deslizamiento táctil.
- Ubicación: mapa, dirección exacta, horarios, facilidad de estacionamiento, métodos de pago y acceso directo a Google Maps y WhatsApp.
- Cierre: imagen de marca y reserva reorganizadas en una sola composición escalable.
- Footer: gran marca tipográfica y enlaces en retícula adaptable, sin columnas de espacio muerto. Se conserva dirección, horario, teléfono y políticas.
- Desktop: el CTA fijo redundante se elimina; el botón del encabezado permanece. En móvil hay CTA flotante solo al desplazarse.

## Integridad del negocio

Sin cambios respecto a la rama base en `data/`, `lib/`, `app/aviso-de-privacidad/` y `app/politicas-de-citas/`. Permanecen los precios, servicios, testimonios, Colavo, WhatsApp, dirección, horarios, redes sociales, SEO, analítica y políticas. Se mantienen todos los recursos fotográficos originales.

## Validación reproducible

- `npm run check`: lint, TypeScript, compilación Next.js y generación estática.
- `npm run qa:v10`: pruebas Playwright en 320, 375, 390, 768, 1024 y 1440 px; sin desbordamiento horizontal; menú móvil visible y no superpuesto; galería expandible y navegación accesible; 11 slides originales; catálogo funcional; botones Colavo; errores JavaScript e imágenes visibles.
- Axe-core WCAG 2.0/2.1 A y AA en 390 y 1440 px, con revisión manual complementaria pendiente.
- Capturas reales de Chrome guardadas en `docs/v10-review/`.

## Presentación

Revisar las capturas de la portada, galería, experiencia, ubicación, menú y cierre en móvil y escritorio. Probar en un teléfono real la reproducción del carrusel, el menú y la reserva. Mostrar un enlace Preview solo a personas autorizadas: el despliegue de Vercel puede exigir inicio de sesión y no equivale a una URL pública.

**No publicar sin aprobación explícita.** El calificativo «top 1 %» sigue siendo una aspiración: requeriría comparación externa, evaluación independiente y resultados de usuarios. Tampoco se afirma mejora causal de reservas sin datos.