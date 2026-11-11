# Luxe Brows & Spa — Propuesta visual V10

**Estado:** propuesta de diseño aislada. **No es producción.** Rama: `feat/luxe-v10-editorial-preview`. Base original: `43c46401bf264be0c6ef21ea4d6ebaa8474a93af`.

## Dirección creativa

**Luxury Editorial Beauty**: boutique de alta cosmética; fotografía protagonista; tipografía de carácter; contraste espresso / ivory / champagne; movimiento sutil; navegación clara y reserva accesible. Las fotografías limpias se usan de portada y los creativos publicitarios originales se conservan en la galería.

## Mejoras implementadas

- Hero cinematográfico con carrusel de cuatro fotografías sin textos incrustados, titular editorial y reserva directa.
- Menú superior transparente a sólido al desplazarse, navegación móvil accesible y CTA fijo en teléfonos.
- Nueva sección editorial que presenta la experiencia Luxe.
- Catálogo interactivo de seis categorías, con tratamientos, precios, notas y descripciones originales.
- Testimonios originales en formato editorial; galería desplazable con los once creativos originales.
- Ubicación, mapa, horarios, estacionamiento, medios de pago y footer rejerarquizados.
- Preguntas frecuentes, páginas legales y cierre de reserva preservados y visualmente integrados.
- GSAP / ScrollTrigger con carga progresiva; respetando la preferencia de movimiento reducido.

## Invariantes: contenido y negocio intactos

Los archivos `data/`, `lib/`, `app/aviso-de-privacidad/` y `app/politicas-de-citas/` son idénticos a los de la rama base. En particular, no se modificaron precios, catálogo, WhatsApp, liga de reserva Colavo, dirección, horarios, perfiles sociales, testimonios, FAQ, metadatos SEO, tracking ni textos legales.

## Validaciones verificables

1. `npm run check`: lint, TypeScript, build optimizado de Next y rutas estáticas.
2. `npm run qa:v10`: Playwright en 320, 375, 390, 768, 1024 y 1440 px; overflow; menú móvil; tabs de servicios; tratamiento Hydrafacial; CTA Colavo; errores JS e imágenes visibles.
3. axe-core WCAG 2.0/2.1 A/AA: 390 y 1440 px, sin infracciones detectadas.
4. Capturas reales de Chrome revisadas en portada y secciones interiores.
5. Integridad: `git diff main -- data lib app/aviso-de-privacidad app/politicas-de-citas` sin cambios.

## Cómo presentar

Usar un despliegue **Preview** separado de producción; nunca fusionar esta rama con `main` sin la aprobación explícita de la dueña. Mostrar primero la portada y la experiencia móvil, luego categorías, precios, testimonios, galería, ubicación y reserva. Solicitar validación fotográfica y de marca antes de publicar.

## Límites de la evidencia

El calificativo «top 1 %» no es certificable a partir del diseño interno. Habría que realizar evaluación comparativa independiente, pruebas con usuarios y métricas de campo. No se promete crecimiento en reservas sin experimentación controlada. Esta propuesta es un candidato V10, no una certificación externa.

## Pruebas locales

```bash
npm ci
npm run check
npm run dev
# En otra terminal, con Chrome instalado y http://localhost:3000 activo:
npm run qa:v10
```

**Producción:** no publicar ni hacer merge antes de autorización explícita. Rollback recomendado: conservar hash de `main` previo al despliegue.