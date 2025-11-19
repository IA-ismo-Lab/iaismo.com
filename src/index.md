---
layout: base
title: IA-ismo LAB
description: Laboratorio de pensamiento crítico en la intersección entre inteligencia artificial y humanidades
---

<style>
.video-card progress {
  width: 100%;
  height: 8px;
  border: none;
  background-color: #333;
  border-radius: 4px;
}

.video-card progress::-webkit-progress-bar {
  background-color: #333;
  border-radius: 4px;
}

.video-card progress::-webkit-progress-value {
  background-color: var(--acento);
  border-radius: 4px;
}

.video-card progress::-moz-progress-bar {
  background-color: var(--acento);
  border-radius: 4px;
}

/* Layout con sidebar */
.main-content {
  width: 100%;
}

.sidebar {
  position: sticky;
  top: 2rem;
  height: fit-content;
}

.page-container {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

.terminal-sim {
  background: var(--gris-oscuro);
  border: 1px solid var(--gris-medio);
  border-radius: 8px;
  font-family: var(--fuente-mono);
  font-size: 0.9rem;
  margin-bottom: 2rem;
}

.terminal-header {
  background: var(--gris-medio);
  padding: 0.5rem 1rem;
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.terminal-title {
  color: var(--acento);
  font-weight: bold;
}

.terminal-buttons {
  display: flex;
  gap: 0.5rem;
}

.terminal-button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.terminal-button.red { background: #ff5f57; }
.terminal-button.yellow { background: #ffbd2e; }
.terminal-button.green { background: #28ca42; }

.terminal-body {
  padding: 1rem;
  background: var(--negro);
  border-radius: 0 0 8px 8px;
}

.terminal-line {
  color: var(--acento);
  margin: 0;
}

.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Card de apoyo */
.support-card {
  background: var(--gris-oscuro);
  border: 1px solid var(--gris-medio);
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  text-align: center;
  font-family: var(--fuente-mono);
}

.support-card h3 {
  color: var(--acento);
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.support-card p {
  color: var(--gris-claro);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.support-card img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}
</style>

# IA-ismo LAB . Research IA.

**Asoc. Cientifica IA-ismo LAB . Europe. Spain . Entidad sin ánimo de lucro para la Investigación, divulgación y producción de Inteligencia Artificial.**

<div class="page-container">
<div class="main-content">

## Destacado: CineAI Experimental

**FullStack 100% AI Experimental** - Films generados por IA con mínima intervención humana.

<div class="cards-grid">
  <article class="video-card">
    <video controls class="card-video">
      <source src="{{ '/videos/cineai/video1.mp4' | url }}" type="video/mp4">
      Tu navegador no soporta el elemento video.
    </video>
    <div class="video-card-content">
      <h2 class="video-card-title">Extrañatura</h2>
      <progress value="99" max="100">99%</progress>
      <p class="video-card-description">
        99% Autonomia <br />Test MovieFlow, Guión: Gpt4o as ADA Leakey.
        <br />Tools: MovieFlow | 4o
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
      <h2 class="video-card-title">ZELMA_1975_IA</h2>
      <progress value="99" max="100">99%</progress>
      <p class="video-card-description">
        99% Autonomia <br />Test MovieFlow, Guión: Gpt4o as ADA Leakey.
        <br />Tools: MovieFlow | 4o
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
      <h2 class="video-card-title">MasDinero</h2>
      <progress value="40" max="100">40%</progress>
      <p class="video-card-description">
        40% Autonomia <br />Test MovieFlow, Guión: Alicia Colmenero IA-ismo LAB.
        <br />Tools: MovieFlow | Fichas Redacción 4o
      </p>
      <p class="card-meta">2025 • IA-ismo LAB</p>
    </div>
  </article>
</div>

<p style="text-align: center; margin-top: 2rem;">
  <a href="{{ '/cineai' | url }}" style="font-family: var(--fuente-mono); color: var(--acento);">→ Ver colección completa de CineAI</a>
</p>

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

---

**Aquí no hacemos "contenidos", hacemos tiempo.**  
— A.C.F., IA-ismo LAB

</div>

<div class="sidebar">
<div class="terminal-sim">
  <div class="terminal-header">
    <div class="terminal-title">IA-ismo LAB Terminal</div>
    <div class="terminal-buttons">
      <span class="terminal-button red"></span>
      <span class="terminal-button yellow"></span>
      <span class="terminal-button green"></span>
    </div>
  </div>
  <div class="terminal-body">
    <div class="terminal-content">
      <span class="terminal-prompt">$</span> <span class="terminal-text">GTM19112025 >  Gemini 3.0 se ha lanzado.</span><br>
       <span class="terminal-prompt">$</span> <span class="terminal-text">GTM19112025 >  MovieFlow  es nuestra apuesta para arrasasr en la generación de video.</span><span class="cursor">|</span><br>
      </span>
    </div>
  </div>
</div>

<div class="support-card">
  <h3>💝 Apoya IA-ismo LAB</h3>
  <p>Si te gusta nuestro trabajo experimental con IA, puedes invitarnos a un café ☕</p>
  <img src="{{ '/images/qr-code.png' | url }}" alt="Buy Me A Coffee QR Code">
</div>
</div>
</div>
