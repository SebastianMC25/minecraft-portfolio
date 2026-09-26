/**
 * SINTETIZADOR DE EFECTOS DE SONIDO RETRO 8-BIT
 * Utiliza Web Audio API pura para generar audio retro dinámico sin cargar archivos externos.
 */

class RetroAudio {
  constructor() {
    this.audioCtx = null;
    this.enabled = localStorage.getItem('retro_sfx_enabled') !== 'false';
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem('retro_sfx_enabled', this.enabled ? 'true' : 'false');
    if (this.enabled) {
      this.init();
      this.playSuccess();
    }
    return this.enabled;
  }

  isEnabled() {
    return this.enabled;
  }

  playTone(freq, type = 'square', duration = 0.08, gainVal = 0.08) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {
      // Audio bloqueado por el navegador hasta la primera interacción
    }
  }

  playClick() {
    this.playTone(320, 'square', 0.04, 0.06);
  }

  playHover() {
    this.playTone(640, 'triangle', 0.03, 0.02);
  }

  playModalOpen() {
    if (!this.enabled) return;
    try {
      this.init();
      setTimeout(() => this.playTone(440, 'square', 0.06, 0.05), 0);
      setTimeout(() => this.playTone(660, 'square', 0.06, 0.05), 60);
      setTimeout(() => this.playTone(880, 'square', 0.1, 0.05), 120);
    } catch (e) {}
  }

  playSuccess() {
    if (!this.enabled) return;
    try {
      this.init();
      setTimeout(() => this.playTone(523.25, 'triangle', 0.08, 0.06), 0);
      setTimeout(() => this.playTone(659.25, 'triangle', 0.08, 0.06), 80);
      setTimeout(() => this.playTone(783.99, 'triangle', 0.14, 0.06), 160);
    } catch (e) {}
  }
}

window.retroAudio = new RetroAudio();
