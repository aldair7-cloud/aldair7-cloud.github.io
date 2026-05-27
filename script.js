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

    setTimeout(() => { bar.style.width = percent + '%'; }, 100);

    let current = 0;
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
}, { threshold: 0.2 });

skills.forEach(skill => observer.observe(skill));


/* TECNICO DE AUDIO*/
const audioCard = document.getElementById('card-audio');
const modalAudio = document.getElementById('modal-audio');
const closeAudio = document.getElementById('close-audio');

document.querySelector('#card-audio .glow-link').addEventListener('click', (e) => {
  e.preventDefault();
  modalAudio.classList.remove('show');
  modalAudio.style.display = 'flex';
  setTimeout(() => { modalAudio.classList.add('show'); }, 10);
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
  modalsoporte.classList.remove('show');
  modalsoporte.style.display = 'flex';
  setTimeout(() => { modalsoporte.classList.add('show'); }, 10);
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
  modalembebidos.classList.remove('show');
  modalembebidos.style.display = 'flex';
  setTimeout(() => { modalembebidos.classList.add('show'); }, 10);
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
  modalada.classList.remove('show');
  modalada.style.display = 'flex';
  setTimeout(() => { modalada.classList.add('show'); }, 10);
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
  modaling.classList.remove('show');
  modaling.style.display = 'flex';
  setTimeout(() => { modaling.classList.add('show'); }, 10);
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
  modalluz.classList.remove('show');
  modalluz.style.display = 'flex';
  setTimeout(() => { modalluz.classList.add('show'); }, 10);
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
  modaldesk.classList.remove('show');
  modaldesk.style.display = 'flex';
  setTimeout(() => { modaldesk.classList.add('show'); }, 10);
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
  modalcom.classList.remove('show');
  modalcom.style.display = 'flex';
  setTimeout(() => { modalcom.classList.add('show'); }, 10);
});
closecom.addEventListener('click', () => {
  modalcom.classList.remove('show');
  setTimeout(() => modalcom.style.display = 'none', 250);
});

// ==========================================
// MODO CLARO Y SCROLL
// ==========================================
const themeToggle = document.getElementById('theme-toggle');
if(themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  });
}

document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetSelector = this.getAttribute('href');
    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, 
        behavior: 'smooth'
      });
    }
  });
});

// ==========================================
// DICCIONARIO Y LÓGICA DE TRADUCCIÓN GLOBAL
// ==========================================
const langToggle = document.getElementById('lang-toggle');
let currentLang = 'es';

