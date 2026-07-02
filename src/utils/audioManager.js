/**
 * Audio Manager centralizado para YOXI Game
 *
 * Reemplaza el patrón `document.getElementById(id).play()` que requería
 * renderizar elementos <audio> en el DOM (y provocaba IDs duplicados
 * como "win"/"fail" cuando varios componentes se montaban a la vez).
 *
 * Usa instancias de HTMLAudioElement cacheadas por src, de forma que
 * cada sonido se decodifica una sola vez.
 */

const audioCache = new Map();

/**
 * Obtiene (o crea) la instancia de Audio para un src dado.
 * @param {string} src - URL del archivo de audio (import de webpack)
 * @returns {HTMLAudioElement|null}
 */
const getAudio = src => {
  if (!src) return null;
  let audio = audioCache.get(src);
  if (!audio) {
    audio = new Audio(src);
    audio.preload = 'auto';
    audioCache.set(src, audio);
  }
  return audio;
};

/**
 * Reproduce un sonido desde el inicio.
 * Silencia el error de autoplay (el navegador bloquea audio sin gesto
 * del usuario) para no romper la app.
 * @param {string} src - URL del archivo de audio
 * @returns {boolean} true si se intentó reproducir
 */
export const playSound = src => {
  const audio = getAudio(src);
  if (!audio) return false;
  try {
    audio.currentTime = 0;
  } catch (e) {
    // Ignorar: algunos navegadores lanzan si aún no hay metadata
  }
  const promise = audio.play();
  if (promise && typeof promise.catch === 'function') {
    promise.catch(error => {
      if (process.env.NODE_ENV === 'development') {
        console.warn('No se pudo reproducir el audio:', error.message);
      }
    });
  }
  return true;
};

/**
 * Detiene un sonido y lo reinicia.
 * @param {string} src - URL del archivo de audio
 */
export const stopSound = src => {
  const audio = audioCache.get(src);
  if (audio) {
    audio.pause();
    try {
      audio.currentTime = 0;
    } catch (e) {
      // Ignorar
    }
  }
};

/**
 * Precarga una lista de sonidos (útil al montar una página de juego).
 * @param {string[]} sources - URLs de audio a precargar
 */
export const preloadSounds = (sources = []) => {
  sources.forEach(getAudio);
};
