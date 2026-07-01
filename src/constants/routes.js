/**
 * Application route constants
 * Centralized location for all route paths
 */

export const ROUTES = {
  HOME: "/",
  MENU_GAME: "/menu-game",
  VOWEL_START: "/vowel-start",
  VOWEL_START_GAME: "/vowel-start-game",
  VOWEL_START_GAME_WITH_VOWEL: "/vowel-start-game/:vowel",
  VOWEL_FINAL: "/vowel-final",
  RHYME_WORD: "/rhyme-Word"
};

/**
 * Generate dynamic route with parameter
 * @param {string} vowel - The vowel parameter
 * @returns {string} Route path with vowel
 */
export const getVowelStartGameRoute = (vowel) => {
  return `/vowel-start-game/${vowel}`;
};
