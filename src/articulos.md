---
layout: base
title: Artículos
description: Archivo completo de publicaciones de IA-ismo LAB
---

# Artículos

Archivo completo del pensamiento IAista. Filosofía, crítica, neologismos y excavación digital.

<div class="cards-grid">
{%- for post in collections.posts -%}
  <article class="card">
    {% if post.data.image %}
    <img src="{{ post.data.image | url }}" alt="Imagen destacada del artículo: {{ post.data.title }}" class="card-image">
    {% else %}
    <div class="card-image" style="display: flex; align-items: center; justify-content: center; background: var(--gris-medio); color: var(--acento); font-family: var(--fuente-mono); font-size: 3rem;" role="img" aria-label="Imagen no disponible - artículo sin imagen destacada">⚠️</div>
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

---

> "Esto no es un blog. Es una excavación digital."
