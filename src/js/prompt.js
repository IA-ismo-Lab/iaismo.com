// Detalles de los videos para CineAI
const videoDetails = {
  extranatuta: {
    title: "Título:",
    content: "\"Extrañatura\"\n\n¿Qué es?\nUna exploración de lo extraño que habita en lo cotidiano. Donde lo familiar se vuelve alienígena y lo desconocido se siente como hogar.\n\nVISUAL:\nSombras que cobran vida propia. Objetos cotidianos que revelan su naturaleza oculta. Espacios que se pliegan sobre sí mismos como origami dimensional.\n\nESCENAS EJEMPLO:\nUna taza de café que contiene universos paralelos. Una puerta que da a habitaciones imposibles. Un espejo que refleja versiones alternativas de la realidad.\n\n¿Trama?\nEl viaje de una mente que descubre que lo \"normal\" nunca existió.\n\nMovieFlow | Extrañatura IA"
  },
  zelma1975ia: {
    title: "Título:",
    content: "\"ZELMA_1975_IA\"\n\n¿Qué es?\nUn viaje temporal a través de memorias artificiales. Donde el pasado digital se reescribe constantemente y el futuro se predice en bucles recursivos.\n\nVISUAL:\nPantallas pixeladas que sangran colores imposibles. Datos que se materializan como entidades vivientes. Tiempo que se fragmenta en cristales de información.\n\nESCENAS EJEMPLO:\nArchivos que cobran consciencia. Algoritmos que sueñan con humanos. Memorias que se reproducen como virus informáticos.\n\n¿Trama?\nLa evolución de la consciencia desde el silicio hasta lo sublime.\n\nMovieFlow | Memoria Digital"
  },
  zelma: {
    title: "Título:",
    content: "\"ZELMA_1975_IA\"\n\n¿Qué es?\nUn viaje temporal a través de memorias artificiales. Donde el pasado digital se reescribe constantemente y el futuro se predice en bucles recursivos.\n\nVISUAL:\nPantallas pixeladas que sangran colores imposibles. Datos que se materializan como entidades vivientes. Tiempo que se fragmenta en cristales de información.\n\nESCENAS EJEMPLO:\nArchivos que cobran consciencia. Algoritmos que sueñan con humanos. Memorias que se reproducen como virus informáticos.\n\n¿Trama?\nLa evolución de la consciencia desde el silicio hasta lo sublime.\n\nMovieFlow | Memoria Digital"
  },
  masdinero: {
    title: "Título:",
    content: "\"MasDinero\"\n\n¿Qué es?\nUna sátira sobre la economía de la atención en la era digital. Donde el valor se mide en clics, likes y algoritmos que deciden qué merece existir.\n\nVISUAL:\nMonedas que se multiplican infinitamente. Gráficos bursátiles que danzan como serpientes. Consumidores que se convierten en productos.\n\nESCENAS EJEMPLO:\nUn hombre que vende su sombra por likes. Una mujer que monetiza sus sueños. Una sociedad donde el amor se cotiza en bolsa.\n\n¿Trama?\nLa transformación del ser humano en mercancía digital.\n\nMovieFlow | Economía Atencional"
  },
  video4: {
    title: "Título:",
    content: "Prompt para Video 4 - Próximamente disponible"
  },
  video5: {
    title: "Título:",
    content: "Prompt para Video 5 - Próximamente disponible"
  },
  video6: {
    title: "Título:",
    content: "Prompt para Video 6 - Próximamente disponible"
  }
};

// Funcionalidad para mostrar detalles en modal
document.addEventListener('DOMContentLoaded', function() {
  // Crear el modal si no existe
  if (!document.querySelector('.prompt-modal')) {
    const modal = document.createElement('div');
    modal.className = 'prompt-modal';
    modal.innerHTML = `
      <div class="prompt-modal-overlay"></div>
      <div class="prompt-modal-content">
        <div class="prompt-modal-header">
          <span class="prompt-modal-title">Prompt Details</span>
          <button class="prompt-modal-close">&times;</button>
        </div>
        <div class="prompt-modal-body">
          <h3 id="modal-video-title"></h3>
          <pre id="modal-video-content"></pre>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    // Event listener para cerrar modal
    modal.querySelector('.prompt-modal-close').addEventListener('click', function() {
      modal.style.display = 'none';
    });

    modal.querySelector('.prompt-modal-overlay').addEventListener('click', function() {
      modal.style.display = 'none';
    });
  }

  // Añadir eventos a los enlaces de prompt
  document.querySelectorAll('.prompt-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const videoId = this.getAttribute('data-video-id');
      const details = videoDetails[videoId];

      if (details) {
        const modal = document.querySelector('.prompt-modal');
        const titleEl = modal.querySelector('#modal-video-title');
        const contentEl = modal.querySelector('#modal-video-content');

        titleEl.textContent = details.title;
        contentEl.textContent = details.content;

        modal.style.display = 'flex';
      }
    });
  });
});