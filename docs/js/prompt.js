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

// Funcionalidad simple para mostrar detalles
document.addEventListener('DOMContentLoaded', function() {
  // Añadir eventos a los enlaces de prompt
  document.querySelectorAll('.prompt-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const videoId = this.getAttribute('data-video-id');
      const details = videoDetails[videoId];

      if (details) {
        // Buscar si ya existe una tarjeta de detalles para este video
        let detailCard = document.querySelector('.video-detail-card[data-video-id="' + videoId + '"]');

        if (detailCard) {
          // Si existe, toggle visibility
          detailCard.style.display = detailCard.style.display === 'none' ? 'block' : 'none';
          this.textContent = detailCard.style.display === 'none' ? 'Ver Prompt' : 'Ocultar Prompt';
        } else {
          // Si no existe, crear nueva tarjeta de detalles
          const cardsGrid = document.querySelector('.cards-grid');
          if (cardsGrid) {
            detailCard = document.createElement('article');
            detailCard.className = 'video-detail-card';
            detailCard.setAttribute('data-video-id', videoId);
            detailCard.innerHTML = '<div class="video-detail-content"><h3>' + details.title + '</h3><pre>' + details.content + '</pre></div>';

            // Insertar después del cards-grid para que ocupe todo el ancho
            cardsGrid.insertAdjacentElement('afterend', detailCard);

            this.textContent = 'Ocultar Prompt';
          }
        }
      }
    });
  });
});