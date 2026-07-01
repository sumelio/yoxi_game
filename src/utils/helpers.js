/**
 * Utility helper functions for the YOXI Game
 */

/**
 * Generates a random integer between min (inclusive) and max (exclusive)
 * @param {number} min - Minimum value (inclusive)
 * @param {number} max - Maximum value (exclusive)
 * @returns {number} Random integer
 */
export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * Plays an audio element by ID safely
 * @param {string} audioId - The ID of the audio element
 * @returns {boolean} True if audio was played, false otherwise
 */
export const playAudio = (audioId) => {
  const audioElement = document.getElementById(audioId);
  if (audioElement) {
    audioElement.play().catch(error => {
      console.warn(`Could not play audio ${audioId}:`, error);
    });
    return true;
  }
  return false;
};

/**
 * Pauses an audio element by ID safely
 * @param {string} audioId - The ID of the audio element
 * @returns {boolean} True if audio was paused, false otherwise
 */
export const pauseAudio = (audioId) => {
  const audioElement = document.getElementById(audioId);
  if (audioElement) {
    audioElement.pause();
    return true;
  }
  return false;
};

/**
 * Shuffles an array using Fisher-Yates algorithm
 * @param {Array} array - Array to shuffle
 * @returns {Array} Shuffled array
 */
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Filters word examples by starting vowel
 * @param {Array} words - Array of word objects
 * @param {string} vowel - The vowel to filter by
 * @returns {Array} Filtered array of words
 */
export const filterWordsByVowel = (words, vowel) => {
  return words.filter(word => word.vowel === vowel);
};
