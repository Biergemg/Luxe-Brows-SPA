# Luxe Brows & Spa — V10.3 · Presentación para la propietaria

Estado: revisión lista para mostrar. Rama aislada feat/luxe-v10-editorial-preview. Producción y main intactos.

## Dirección de arte
Un solo sitio responsive con la misma identidad en escritorio, tablet y móvil: espresso, champagne y marfil, tipografía serif, fotografías reales, carrusel original protagonista y navegación clara.

## Entregado en V10.3
- Portada con las once piezas promocionales previamente publicadas, sin etiquetas añadidas sobre las imágenes.
- Logotipos oficiales de Instagram, Facebook y WhatsApp mediante Simple Icons; otros iconos mantienen una familia lineal coherente.
- Dos fotografías de experiencia del mismo tamaño visual: altura idéntica desde 320 hasta 1440 px; composición equilibrada sin miniaturas flotantes.
- Encabezado sticky integrado al flujo del documento; CTA de reserva en móvil sin barra flotante que tape texto y fotografías.
- Galería editorial con ampliación y navegación táctil, por teclado y controles visibles.
- Cierre fotográfico y pie de página rediseñados con accesos a servicios, redes, reserva, ubicación y políticas.
- Eliminados textos internos de implementación: Volver al carrusel original, Colección original y Contenido auténtico.

## Contenido comercial invariable
Sin cambios frente a main en data/, lib/, aviso-de-privacidad ni politicas-de-citas. Precios, testimonios, horarios, ubicación, enlace Colavo, WhatsApp, SEO, tracking y políticas se conservan. Las imágenes originales siguen incluidas.

## Validación
- npm run check: lint, TypeScript y build de producción aprobados.
- npm run qa:v10: seis anchos (320, 375, 390, 768, 1024 y 1440 px), menú, carrusel, categorías, galería, reservas y ausencia de errores JavaScript.
- axe-core WCAG A y AA a 390 y 1440 px: cero infracciones detectadas.
- Geometría: dos fotografías con altura idéntica; sin CTA inferior fijo ni desbordamiento horizontal.
- Evidencia visual: capturas reales de Chrome en docs/v10-review/.

## Publicación
Esta rama es solo para demostración. El preview de Vercel puede requerir iniciar sesión. No modificar main ni producción sin aprobación de la propietaria. El objetivo top 1 % no está certificado externamente.