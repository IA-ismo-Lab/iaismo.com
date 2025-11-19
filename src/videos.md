---
layout: base
title: Vídeos
description: Archivo visual de IA-ismo LAB
---

# Vídeos

Pensamiento IAista en formato visual. Conferencias, experimentos, disonancias tecnológicas.

<div class="cards-grid">
  
  <article class="video-card" data-video-id="technological-dissonance">
    <video controls class="card-video">
      <source src="{{ '/videos/Technological_Dissonance.mp4' | url }}" type="video/mp4">
      Tu navegador no soporta el elemento video.
    </video>
    <div class="video-card-content">
      <h2 class="video-card-title">Technological Dissonance</h2>
      <p class="video-card-description">
        Exploración sobre la disonancia en la relación humano-máquina.
      </p>
      <p class="card-meta">2025 • IA-ismo LAB</p>
      <a href="#" class="prompt-link" data-video-id="technological-dissonance">Prompt</a>
    </div>
  </article>

  <!-- Placeholder para futuros videos -->
  <article class="video-card" style="opacity: 0.4;" data-video-id="placeholder-1">
    <div class="card-video" style="display: flex; align-items: center; justify-content: center; background: var(--gris-medio); height: 200px; color: var(--gris-claro); font-family: var(--fuente-mono);">
      En desarrollo
    </div>
    <div class="video-card-content">
      <h2 class="video-card-title">Archivo en construcción</h2>
      <p class="video-card-description">
        Material audiovisual en fase de producción y revisión académica.
      </p>
      <p class="card-meta">En proceso</p>
    </div>
  </article>

  <article class="video-card" style="opacity: 0.4;" data-video-id="placeholder-2">
    <div class="card-video" style="display: flex; align-items: center; justify-content: center; background: var(--gris-medio); height: 200px; color: var(--gris-claro); font-family: var(--fuente-mono);">
      En desarrollo
    </div>
    <div class="video-card-content">
      <h2 class="video-card-title">Archivo en construcción</h2>
      <p class="video-card-description">
        Documentación visual de investigaciones en curso.
      </p>
      <p class="card-meta">En proceso</p>
    </div>
  </article>

</div>

<!-- Modal para detalles de video -->
<div id="video-modal" class="video-modal">
  <div class="video-modal-content">
    <span class="video-modal-close">&times;</span>
    <div id="video-modal-body"></div>
  </div>
</div>

<script>
// Datos detallados de cada video
const videoDetails = {
  'technological-dissonance': {
    title: "🎬 Título:",
    content: `"Technological Dissonance"

🧠 ¿Qué es?
Una exploración profunda sobre la disonancia cognitiva que surge en la relación entre humanos y máquinas inteligentes. Un análisis visual de cómo la tecnología altera nuestra percepción de la realidad.

🎨 VISUAL:
Estética documental con elementos abstractos. Transiciones suaves entre realidad y simulación digital. Uso de efectos visuales para representar la desconexión entre lo humano y lo artificial.

🧩 ESCENAS EJEMPLO:
Diálogos entre humanos y sistemas IA. Visualizaciones de datos que representan pensamientos. Momentos de conflicto entre intuición humana y lógica algorítmica.

📼 ¿Trama?
La evolución de una conversación que comienza natural y termina en territorio desconocido.

Producción experimental IA-ismo LAB`
  },
  'placeholder-1': {
    title: "🎬 Título:",
    content: `"Proyecto en Desarrollo"

🧠 ¿Qué es?
Un proyecto audiovisual actualmente en fase de producción y revisión académica.

🎨 VISUAL:
Por determinar - en proceso creativo.

🧩 ESCENAS EJEMPLO:
Material en desarrollo.

📼 ¿Trama?
En construcción.

IA-ismo LAB - Próximamente`
  },
  'placeholder-2': {
    title: "🎬 Título:",
    content: `"Investigación en Curso"

🧠 ¿Qué es?
Documentación visual de investigaciones académicas actualmente en desarrollo.

🎨 VISUAL:
Por determinar - investigación activa.

🧩 ESCENAS EJEMPLO:
Material de investigación.

📼 ¿Trama?
En proceso de documentación.

IA-ismo LAB - Investigación`
  }
};

// Funcionalidad simple para mostrar detalles
document.addEventListener('DOMContentLoaded', function() {
  // Añadir eventos a los enlaces de prompt
  document.querySelectorAll('.prompt-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const videoId = this.getAttribute('data-video-id');
      const details = videoDetails[videoId];
      
      if (details) {
        // Crear o actualizar el elemento de detalles
        let detailDiv = this.parentNode.querySelector('.video-details');
        if (!detailDiv) {
          detailDiv = document.createElement('div');
          detailDiv.className = 'video-details';
          this.parentNode.appendChild(detailDiv);
        }
        
        // Toggle visibility
        if (detailDiv.style.display === 'block') {
          detailDiv.style.display = 'none';
          this.textContent = 'Prompt';
        } else {
          detailDiv.innerHTML = `<h3>${details.title}</h3><pre>${details.content}</pre>`;
          detailDiv.style.display = 'block';
          this.textContent = 'Ocultar Prompt';
        }
      }
    });
  });
});
</script>

---

## Sobre el archivo visual

Los videos de IA-ismo LAB documentan investigaciones, experimentos metodológicos y análisis críticos en formato audiovisual. Material académico orientado al pensamiento riguroso, no a la divulgación masiva.

**Formato:** MP4, descargables, sin DRM, sin trackers.  
**Licencia:** Creative Commons BY-NC-SA 4.0  
**Duración:** Variable según complejidad del objeto de estudio.

Consultas técnicas: [contacto@iaismo.com](mailto:contacto@iaismo.com).
