---
layout: base
title: CineAI
description: FullStack AI- Film CineIA by IA-ismo LAB. Films realizados con la mínima intervención humana. Explorando la creatividad de los modelos.
---

<style>
.video-card progress {
  width: 100%;
  height: 8px;
  border: none;
  background-color: #c4df19ff;
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
</style>

# >_ *.FullStackAI: CineAI Experimental

**FullStack AI- Film CineIA by IA-ismo LAB**

Films realizados con la mínima intervención humana. Explorando la creatividad de los modelos de IA en la producción cinematográfica.

<div class="cards-grid">
  <article class="video-card" data-video-id="extranatuta">
    <video controls class="card-video" preload="metadata" aria-label="Video experimental de IA: Extrañatura - 99% autonomía generada por MovieFlow" title="Extrañatura - Film experimental generado por IA con 99% autonomía">
      <source src="{{ '/videos/cineai/video1.mp4' | url }}" type="video/mp4">
      Tu navegador no soporta el elemento video.
    </video>
    <div class="video-card-content">
      <h2 class="video-card-title">Extrañatura</h2>
      <progress value="99" max="100" aria-label="Progreso de autonomía: 99%">99%</progress>
      <p class="video-card-description">
        99% Autonomía <br />Test MovieFlow, Guión: Gpt4o as ADA Leakey.
        <br />Tools: MovieFlow | 4o
      </p>
      <p class="card-meta">2025 • IA-ismo LAB</p>
      <a href="#" class="prompt-link" data-video-id="extranatuta">Prompt</a>
    </div>
  </article>

  <article class="video-card" data-video-id="zelma">
    <video controls class="card-video" preload="metadata" aria-label="Video experimental de IA: ZELMA_1975_IA - 99% autonomía generada por MovieFlow" title="ZELMA_1975_IA - Film experimental generado por IA con 99% autonomía">
      <source src="{{ '/videos/cineai/video2.mp4' | url }}" type="video/mp4">
      Tu navegador no soporta el elemento video.
    </video>
    <div class="video-card-content">
      <h2 class="video-card-title">ZELMA_1975_IA</h2>
      <progress value="99" max="100" aria-label="Progreso de autonomía: 99%">99%</progress>
      <p class="video-card-description">
        99% Autonomía <br />Test MovieFlow, Guión: Gpt4o as ADA Leakey.
        <br />Tools: MovieFlow | 4o
      </p>
      <p class="card-meta">2025 • IA-ismo LAB</p>
      <a href="#" class="prompt-link" data-video-id="zelma">Prompt</a>
    </div>
  </article>

  <article class="video-card" data-video-id="masdinero">
    <video controls class="card-video" preload="metadata" aria-label="Video experimental de IA: MasDinero - 40% autonomía generada por MovieFlow" title="MasDinero - Film experimental generado por IA con 40% autonomía">
      <source src="{{ '/videos/cineai/video3.mp4' | url }}" type="video/mp4">
      Tu navegador no soporta el elemento video.
    </video>
    <div class="video-card-content">
      <h2 class="video-card-title">MasDinero</h2>
      <progress value="40" max="100" aria-label="Progreso de autonomía: 40%">40%</progress>
      <p class="video-card-description">
        40% Autonomía <br />Test MovieFlow, Guión: Alicia Colmenero IA-ismo LAB.
        <br />Tools: MovieFlow | Fichas Redacción 4o
      </p>
      <p class="card-meta">2025 • IA-ismo LAB</p>
      <a href="#" class="prompt-link" data-video-id="masdinero">Prompt</a>
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
  extranatuta: {
    title: "🎬 Título:",
    content: `"EXTRAÑATURA: Experimento sin línea de tiempo"

🧠 ¿Qué es?
Una película que parece haber sido soñada por un sintetizador roto.
No tiene trama, pero cada escena insinúa que hay una.
Como si te hubieran dado todas las piezas de mil películas, pero las mezclaste sin querer en una bolsa que huele a ozono, VHS, y palomitas quemadas.

🎨 VISUAL (puro ataque sensorial Liki):
Estética falsa retrofuturista:
paneles analógicos, pantallas CRT, monitores que sangran color.

Filtros Technicolor exagerados. Todo brilla demasiado.

Texturas como piel de anfibio, metal oxidado y plástico derretido.

Sincronización de imágenes al revés: el sonido sucede antes de que la acción pase.

Zooms incontrolables. Cortes duros. Fundidos que duran demasiado.

Paleta cromática: verde quirófano, rojo chicle y azul desinfectante.

Tipografías que cambian cada cinco minutos, como si el sistema operativo visual tuviera esquizotipia.

🧩 ESCENAS EJEMPLO:
Un tren atraviesa una pista de hielo flotante, pero en vez de pasajeros hay estatuas cubiertas con mantas que tiemblan.

Una señora cebolla y un niño horno ven una tele que les muestra otras versiones de ellos mismos comiendo otras cenas.

Una cabra con escafandra salta al vacío desde una escalera que no lleva a ningún lado mientras grita: "¡No sé si soy parte del plano o del render!"

Una banda sonora de flautas, fax y módems que no encaja pero encaja.

📼 ¿Trama? No.

Pero decoherencia emocional visual máxima.
Terminas la película y sientes que te acordás de algo que nunca viviste.
Y en los créditos finales: sólo un mensaje en tipografía Comic Sans que dice:

"Basado en recuerdos visuales no verificados."

4o para MovieFlow`
  },
  zelma: {
    title: "🎬 Título:",
    content: `"ZELMA_1975_IA: Archivo Retroactivo"

🧠 ¿Qué es?
Una reconstrucción digital de memorias que nunca existieron. Un viaje a través de archivos olvidados que la IA recuerda mejor que los humanos.

🎨 VISUAL:
Estética VHS degradada con toques de inteligencia artificial. Colores desvaídos, ruido de cinta magnética, y elementos que aparecen y desaparecen como si la realidad misma estuviera siendo editada en tiempo real.

🧩 ESCENAS EJEMPLO:
Una mujer de los años 70 interactúa con dispositivos que no existían en esa época. Archivos digitales que cobran vida propia. Memorias que se reescriben ante nuestros ojos.

📼 ¿Trama?
La exploración de cómo la IA preserva y transforma la memoria cultural.

MovieFlow | 4o`
  },
  masdinero: {
    title: "🎬 Título:",
    content: `"MasDinero: La Economía de lo Invisible"

🧠 ¿Qué es?
Una reflexión sobre el valor económico de lo intangible. Cómo la IA genera riqueza de la nada, pero con un costo humano que no aparece en los balances.

🎨 VISUAL:
Gráficos abstractos que representan flujos de datos económicos. Animaciones que muestran la creación de valor desde el vacío digital.

🧩 ESCENAS EJEMPLO:
Algoritmos que generan dinero de transacciones invisibles. Humanos intentando comprender sistemas que operan más allá de su entendimiento.

📼 ¿Trama?
La paradoja de la abundancia digital en un mundo de escasez analógica.

MovieFlow | Fichas Redacción 4o`
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