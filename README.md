# 🧠 IA-ismo LAB — Sitio Web Oficial

**Laboratorio de pensamiento crítico en la intersección entre inteligencia artificial y humanidades**

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

---

## 📋 Sobre este proyecto

Sitio web oficial de **IA-ismo LAB**, generado con [Eleventy](https://www.11ty.dev/) y desplegado en GitHub Pages.

- **URL de producción:** [iaismo.com](https://iaismo.com)
- **Tecnología:** Eleventy (11ty) + Nunjucks + CSS
- **Hosting:** GitHub Pages (directorio `/docs`)

---

## 🚀 Inicio rápido

### Prerrequisitos

- Node.js 18 o superior
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/IA-ismo-Lab/iaismo.com.git
cd iaismo.com

# Instalar dependencias
npm install
```

### Comandos disponibles

```bash
# Desarrollo local con hot-reload
npm run serve
# o también: npm start

# Compilar para producción (genera /docs)
npm run build

# Limpiar directorio de salida
npm run clean

# Compilar y deployar (git push)
npm run deploy
```

---

## 📁 Estructura del proyecto

```
iaismo.com/
├── src/                      # Código fuente
│   ├── _includes/            # Layouts Nunjucks
│   │   ├── base.njk          # Layout base
│   │   └── post.njk          # Layout para posts
│   ├── css/                  # Estilos CSS
│   │   └── style.css         # Estilos principales
│   ├── images/               # Imágenes estáticas
│   ├── videos/               # Videos MP4
│   ├── posts/                # Publicaciones markdown
│   │   ├── bienvenida.md
│   │   └── anatomia-post-iaista.md
│   ├── index.md              # Homepage
│   ├── about.md              # Sobre nosotros
│   └── manifiestos.md        # Manifiestos
├── docs/                     # Salida compilada (GitHub Pages)
├── eleventy.config.js        # Configuración Eleventy
├── package.json              # Dependencias y scripts
└── README.md                 # Este archivo
```

---

## ✍️ Crear nuevo post

1. Crea un archivo `.md` en `src/posts/`
2. Añade el frontmatter con metadatos:

```markdown
---
layout: post
title: "Título del post"
date: 2025-11-13
author: IA-ismo LAB
excerpt: "Breve descripción"
tags: [posts, filosofia, ia]
---

Tu contenido aquí...
```

3. Compila el sitio:

```bash
npm run build
```

---

## 🎨 Estética y diseño

El sitio sigue la estética **IAista**:

- ✅ Paleta B&N con acento verde terminal (`#00ff00`)
- ✅ Tipografía monospace para títulos
- ✅ Diseño sobrio, tipo archivo digital
- ✅ Sin colorines ni adornos marketineros
- ✅ Soporte para imágenes y videos MP4

---

## 📦 Añadir media

### Imágenes

1. Coloca la imagen en `src/images/`
2. Referénciala en markdown:

```markdown
![Descripción](/images/nombre-imagen.jpg)
```

### Videos

1. Coloca el video en `src/videos/`
2. Usa HTML en tu post:

```html
<video controls>
  <source src="/videos/tu-video.mp4" type="video/mp4">
</video>
```

---

## 🚢 Deploy a GitHub Pages

El sitio se despliega automáticamente desde el directorio `/docs` en la rama `main`.

### Configuración en GitHub

1. Ve a **Settings** → **Pages**
2. Selecciona: **Source**: `main` branch, `/docs` folder
3. Guarda los cambios

### Deploy manual

```bash
npm run deploy
```

Este comando:
1. Compila el sitio (`npm run build`)
2. Añade cambios al git (`git add docs`)
3. Hace commit
4. Push al repositorio

---

## 🧪 Tecnologías

- **[Eleventy](https://www.11ty.dev/)** — Generador estático
- **[Nunjucks](https://mozilla.github.io/nunjucks/)** — Motor de templates
- **[Luxon](https://moment.github.io/luxon/)** — Manejo de fechas
- **CSS puro** — Sin frameworks, estilo artesanal

---

## 📜 Licencia

ISC License — Ver [LICENSE](LICENSE)

---

## 👥 Contribuir

Este es un laboratorio de pensamiento. Si quieres proponer cambios, abre un issue o pull request. Valoramos:

- Correcciones tipográficas
- Mejoras de accesibilidad
- Optimizaciones de rendimiento
- **No** aceptamos: gamificación, métricas de engagement, o cualquier cosa que huela a marketing

---

## 📬 Contacto

- **Web:** [iaismo.com](https://iaismo.com)
- **Email:** contacto@iaismo.com
- **GitHub:** [@IA-ismo-Lab](https://github.com/IA-ismo-Lab)

---

> "Aquí no hacemos contenidos, hacemos tiempo."  
> — A.C.F., IA-ismo LAB

---

**Versión:** 1.0.0  
**Última actualización:** Noviembre 2025
