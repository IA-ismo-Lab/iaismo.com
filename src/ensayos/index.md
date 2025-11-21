---
layout: base
title: Ensayos
description: Ensayos filosóficos sobre IA y pensamiento crítico
---

<style>
.essay-card {
  background: var(--gris-oscuro);
  border: 1px solid var(--gris-medio);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.essay-card:hover {
  border-color: var(--acento);
  transform: translateY(-2px);
}

.essay-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.essay-content {
  padding: 1.5rem;
}

.essay-title {
  font-size: 1.25rem;
  color: var(--acento);
  margin-bottom: 0.5rem;
  font-family: var(--fuente-mono);
}

.essay-title a {
  color: inherit;
  text-decoration: none;
}

.essay-title a:hover {
  text-decoration: underline;
}

.essay-meta {
  color: var(--gris-medio);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  font-family: var(--fuente-mono);
}

.essay-excerpt {
  color: var(--gris-claro);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.essay-read-more {
  color: var(--acento);
  text-decoration: none;
  font-weight: bold;
  font-family: var(--fuente-mono);
  font-size: 0.9rem;
}

.essay-read-more:hover {
  text-decoration: underline;
}
</style>

# Ensayos

Reflexiones filosóficas sobre inteligencia artificial, pensamiento crítico y la condición humana en la era digital.

<div class="cards-grid">
{%- for essay in collections.essays | reverse -%}
  <article class="card essay-card">
    {% if essay.data.image %}
    <img src="{{ essay.data.image | url }}" alt="Imagen destacada del ensayo: {{ essay.data.title }}" class="essay-image">
    {% else %}
    <div class="essay-image" style="display: flex; align-items: center; justify-content: center; background: var(--gris-medio); color: var(--acento); font-family: var(--fuente-mono); font-size: 3rem;" role="img" aria-label="Imagen no disponible - ensayo sin imagen destacada">📝</div>
    {% endif %}
    <div class="essay-content">
      <h2 class="essay-title">
        <a href="{{ essay.url | url }}">{{ essay.data.title }}</a>
      </h2>
      <p class="essay-meta">{{ essay.data.date | date("dd/MM/yyyy") }}</p>
      {% if essay.data.excerpt %}
      <p class="essay-excerpt">{{ essay.data.excerpt }}</p>
      {% endif %}
      <a href="{{ essay.url | url }}" class="essay-read-more">→ Leer ensayo completo</a>
    </div>
  </article>
{%- endfor -%}
</div>

---

> "Pensar es el único lujo que nos queda."</content>
<parameter name="filePath">c:\Users\USUARIO\Base\_dev\IA-ISMO_LAB_WEB\GITHUB\iaismo.com\src\ensayos\index.md