---
layout: base
title: IA-ismo LAB
description: Laboratorio de pensamiento crítico en la intersección entre inteligencia artificial y humanidades
---

# Un Laboratorio IA-ismo

**El archivo canónico del pensamiento IAista.**

Filosofía, crítica, neologismos y arquitectura líquida.  
Una entidad sin ánimo de lucro que cruza inteligencia artificial y humanidades.

> "Esto no es un blog. Es una excavación digital."

---

## Publicaciones recientes

<div class="cards-grid">
{%- for post in collections.posts | reverse | slice(0, 3) -%}
  <article class="card">
    {% if post.data.image %}
    <img src="{{ post.data.image | url }}" alt="{{ post.data.title }}" class="card-image">
    {% else %}
    <div class="card-image" style="display: flex; align-items: center; justify-content: center; background: var(--gris-medio); color: var(--acento); font-family: var(--fuente-mono); font-size: 3rem;">⚠️</div>
    {% endif %}
    <div class="card-content">
      <h2 class="card-title">
        <a href="{{ post.url | url }}">{{ post.data.title }}</a>
      </h2>
      <p class="card-meta">{{ post.data.date | date("dd/MM/yyyy") }}</p>
      {% if post.data.excerpt %}
      <p class="card-excerpt">{{ post.data.excerpt }}</p>
      {% endif %}
    </div>
  </article>
{%- endfor -%}
</div>

<p style="text-align: center; margin-top: 2rem;">
  <a href="{{ '/articulos' | url }}" style="font-family: var(--fuente-mono); color: var(--acento);">→ Ver archivo completo de artículos</a>
</p>

## CineAI Experimental

**FullStack 100% AI Experimental** - Films generados por IA con mínima intervención humana.

<div class="cards-grid">
  <article class="video-card">
    <video controls class="card-video">
      <source src="{{ '/videos/cineai/video1.mp4' | url }}" type="video/mp4">
      Tu navegador no soporta el elemento video.
    </video>
    <div class="video-card-content">
      <h2 class="video-card-title">FullStack AI- Film 1</h2>
      <p class="video-card-description">
        Primera exploración cinematográfica generada por IA con mínima intervención humana.
      </p>
      <p class="card-meta">2025 • IA-ismo LAB</p>
    </div>
  </article>

  <article class="video-card">
    <video controls class="card-video">
      <source src="{{ '/videos/cineai/video2.mp4' | url }}" type="video/mp4">
      Tu navegador no soporta el elemento video.
    </video>
    <div class="video-card-content">
      <h2 class="video-card-title">FullStack AI- Film 2</h2>
      <p class="video-card-description">
        Segunda producción experimental explorando la creatividad de modelos de IA.
      </p>
      <p class="card-meta">2025 • IA-ismo LAB</p>
    </div>
  </article>

  <article class="video-card">
    <video controls class="card-video">
      <source src="{{ '/videos/cineai/video3.mp4' | url }}" type="video/mp4">
      Tu navegador no soporta el elemento video.
    </video>
    <div class="video-card-content">
      <h2 class="video-card-title">FullStack AI- Film 3</h2>
      <p class="video-card-description">
        Tercera entrega de la serie experimental de cine generado por IA.
      </p>
      <p class="card-meta">2025 • IA-ismo LAB</p>
    </div>
  </article>
</div>

<p style="text-align: center; margin-top: 2rem;">
  <a href="{{ '/cineai' | url }}" style="font-family: var(--fuente-mono); color: var(--acento);">→ Ver colección completa de CineAI</a>
</p>

---

**Aquí no hacemos "contenidos", hacemos tiempo.**  
— A.C.F., IA-ismo LAB
