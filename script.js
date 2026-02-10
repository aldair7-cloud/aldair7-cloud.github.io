// Animación simple al cargar
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 10px 20px rgba(0,0,0,.4)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = 'none';
  });
});
const skills = document.querySelectorAll('.skill');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const skill = entry.target;
    const percent = Number(skill.dataset.percent);

    const bar = skill.querySelector('.bar div');
    const circle = skill.querySelector('.circle');
    const text = skill.querySelector('.percent-text');

    // 1. Animamos la barra (usamos setTimeout para que empiece justo después)
    setTimeout(() => {
        bar.style.width = percent + '%';
    }, 100);

    // 2. Animamos el número y el círculo
    let current = 0;
    // Calculamos la velocidad según el porcentaje para que todos terminen casi igual
    const stepTime = Math.max(10, 1500 / percent); 
    
    const timer = setInterval(() => {
      if (current >= percent) {
        clearInterval(timer);
        return;
      }
      current++;
      circle.style.setProperty('--percent', current);
      text.textContent = current + '%';
text.classList.add('pop');
setTimeout(() => text.classList.remove('pop'), 120);

    }, stepTime);

    observer.unobserve(skill);
  });
}, { threshold: 0.2 }); // Bajamos el threshold para que inicie antes

skills.forEach(skill => observer.observe(skill));

/* TECNICO DE AUDIO*/


const audioCard = document.getElementById('card-audio');
const modalAudio = document.getElementById('modal-audio');
const closeAudio = document.getElementById('close-audio');

document.querySelector('#card-audio .glow-link').addEventListener('click', (e) => {
  e.preventDefault();

  modalAudio.classList.remove('show');      // ← importante: resetea animación
  modalAudio.style.display = 'flex';

  setTimeout(() => {
    modalAudio.classList.add('show');
  }, 10);
});

closeAudio.addEventListener('click', () => {
  modalAudio.classList.remove('show');
  setTimeout(() => modalAudio.style.display = 'none', 250);
});

/* DESARROLLO WEB*/



const webCard = document.getElementById('card-web');
const modalweb = document.getElementById('modal-web');
const closeweb = document.getElementById('close-web');

document.querySelector('#card-web .glow-link').addEventListener('click', (e) => {
  e.preventDefault();
  modalweb.style.display = 'flex';
  requestAnimationFrame(() => modalweb.classList.add('show'));
});


closeweb.addEventListener('click', () => {
  modalweb.classList.remove('show');
  setTimeout(() => modalweb.style.display = 'none', 250);
});

/* SOPORTE TECNICO */

const soporteCard = document.getElementById('card-soporte');
const modalsoporte = document.getElementById('modal-soporte');
const closesoporte = document.getElementById('close-soporte');

document.querySelector('#card-soporte .glow-link').addEventListener('click', (e) => {
  e.preventDefault();

  modalsoporte.classList.remove('show');   // ← reset de animación (igual que Audio)
  modalsoporte.style.display = 'flex';

  setTimeout(() => {
    modalsoporte.classList.add('show');
  }, 10);
});

closesoporte.addEventListener('click', () => {
  modalsoporte.classList.remove('show');
  setTimeout(() => modalsoporte.style.display = 'none', 250);
});

/* EMBEBIDOS */

const embebidosCard = document.getElementById('card-embebidos');
const modalembebidos = document.getElementById('modal-embebidos');
const closeembebidos = document.getElementById('close-embebidos');

document.querySelector('#card-embebidos .glow-link').addEventListener('click', (e) => {
  e.preventDefault();

  modalembebidos.classList.remove('show');   // ← reset de animación (igual que Audio)
  modalembebidos.style.display = 'flex';

  setTimeout(() => {
    modalembebidos.classList.add('show');
  }, 10);
});

closeembebidos.addEventListener('click', () => {
  modalembebidos.classList.remove('show');
  setTimeout(() => modalembebidos.style.display = 'none', 250);
});

/* ADAPTABILIDAD */

const adaCard = document.getElementById('card-ada');
const modalada = document.getElementById('modal-ada');
const closeada = document.getElementById('close-ada');

document.querySelector('#card-ada .glow-link').addEventListener('click', (e) => {
  e.preventDefault();

  modalada.classList.remove('show');   // ← reset de animación (igual que Audio)
  modalada.style.display = 'flex';

  setTimeout(() => {
    modalada.classList.add('show');
  }, 10);
});

closeada.addEventListener('click', () => {
  modalada.classList.remove('show');
  setTimeout(() => modalada.style.display = 'none', 250);
});

/* INGLÉS */

const ingCard = document.getElementById('card-ing');
const modaling = document.getElementById('modal-ing');
const closeing = document.getElementById('close-ing');

document.querySelector('#card-ing .glow-link').addEventListener('click', (e) => {
  e.preventDefault();

  modaling.classList.remove('show');   // ← reset de animación (igual que Audio)
  modaling.style.display = 'flex';

  setTimeout(() => {
    modaling.classList.add('show');
  }, 10);
});

closeing.addEventListener('click', () => {
  modaling.classList.remove('show');
  setTimeout(() => modaling.style.display = 'none', 250);
});

/* ILUMINACIÓN */

const luzCard = document.getElementById('card-luz');
const modalluz = document.getElementById('modal-luz');
const closeluz = document.getElementById('close-luz');

document.querySelector('#card-luz .glow-link').addEventListener('click', (e) => {
  e.preventDefault();

  modalluz.classList.remove('show');   // ← reset de animación (igual que Audio)
  modalluz.style.display = 'flex';

  setTimeout(() => {
    modalluz.classList.add('show');
  }, 10);
});

closeluz.addEventListener('click', () => {
  modalluz.classList.remove('show');
  setTimeout(() => modalluz.style.display = 'none', 250);
});

/* DESK*/

const deskCard = document.getElementById('card-desk');
const modaldesk = document.getElementById('modal-desk');
const closedesk = document.getElementById('close-desk');

document.querySelector('#card-desk .glow-link').addEventListener('click', (e) => {
  e.preventDefault();

  modaldesk.classList.remove('show');   // ← reset de animación (igual que Audio)
  modaldesk.style.display = 'flex';

  setTimeout(() => {
    modaldesk.classList.add('show');
  }, 10);
});

closedesk.addEventListener('click', () => {
  modaldesk.classList.remove('show');
  setTimeout(() => modaldesk.style.display = 'none', 250);
});

/* COMUNICACIÓN */

const comCard = document.getElementById('card-com');
const modalcom = document.getElementById('modal-com');
const closecom = document.getElementById('close-com');

document.querySelector('#card-com .glow-link').addEventListener('click', (e) => {
  e.preventDefault();

  modalcom.classList.remove('show');   // ← reset de animación (igual que Audio)
  modalcom.style.display = 'flex';

  setTimeout(() => {
    modalcom.classList.add('show');
  }, 10);
});

closecom.addEventListener('click', () => {
  modalcom.classList.remove('show');
  setTimeout(() => modalcom.style.display = 'none', 250);
});

