---
layout: post
title: "Anatomía de un Post IAista"
date: 2025-11-13
author: IA-ismo LAB
excerpt: "Ejemplo de publicación con imágenes, videos y todos los elementos que soporta el sistema."
tags: [posts, meta, tutorial]
---

Este es un post de ejemplo que muestra todas las capacidades del sistema de publicación de IA-ismo LAB.

## Texto y formato básico

El sistema soporta **negrita**, *cursiva*, y `código inline`. También puedes crear listas:

- Elemento uno
- Elemento dos
- Elemento tres

O listas numeradas:

1. Primer punto
2. Segundo punto
3. Tercer punto

## Citas

Las citas se muestran con estilo sobrio:

> "La IA no es el futuro. Es el presente malinterpretado."  
> — IA-ismo LAB

## Código

Bloques de código con sintaxis:

```javascript
function pensarCriticamente(tema) {
  return tema
    .filter(idea => idea.rigurosa)
    .map(idea => idea.expandir())
    .reduce((acc, curr) => acc.sintetizar(curr));
}
```

## Imágenes

Para añadir imágenes, colócalas en `/src/images/` y referéncialas así:

```markdown
![Descripción de la imagen](/images/nombre-imagen.jpg)
```

Ejemplo de figura con caption:

<figure>
  <img src="/images/ejemplo-placeholder.jpg" alt="Placeholder" style="background: #2a2a2a; padding: 2rem; text-align: center;">
  <figcaption>Esta es una imagen de ejemplo con descripción.</figcaption>
</figure>

## Videos

Para videos MP4, colócalos en `/src/videos/` y usa este formato:

```html
<video controls>
  <source src="/videos/tu-video.mp4" type="video/mp4">
  Tu navegador no soporta el elemento video.
</video>
```

Ejemplo:

<video controls style="width: 100%; max-width: 600px; margin: 2rem 0;">
  <source src="/videos/ejemplo-video.mp4" type="video/mp4">
  Tu navegador no soporta el elemento video.
</video>

## Enlaces

Los enlaces se ven así: [Visita el GitHub de IA-ismo LAB](https://github.com/IA-ismo-Lab).

---

## Recursos externos

También puedes embeber contenido de otras plataformas usando iframes si es necesario, aunque preferimos mantener todo el contenido autocontenido en el sitio.

---

**Nota para editores:**

- Las imágenes deben estar en formato `.jpg`, `.png` o `.webp`
- Los videos deben estar en formato `.mp4` para máxima compatibilidad
- Mantén los archivos optimizados (imágenes < 500KB, videos < 50MB idealmente)
- Usa nombres descriptivos sin espacios: `ejemplo-video.mp4`, no `Ejemplo Video.mp4`

---

Este post será visible en el archivo principal y servirá como referencia para futuras publicaciones.
