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

/* Card de últimas investigaciones */
.news-card {
  background: var(--gris-oscuro);
  border: 1px solid var(--gris-medio);
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  font-family: var(--fuente-mono);
}

.news-card h3 {
  color: var(--acento);
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.news-card p {
  color: var(--gris-claro);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.news-card .news-date {
  color: var(--gris-medio);
  font-size: 0.8rem;
}

/* Cards de proyectos */
.project-card {
  position: relative;
}

.project-icon-large {
  font-size: 4rem;
  text-align: center;
  margin-bottom: 1rem;
  padding: 1rem;
  background: var(--gris-medio);
  border-radius: 8px;
}

.card-title {
  margin-bottom: 0.5rem; /* Reducido */
}

.card-excerpt {
  margin-bottom: 0.5rem; /* Reducido */
}

.project-tag {
  background: var(--acento);
  color: var(--negro);
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-size: 0.7rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family: var(--fuente-mono);
  margin-left: 0.5rem;
}

/* Cards pequeñas de proyectos */
.project-card-small {
  position: relative;
}

.project-icon-small {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background: var(--gris-medio);
  border-radius: 6px;
}

.card-title-small {
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.card-title-small a {
  color: var(--acento);
  text-decoration: none;
}

.card-title-small a:hover {
  text-decoration: underline;
}

.card-excerpt-small {
  font-size: 0.85rem;
  color: var(--gris-claro);
  margin: 0;
  line-height: 1.4;
}

.project-tag-small {
  background: var(--acento);
  color: var(--negro);
  padding: 0.15rem 0.3rem;
  border-radius: 2px;
  font-size: 0.6rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family: var(--fuente-mono);
  margin-left: 0.25rem;
}

.project-link-small {
  color: var(--acento);
  text-decoration: none;
  font-weight: bold;
  font-family: var(--fuente-mono);
  font-size: 0.85rem;
  margin-top: 0.5rem;
  display: inline-block;
}

.project-link-small:hover {
  text-decoration: underline;
}
</style>

# IA-ismo LAB . Research IA.

**Asoc. Cientifica IA-ismo LAB . Europe. Spain . Entidad sin ánimo de lucro para la Investigación, divulgación y producción de Inteligencia Artificial.**

## 📰 Newsletter & Repositorios

<div style="background: var(--gris-oscuro); border: 1px solid var(--gris-medio); border-radius: 8px; padding: 1.5rem; margin: 1rem 0 0.5rem 0; font-family: var(--fuente-mono);">
  <div style="display: flex; flex-wrap: wrap; gap: 2rem; align-items: center; margin-bottom: 1rem;">
    <div>
      <h3 style="color: var(--acento); margin: 0 0 0.5rem 0; font-size: 1.1rem;">📧 IA-ismo Newsletter</h3>
      <p style="color: var(--gris-claro); margin: 0; font-size: 0.9rem;">2305 Suscritores • Actualizaciones semanales sobre IA</p>
      <a href="https://www.linkedin.com/newsletters/ia-ismo-7013065703138177024/" style="color: var(--acento); text-decoration: none; font-weight: bold;">→ Suscribirse</a>
    </div>
    <div>
      <h3 style="color: var(--acento); margin: 0 0 0.5rem 0; font-size: 1.1rem;">🐙 GitHub</h3>
      <p style="color: var(--gris-claro); margin: 0; font-size: 0.9rem;">Código abierto • Proyectos de IA</p>
      <a href="https://github.com/orgs/IA-ismo-Lab/repositories" style="color: var(--acento); text-decoration: none; font-weight: bold;">→ Ver repositorios</a>
    </div>
    <div>
      <h3 style="color: var(--acento); margin: 0 0 0.5rem 0; font-size: 1.1rem;">📄 Papers</h3>
      <p style="color: var(--gris-claro); margin: 0; font-size: 0.9rem;">Publicaciones científicas • Investigación académica</p>
      <a href="https://orcid.org/0000-0003-3129-7778" style="color: var(--acento); text-decoration: none; font-weight: bold;">→ Ver ORCID</a>
    </div>
  </div>
</div>

<div class="page-container">
<div class="main-content">

## 💻 Últimos Proyectos

<div class="cards-grid">
  <article class="card project-card">
    <div class="project-icon-large">🔥</div>
    <div class="card-content">
      <h3 class="card-title">
        <a href="https://github.com/IA-ismo-Lab/fire-viewer">Fire Viewer</a>
        <span class="project-tag">web app</span>
      </h3>
      <p class="card-excerpt">Visualizador en tiempo real de incendios forestales con Python FastAPI y Cesium.</p>
      <a href="https://github.com/IA-ismo-Lab/fire-viewer" class="project-link-small">→ Ver en GitHub</a>
    </div>
  </article>

  <article class="card project-card">
    <div class="project-icon-large">🎙️</div>
    <div class="card-content">
      <h3 class="card-title">
        <a href="https://github.com/IA-ismo-Lab/VoiceClone-AI-Spanish">VoiceClone AI Spanish</a>
        <span class="project-tag">codigo</span>
      </h3>
      <p class="card-excerpt">Sistema zero-shot para clonación de voz en español.</p>
      <a href="https://github.com/IA-ismo-Lab/VoiceClone-AI-Spanish" class="project-link-small">→ Ver en GitHub</a>
    </div>
  </article>

  <article class="card project-card">
    <div class="project-icon-large">🎧</div>
    <div class="card-content">
      <h3 class="card-title">
        <a href="https://github.com/IA-ismo-Lab/Castellanator">Castellanator</a>
        <span class="project-tag">codigo</span>
      </h3>
      <p class="card-excerpt">Traductor de contenido impulsado por IA.</p>
      <a href="https://github.com/IA-ismo-Lab/Castellanator" class="project-link-small">→ Ver en GitHub</a>
    </div>
  </article>
</div>

<p style="text-align: center; margin: 1rem 0 2rem 0;">
  <a href="{{ '/proyectos' | url }}" style="font-family: var(--fuente-mono); color: var(--acento);">→ Ver todos los proyectos</a>
</p>

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
      <a href="#" class="prompt-link" data-video-id="extranatuta">Ver Prompt</a>
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
      <a href="#" class="prompt-link" data-video-id="zelma1975ia">Ver Prompt</a>
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
      <a href="#" class="prompt-link" data-video-id="masdinero">Ver Prompt</a>
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
       <span class="terminal-prompt">$</span> <span class="terminal-text">GTM19112025 >  MovieFlow  es nuestra apuesta para arrasar en la generación de video.</span><span class="cursor">|</span><br>
      </span>
    </div>
  </div>
</div>

<div class="news-card">
  <h3>🚀 Últimos Proyectos</h3>
  
  <div style="margin-bottom: 1rem;">
    <h4 style="color: var(--acento); margin: 0.5rem 0 0.25rem 0; font-size: 0.9rem;">🔥 Fire Viewer</h4>
    <p style="color: var(--gris-claro); font-size: 0.8rem; margin: 0 0 0.5rem 0;">Python FastAPI Cesium License Status IA-Friendly</p>
    <p style="color: var(--gris-medio); font-size: 0.8rem; margin: 0;">Un visualizador en tiempo real de incendios forestales desarrollado por ⚠️ IA-ismo Labs</p>
    <a href="https://github.com/IA-ismo-Lab/fire-viewer" style="color: var(--acento); text-decoration: none; font-size: 0.8rem;">→ Ver proyecto</a>
  </div>
  
  <div style="margin-bottom: 1rem;">
    <h4 style="color: var(--acento); margin: 0.5rem 0 0.25rem 0; font-size: 0.9rem;">🎙️ VoiceClone AI Spanish</h4>
    <p style="color: var(--gris-medio); font-size: 0.8rem; margin: 0;">un zero-shot para clonar la voz</p>
    <a href="https://github.com/IA-ismo-Lab/VoiceClone-AI-Spanish" style="color: var(--acento); text-decoration: none; font-size: 0.8rem;">→ Ver proyecto</a>
  </div>
  
  <div style="margin-bottom: 1rem;">
    <h4 style="color: var(--acento); margin: 0.5rem 0 0.25rem 0; font-size: 0.9rem;">🎧 Castellanator</h4>
    <p style="color: var(--gris-medio); font-size: 0.8rem; margin: 0;">AI-Powered Content Translator</p>
    <a href="https://github.com/IA-ismo-Lab/Castellanator" style="color: var(--acento); text-decoration: none; font-size: 0.8rem;">→ Ver proyecto</a>
  </div>
  
  <p style="color: var(--gris-medio); font-size: 0.8rem; margin-top: 1rem; border-top: 1px solid var(--gris-medio); padding-top: 0.5rem;">
    💪 ¡Apóyanos en el concurso! Necesitamos 10.000€ para la causa
  </p>
</div>
</div>
</div>

<script src="{{ '/js/prompt.js' | url }}"></script>