const translations = {
  es: {
    inicio: "Inicio", experiencia: "Experiencia Laboral", acerca: "Acerca de mí",
    heroTitle: "INGENIERO EN COMUNICACIONES Y ELECTRONICA",
    heroDesc: "Ingeniero en Comunicaciones y Electrónica (CUCEI – Universidad de Guadalajara), con experiencia en instalación, operación y supervisión de sistemas de audio e iluminación profesional. Interesado en la integración de tecnología, automatización y control mediante sistemas embebidos. Destacado por su capacidad para resolver problemas técnicos, adaptarse a entornos dinámicos y liderar equipos en proyectos técnicos y de producción.",
    sidebarPuesto: "Ingeniero En Comunicaciones y Electronica",
    res: "<strong>Residencia:</strong> 🇲🇽 México, Jalisco", ciu: "<strong>Ciudad: 📍</strong> Zapopan", eda: "<strong>Edad: 👷‍♂️</strong> 28",
    skSop: "Soporte Técnico", skEmb: "Sistemas Embebidos", skSO: "Sistemas Operativos Windows / Linux / Mac",
    btnCv: "Descargar CV", st1: "Años de experiencia", st2: "Proyectos", st3: "Habilidades",
    expTitle: "Mi Experiencia", more: "Saber más →", close: "Cerrar",

    // Exterior de las Cards
    cWebT: "DESAROLLO WEB", cWebD: "Creación de landing page.",
    cSopT: "Soporte Técnico", cSopD: "Apoyo remoto o presencial",
    cAudT: "Tecnico de audio", cAudD: "Operador de consolas de audio y mezcla en vivo.",
    cEmbT: "Sistemas embebidos", cEmbD: "Programación de microcontroladores y montaje de circuito.",
    cAdaT: "Adaptabilidad", cAdaD: "Facilidad para integrarme a nuevos entornos de trabajo.",
    cIngT: "Inglés", cIngD: "Nivel de inglés A2/B1 en mejora continua.",
    cLuzT: "Técnico en iluminación", cLuzD: "Diseñador y operador de luz.",
    cDeskT: "Help desk", cDeskD: "Resolucion de tickets en plataformas.",
    cComT: "Comunicación", cComD: "Grandes habilidades de comunicacion acertiva.",

    // INTERIOR DE LOS MODALES
    mW_H2: "Desarrollo web – Proyectos personales (Autodidacta)", mW_H3_0: "Tareas principales", mW_P_0: "Desarrollo de páginas web tipo landing page y sitios informativos como proyectos personales, enfocados en la presentación profesional de información y portafolios técnicos.", mW_P_1: "Aprendizaje autodidacta de HTML, CSS y JavaScript, aplicando diseño responsivo, animaciones básicas y mejoras visuales para una mejor experiencia de usuario.", mW_H3_1: "Enfoque y mejora continua", mW_P_2: "Implementación de buenas prácticas de maquetación y organización de estilos, con enfoque en mejorar la estética, legibilidad y estructura de cada proyecto.",
    mA_H2: "Técnico de audio – Experiencia laboral", mA_H3_0: "Tareas principales", mA_P_0: "Instalación, operación y supervisión de sistemas de audio profesional para eventos en vivo, asegurando una correcta distribución de señal y calidad sonora en distintos espacios.", mA_P_1: "Configuración de consolas, microfonía y monitoreo de audio, además de pruebas técnicas previas para garantizar un funcionamiento estable durante las presentaciones.", mA_H3_1: "Soporte en eventos", mA_P_2: "Soporte técnico en tiempo real, resolución inmediata de fallas de audio durante eventos, montajes escénicos y presentaciones en vivo.",
    mS_H2: "Soporte técnico – Señalización digital", mS_H3_0: "Instalación y configuración", mS_P_0: "Brindé soporte técnico remoto y presencial para la instalación, configuración y mantenimiento de pantallas profesionales de señalización digital en entornos comerciales y corporativos.", mS_H3_1: "Atención a incidencias", mS_P_1: "Realicé diagnóstico y solución de fallas de conexión, reproducción de contenido y comunicación con la plataforma de gestión, asegurando la correcta operación del sistema.",
    mE_H2: "Sistemas embebidos – Proyectos universitarios", mE_H3_0: "Desarrollo de prototipos", mE_P_0: "Desarrollo de proyectos universitarios basados en microcontroladores, enfocados en la automatización básica, control de dispositivos y pruebas de concepto funcionales.", mE_H3_1: "Integración de hardware", mE_P_1: "Integración de sensores, actuadores y módulos de comunicación para la implementación de sistemas electrónicos orientados a la validación de ideas y demostraciones técnicas.",
    mAd_H2: "Adaptabilidad – Entornos técnicos", mAd_H3_0: "Aprendizaje rápido", mAd_P_0: "Capacidad para aprender nuevas herramientas, plataformas y tecnologías de manera autónoma, adaptándome a distintos entornos de trabajo y requerimientos técnicos.", mAd_H3_1: "Trabajo en entornos cambiantes", mAd_P_1: "Experiencia adaptándome a cambios en procesos, tiempos de entrega y requerimientos del proyecto, manteniendo una actitud proactiva ante nuevos retos técnicos.",
    mI_H2: "Inglés – Nivel A2/B1", mI_H3_0: "Comunicación técnica básica", mI_P_0: "Capacidad para comprender y comunicar información técnica básica en inglés, incluyendo instrucciones, manuales simples y comunicación funcional con equipos o clientes internacionales.", mI_H3_1: "Mejora continua", mI_P_1: "Nivel A2/B1 en proceso de mejora continua mediante estudio autodidacta y práctica constante, enfocado en fortalecer la comprensión auditiva, lectura y expresión oral en contextos técnicos.",
    mL_H2: "Iluminación escénica – Experiencia en eventos", mL_H3_0: "Operación de luminarias", mL_P_0: "Participación en la instalación y operación de sistemas de iluminación escénica para eventos en vivo, adaptando la iluminación de acuerdo a las necesidades técnicas y artísticas de cada producción.", mL_H3_1: "Montaje y verificación", mL_P_1: "Apoyo en el montaje y desmontaje de estructuras de iluminación, así como en la verificación del correcto funcionamiento del equipo antes y después de cada evento.",
    mD_H2: "Help Desk – Gestión de incidencias", mD_H3_0: "Atención de tickets", mD_P_0: "Gestión y seguimiento de incidencias mediante plataformas de soporte, asegurando tiempos de respuesta adecuados y correcta documentación de cada caso.", mD_H3_1: "Soporte al usuario", mD_P_1: "Atención a usuarios finales para la resolución de problemas técnicos, validación de fallas, orientación básica y canalización de incidencias cuando es necesario.",
    mC_H2: "Comunicación – Habilidades interpersonales", mC_H3_0: "Comunicación con clientes y equipos", mC_P_0: "Comunicación clara y efectiva con clientes, proveedores y equipos técnicos para la correcta comprensión de requerimientos, seguimiento de incidencias y coordinación de actividades.", mC_H3_1: "Trabajo en equipo", mC_P_1: "Capacidad para colaborar con diferentes áreas, compartir información técnica de forma comprensible y mantener una comunicación respetuosa en entornos de trabajo colaborativos."
  },
  en: {
    inicio: "Home", experiencia: "Work Experience", acerca: "About Me",
    heroTitle: "COMMUNICATIONS AND ELECTRONICS ENGINEER",
    heroDesc: "Communications and Electronics Engineer (CUCEI - University of Guadalajara), with experience in installation, operation, and supervision of professional audio and lighting systems. Interested in technology integration, automation, and control through embedded systems. Noted for technical problem-solving, adaptation to dynamic environments, and team leadership.",
    sidebarPuesto: "Communications and Electronics Engineer",
    res: "<strong>Residence:</strong> 🇲🇽 Mexico, Jalisco", ciu: "<strong>City: 📍</strong> Zapopan", eda: "<strong>Age: 👷‍♂️</strong> 28",
    skSop: "Technical Support", skEmb: "Embedded Systems", skSO: "Operating Systems Windows / Linux / Mac",
    btnCv: "Download CV", st1: "Years of experience", st2: "Projects", st3: "Skills",
    expTitle: "My Experience", more: "Learn more →", close: "Close",

    // Exterior de las Cards
    cWebT: "WEB DEVELOPMENT", cWebD: "Landing page creation.",
    cSopT: "Technical Support", cSopD: "Remote or on-site support.",
    cAudT: "Audio Technician", cAudD: "Audio console operator and live mixing.",
    cEmbT: "Embedded Systems", cEmbD: "Microcontroller programming and circuit assembly.",
    cAdaT: "Adaptability", cAdaD: "Ease of integration into new work environments.",
    cIngT: "English", cIngD: "A2/B1 English level, continuously improving.",
    cLuzT: "Lighting Technician", cLuzD: "Lighting designer and operator.",
    cDeskT: "Help desk", cDeskD: "Ticket resolution on platforms.",
    cComT: "Communication", cComD: "Strong assertive communication skills.",

    // INTERIOR DE LOS MODALES
    mW_H2: "Web Development – Personal Projects (Self-taught)", mW_H3_0: "Main Tasks", mW_P_0: "Development of landing pages and informative websites as personal projects, focused on the professional presentation of information and technical portfolios.", mW_P_1: "Self-taught learning of HTML, CSS, and JavaScript, applying responsive design, basic animations, and visual improvements for a better user experience.", mW_H3_1: "Focus and Continuous Improvement", mW_P_2: "Implementation of good layout practices and style organization, focusing on improving the aesthetics, readability, and structure of each project.",
    mA_H2: "Audio Technician – Work Experience", mA_H3_0: "Main Tasks", mA_P_0: "Installation, operation, and supervision of professional audio systems for live events, ensuring proper signal distribution and sound quality in different spaces.", mA_P_1: "Configuration of consoles, microphones, and audio monitoring, as well as prior technical tests to ensure stable operation during presentations.", mA_H3_1: "Event Support", mA_P_2: "Real-time technical support, immediate resolution of audio failures during events, stage setups, and live presentations.",
    mS_H2: "Technical Support – Digital Signage", mS_H3_0: "Installation and Configuration", mS_P_0: "Provided remote and on-site technical support for the installation, configuration, and maintenance of professional digital signage screens in commercial and corporate environments.", mS_H3_1: "Incident Management", mS_P_1: "Performed diagnosis and resolution of connection failures, content playback, and communication with the management platform, ensuring the correct operation of the system.",
    mE_H2: "Embedded Systems – University Projects", mE_H3_0: "Prototype Development", mE_P_0: "Development of microcontroller-based university projects, focused on basic automation, device control, and functional proof of concepts.", mE_H3_1: "Hardware Integration", mE_P_1: "Integration of sensors, actuators, and communication modules for the implementation of electronic systems aimed at validating ideas and technical demonstrations.",
    mAd_H2: "Adaptability – Technical Environments", mAd_H3_0: "Fast Learning", mAd_P_0: "Ability to independently learn new tools, platforms, and technologies, adapting to different work environments and technical requirements.", mAd_H3_1: "Working in Changing Environments", mAd_P_1: "Experience adapting to changes in processes, delivery times, and project requirements, maintaining a proactive attitude towards new technical challenges.",
    mI_H2: "English – A2/B1 Level", mI_H3_0: "Basic Technical Communication", mI_P_0: "Ability to understand and communicate basic technical information in English, including instructions, simple manuals, and functional communication with international teams or clients.", mI_H3_1: "Continuous Improvement", mI_P_1: "A2/B1 level in continuous improvement through self-study and constant practice, focused on strengthening listening comprehension, reading, and oral expression in technical contexts.",
    mL_H2: "Stage Lighting – Event Experience", mL_H3_0: "Lighting Operation", mL_P_0: "Participation in the installation and operation of stage lighting systems for live events, adapting the lighting according to the technical and artistic needs of each production.", mL_H3_1: "Setup and Verification", mL_P_1: "Support in the assembly and disassembly of lighting structures, as well as in verifying the correct operation of the equipment before and after each event.",
    mD_H2: "Help Desk – Incident Management", mD_H3_0: "Ticket Handling", mD_P_0: "Management and tracking of incidents through support platforms, ensuring adequate response times and correct documentation of each case.", mD_H3_1: "User Support", mD_P_1: "End-user support for technical problem resolution, fault validation, basic guidance, and incident routing when necessary.",
    mC_H2: "Communication – Interpersonal Skills", mC_H3_0: "Communication with Clients and Teams", mC_P_0: "Clear and effective communication with clients, suppliers, and technical teams for the correct understanding of requirements, incident tracking, and coordination of activities.", mC_H3_1: "Teamwork", mC_P_1: "Ability to collaborate with different areas, share technical information in an understandable way, and maintain respectful communication in collaborative work environments."
  }
};

