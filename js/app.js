/**
 * CONTROLADOR PRINCIPAL DEL PORTAFOLIO RETRO DE MINECRAFT
 * Manejo de renderizado, reproductor de video modal, filtros y búsqueda.
 * (El código YAML interno se mantiene confidencial y protegido contra robos)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Referencias DOM
  const projectsGrid = document.getElementById('projectsGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('projectSearch');
  
  // Modal de Detalles / Video
  const projectModal = document.getElementById('projectModal');
  const btnCloseModal = document.getElementById('btnCloseModal');
  const modalVideoContainer = document.getElementById('modalVideoContainer');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalHighlightsList = document.getElementById('modalHighlightsList');
  const modalTagsContainer = document.getElementById('modalTagsContainer');

  // Controles HUD
  const btnSoundToggle = document.getElementById('btnSoundToggle');
  const soundIcon = document.getElementById('soundIcon');
  const btnCrtToggle = document.getElementById('btnCrtToggle');

  // Toast
  const retroToast = document.getElementById('retroToast');

  // Estado
  let activeFilter = 'all';
  let searchQuery = '';

  // =========================================================================
  // 1. GESTIÓN DE AUDIO & EFECTO CRT
  // =========================================================================
  function updateSoundUI() {
    const enabled = window.retroAudio.isEnabled();
    soundIcon.textContent = enabled ? '🔊' : '🔇';
    btnSoundToggle.title = enabled ? 'Sonido activado (clic para silenciar)' : 'Sonido silenciado (clic para activar)';
  }
  updateSoundUI();

  btnSoundToggle.addEventListener('click', () => {
    const isNowOn = window.retroAudio.toggle();
    updateSoundUI();
    showToast(isNowOn ? 'SFX ACTIVADO [8-BIT]' : 'SFX SILENCIADO');
  });

  // CRT Toggle
  const crtSaved = localStorage.getItem('retro_crt_enabled');
  if (crtSaved === 'false') {
    document.body.classList.remove('crt-enabled');
  }

  btnCrtToggle.addEventListener('click', () => {
    window.retroAudio.playClick();
    document.body.classList.toggle('crt-enabled');
    const isCrt = document.body.classList.contains('crt-enabled');
    localStorage.setItem('retro_crt_enabled', isCrt ? 'true' : 'false');
    showToast(isCrt ? 'MONITOR CRT: ACTIVADO' : 'MONITOR CRT: DESACTIVADO');
  });

  // =========================================================================
  // 2. PARSER INTELIGENTE DE ENLACES DE VIDEO (YOUTUBE, MP4, STREAMABLE)
  // =========================================================================
  function parseVideoEmbed(videoType, src, poster) {
    if (!src) {
      return '<div class="no-video-notice">No se especificó URL de video</div>';
    }

    // YouTube URLs: youtube.com/watch?v=ID, youtu.be/ID, shorts/ID, embed/ID
    if (videoType === 'youtube' || src.includes('youtube.com') || src.includes('youtu.be')) {
      let videoId = '';
      if (src.includes('embed/')) {
        videoId = src.split('embed/')[1].split('?')[0];
      } else if (src.includes('v=')) {
        videoId = src.split('v=')[1].split('&')[0];
      } else if (src.includes('youtu.be/')) {
        videoId = src.split('youtu.be/')[1].split('?')[0];
      } else if (src.includes('shorts/')) {
        videoId = src.split('shorts/')[1].split('?')[0];
      } else {
        videoId = src.trim();
      }

      return `<iframe 
        src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1" 
        title="Video Showcase" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>`;
    }

    // Archivo de video directo local o remoto (.mp4, .webm)
    if (videoType === 'mp4' || src.endsWith('.mp4') || src.endsWith('.webm')) {
      return `<video controls autoplay class="video-player" ${poster ? `poster="${poster}"` : ''}>
        <source src="${src}" type="video/mp4">
        Tu navegador no soporta la reproducción de video HTML5.
      </video>`;
    }

    // Streamable o iframe genérico
    if (src.includes('streamable.com')) {
      const streamId = src.split('/').filter(Boolean).pop();
      return `<iframe src="https://streamable.com/e/${streamId}?autoplay=1" allowfullscreen></iframe>`;
    }

    // Fallback: intentar cargarlo en un iframe
    return `<iframe src="${src}" allowfullscreen></iframe>`;
  }

  // Formateador de texto enriquecido (soporte para **negrita** y saltos de línea)
  function formatRichText(text) {
    if (!text) return '';
    let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    formatted = formatted.replace(/\n\n/g, '<br><br>').replace(/\n/g, '<br>');
    return formatted;
  }

  // =========================================================================
  // 3. RENDERIZADO DE TARJETAS DE PROYECTOS
  // =========================================================================
  function renderProjects() {
    const list = window.MINECRAFT_PROJECTS || [];

    const filtered = list.filter(item => {
      const matchesCategory = activeFilter === 'all' || 
        item.category === activeFilter || 
        (Array.isArray(item.category) && item.category.includes(activeFilter)) ||
        (typeof item.category === 'string' && item.category.includes(activeFilter));
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.tags.some(tag => tag.toLowerCase().includes(q)) ||
        (item.highlights && item.highlights.some(h => h.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });

    projectsGrid.innerHTML = '';

    if (filtered.length === 0) {
      projectsGrid.innerHTML = `
        <div class="no-results-box retro-box" style="grid-column: 1 / -1; padding: 3rem; text-align: center;">
          <p style="font-family: var(--font-pixel); font-size: 0.9rem; color: var(--neon-red); margin-bottom: 0.8rem;">
            [!] NINGÚN PROYECTO COINCIDE CON LA BÚSQUEDA
          </p>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Prueba con otra palabra clave o selecciona "TODOS".</p>
        </div>
      `;
      return;
    }

    filtered.forEach(project => {
      const card = document.createElement('article');
      card.className = 'project-card retro-box';
      card.setAttribute('data-id', project.id);

      // Icono según categoría
      let catColor = 'var(--neon-green)';
      if (project.category === 'conditionalevents') catColor = 'var(--neon-gold)';
      if (project.category === 'coretools') catColor = 'var(--neon-cyan)';

      // Screenshot real del video o miniatura temática
      let videoBase = '';
      if (project.videoSrc) {
        const parts = project.videoSrc.split('/');
        const filename = parts[parts.length - 1];
        videoBase = filename.replace(/\.[^/.]+$/, '');
      }
      const videoFrameImg = videoBase ? `assets/images/frame-${videoBase}.jpg` : '';
      const fallbackThumb = project.thumbnail || 'assets/images/thumb-default.svg';

      // Captura nítida en el contenedor principal y pequeño icono en el recuadro inset de la esquina
      const mediaPreview = `
        <img 
          src="${videoFrameImg || fallbackThumb}" 
          alt="${project.title}" 
          class="project-thumb-img" 
          loading="lazy" 
          onerror="this.src='${fallbackThumb}'"
        >
        <div class="mini-video-inset" title="Miniatura temática">
          <img src="${fallbackThumb}" alt="Preview" onerror="this.src='assets/images/thumb-default.svg'">
        </div>
      `;

      card.innerHTML = `
        <div class="project-thumb-container">
          ${mediaPreview}
          <div class="video-badge">
            <span class="rec-dot"></span> VIDEO HD
          </div>
          <div class="project-category-badge" style="border-color: ${catColor}; color: ${catColor};">
            ${project.categoryLabel || project.category.toUpperCase()}
          </div>
          <div class="play-overlay-btn" title="Reproducir Showcase">▶</div>
        </div>

        <div class="project-card-body">
          <h3 class="project-card-title">${project.title}</h3>
          <div class="project-card-desc">${formatRichText(project.description)}</div>
          
          <div class="project-card-tags">
            ${project.tags.map(tag => `<span class="project-tag">#${tag}</span>`).join('')}
          </div>
        </div>
      `;

      // Efecto hover retro y clic para reproducir en lightbox modal
      card.addEventListener('mouseenter', () => {
        window.retroAudio.playHover();
      });
      card.addEventListener('click', () => openProjectModal(project));

      projectsGrid.appendChild(card);
    });
  }

  // =========================================================================
  // 4. MODAL DETALLE / VIDEO LIGHTBOX (SIN EXPONER CÓDIGO)
  // =========================================================================
  function openProjectModal(project) {
    window.retroAudio.playModalOpen();

    modalTitle.textContent = project.title;
    modalDescription.innerHTML = formatRichText(project.description);

    // Highlights técnicos
    modalHighlightsList.innerHTML = '';
    if (project.highlights && project.highlights.length) {
      project.highlights.forEach(h => {
        const li = document.createElement('li');
        li.textContent = h;
        modalHighlightsList.appendChild(li);
      });
    }

    // Tags
    modalTagsContainer.innerHTML = project.tags.map(t => `<span class="mini-tag">#${t}</span>`).join('');

    // Inyectar Video con poster nítido
    let videoBase = '';
    if (project.videoSrc) {
      const parts = project.videoSrc.split('/');
      const filename = parts[parts.length - 1];
      videoBase = filename.replace(/\.[^/.]+$/, '');
    }
    const posterImg = videoBase ? `assets/images/frame-${videoBase}.jpg` : (project.thumbnail || '');
    modalVideoContainer.innerHTML = parseVideoEmbed(project.videoType, project.videoSrc, posterImg);

    // Abrir modal
    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    window.retroAudio.playClick();
    projectModal.classList.remove('open');
    projectModal.setAttribute('aria-hidden', 'true');
    // Detener video vaciando el contenedor
    modalVideoContainer.innerHTML = '';
    document.body.style.overflow = '';
  }

  btnCloseModal.addEventListener('click', closeModal);
  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (projectModal.classList.contains('open')) closeModal();
    }
  });

  // =========================================================================
  // 5. FILTROS Y BÚSQUEDA
  // =========================================================================
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      window.retroAudio.playClick();
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter');
      renderProjects();
    });
  });

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderProjects();
  });

  // Botón Copiar Discord / Textos
  document.querySelectorAll('.btn-copy[data-copy]').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-copy');
      navigator.clipboard.writeText(text).then(() => {
        window.retroAudio.playSuccess();
        showToast(`¡COPIADO: ${text}!`);
      });
    });
  });

  // =========================================================================
  // 6. TOAST NOTIFICATIONS
  // =========================================================================
  let toastTimer = null;
  function showToast(msg) {
    if (!retroToast) return;
    retroToast.textContent = msg;
    retroToast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      retroToast.classList.remove('show');
    }, 2800);
  }

  // Render inicial
  renderProjects();
});
