/**
 * MOTOR DE PARTÍCULAS RETRO PIXELADAS (ESTILO MINECRAFT)
 * Dibuja chispas y partículas cuadradas flotantes con colores esmeralda, redstone y portal.
 */

(function () {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const colors = [
    'rgba(85, 255, 85, 0.4)',   // Esmeralda
    'rgba(85, 255, 255, 0.4)',  // Diamante
    'rgba(255, 170, 0, 0.35)',  // Oro
    'rgba(197, 134, 192, 0.35)' // Amatista / Portal
  ];

  const particles = [];
  const PARTICLE_COUNT = 32;

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 10;
      this.size = Math.floor(Math.random() * 3 + 2) * 2; // Tamaño pixelado par (4px, 6px, 8px)
      this.speedY = -(Math.random() * 0.6 + 0.3);
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.alpha = Math.random() * 0.6 + 0.2;
    }

    update() {
      this.y += this.speedY;
      this.x += this.speedX;

      if (this.y < -20 || this.x < -20 || this.x > width + 20) {
        this.reset();
      }
    }

    draw() {
      ctx.fillStyle = this.color;
      // Dibuja un cuadrado rígido (pixel-art) sin antialiasing
      ctx.fillRect(Math.floor(this.x), Math.floor(this.y), this.size, this.size);
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    requestAnimationFrame(animate);
  }

  animate();
})();