if(langToggle) {
  // Inicializamos el texto del botón en 'ES' desde el inicio para que concuerde visualmente
  langToggle.textContent = 'ES';

  langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    
    // Ahora el botón mostrará el idioma ACTUAL
    langToggle.textContent = currentLang === 'es' ? 'ES' : 'EN';

    // Traducción General (Exterior)
    document.querySelectorAll('.nav-links a').forEach(link => {
      if(link.dataset.section) link.textContent = translations[currentLang][link.dataset.section];
    });

    document.querySelector('.hero h1').textContent = translations[currentLang].heroTitle;
    document.querySelector('.hero p').textContent = translations[currentLang].heroDesc;
    document.querySelector('.sidebar .profile p').textContent = translations[currentLang].sidebarPuesto;
    
    const infoP = document.querySelectorAll('.info p');
    if(infoP.length >= 3) {
        infoP[0].innerHTML = translations[currentLang].res;
        infoP[1].innerHTML = translations[currentLang].ciu;
        infoP[2].innerHTML = translations[currentLang].eda;
    }
    
    // Traducción precisa de los nombres de habilidades (skills)
    const skillSpans = document.querySelectorAll('.skill > span');
    if(skillSpans.length >= 7) {
        skillSpans[4].textContent = translations[currentLang].skSop;
        skillSpans[5].textContent = translations[currentLang].skEmb;
        skillSpans[6].textContent = translations[currentLang].skSO;
    }
    
    document.querySelector('.btn.primary').textContent = translations[currentLang].btnCv;

    const statsP = document.querySelectorAll('.stats p');
    if(statsP.length >= 3) {
        statsP[0].textContent = translations[currentLang].st1;
        statsP[1].textContent = translations[currentLang].st2;
        statsP[2].textContent = translations[currentLang].st3;
    }

    document.querySelector('.services h2').textContent = translations[currentLang].expTitle;

    document.querySelector('#card-web h3').textContent = translations[currentLang].cWebT;
    document.querySelector('#card-web p').textContent = translations[currentLang].cWebD;
    document.querySelector('#card-soporte h3').textContent = translations[currentLang].cSopT;
    document.querySelector('#card-soporte p').textContent = translations[currentLang].cSopD;
    document.querySelector('#card-audio h3').textContent = translations[currentLang].cAudT;
    document.querySelector('#card-audio p').textContent = translations[currentLang].cAudD;
    document.querySelector('#card-embebidos h3').textContent = translations[currentLang].cEmbT;
    document.querySelector('#card-embebidos p').textContent = translations[currentLang].cEmbD;
    document.querySelector('#card-ada h3').textContent = translations[currentLang].cAdaT;
    document.querySelector('#card-ada p').textContent = translations[currentLang].cAdaD;
    document.querySelector('#card-ing h3').textContent = translations[currentLang].cIngT;
    document.querySelector('#card-ing p').textContent = translations[currentLang].cIngD;
    document.querySelector('#card-luz h3').textContent = translations[currentLang].cLuzT;
    document.querySelector('#card-luz p').textContent = translations[currentLang].cLuzD;
    document.querySelector('#card-desk h3').textContent = translations[currentLang].cDeskT;
    document.querySelector('#card-desk p').textContent = translations[currentLang].cDeskD;
    document.querySelector('#card-com h3').textContent = translations[currentLang].cComT;
    document.querySelector('#card-com p').textContent = translations[currentLang].cComD;

    document.querySelectorAll('.glow-link').forEach(btn => btn.textContent = translations[currentLang].more);
    document.querySelectorAll('.modal-content button').forEach(btn => btn.textContent = translations[currentLang].close);

    // FUNCIÓN INTELIGENTE PARA TRADUCIR EL INTERIOR DE LOS MODALES
    function traducirModal(modalId, prefix) {
      const m = document.getElementById(modalId);
      if(!m) return;
      
      // Traducir H2
      if(m.querySelector('h2') && translations[currentLang][prefix + '_H2']) {
        m.querySelector('h2').textContent = translations[currentLang][prefix + '_H2'];
      }
      // Traducir H3
      const h3s = m.querySelectorAll('h3');
      h3s.forEach((h3, i) => {
        if(translations[currentLang][prefix + '_H3_' + i]) {
          h3.textContent = translations[currentLang][prefix + '_H3_' + i];
        }
      });
      // Traducir Párrafos (P)
      const ps = m.querySelectorAll('.modal-content > p');
      ps.forEach((p, i) => {
        if(translations[currentLang][prefix + '_P_' + i]) {
          p.textContent = translations[currentLang][prefix + '_P_' + i];
        }
      });
    }

    // Ejecutar la traducción para cada ventana
    traducirModal('modal-web', 'mW');
    traducirModal('modal-audio', 'mA');
    traducirModal('modal-soporte', 'mS');
    traducirModal('modal-embebidos', 'mE');
    traducirModal('modal-ada', 'mAd');
    traducirModal('modal-ing', 'mI');
    traducirModal('modal-luz', 'mL');
    traducirModal('modal-desk', 'mD');
    traducirModal('modal-com', 'mC');

  });
}