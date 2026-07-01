/**
 * Configuration file for Vowel Game Data
 * Contains all vowel images, sounds and word examples used throughout the game
 */

import a from "../assets/image/a.png";
import Asound from "../assets/sound/Aa.mp3";
import e from "../assets/image/e.png";
import Esound from "../assets/sound/Ee.mp3";
import i from "../assets/image/i.png";
import Isound from "../assets/sound/Ii.mp3";
import o from "../assets/image/o.png";
import Osound from "../assets/sound/Oo.mp3";
import u from "../assets/image/u.png";
import Usound from "../assets/sound/Uu.mp3";

import RainBow from "../assets/image/rainbow.png";
import RainBowAudio from "../assets/sound/rainbow.mp3";
import textArcoiris from "../assets/image/text-arcoiris.png";
import firstA from "../assets/image/red-a.png";

import Magnet from "../assets/image/magnet.png";
import MagentAudio from "../assets/sound/magnet.mp3";
import textIman from "../assets/image/text-iman.png";
import firstI from "../assets/image/red-i.png";

import Bear from "../assets/image/bear.png";
import BearAudio from "../assets/sound/bear.mp4";
import textBear from "../assets/image/text-bear.png";
import firstO from "../assets/image/red-o.png";

import Elephan from "../assets/image/elephan.png";
import ElephanAudio from "../assets/sound/elephan.mp3";
import textElephan from "../assets/image/text-elephan.png";
import firstE from "../assets/image/red-e.png";

import Grapes from "../assets/image/grapes.png";
import GrapesAudio from "../assets/sound/grapes.mp3";
import textGrapes from "../assets/image/text-grapes.png";
import firstU from "../assets/image/red-u.png";

import Uniform from "../assets/image/uniform.png";
import UniformAudio from "../assets/sound/uniform.mp3";
import textUniform from "../assets/image/text-uniform.png";

import Sheep from "../assets/image/sheep.png";
import SheepAudio from "../assets/sound/sheep.mp3";
import textSheep from "../assets/image/text-sheep.png";
import firstOup from "../assets/image/red-o-up.png";

import Indian from "../assets/image/indian.jpeg";
import IndianAudio from "../assets/sound/indian.mp3";
import textIndian from "../assets/image/text-Indian.png";

import Star from "../assets/image/star.jpeg";
import StarAudio from "../assets/sound/star.mp3";
import textStar from "../assets/image/text-star.png";

import Igloo from "../assets/image/igloo.png";
import IglooAudio from "../assets/sound/igloo.mp3";
import textIgloo from "../assets/image/text-gloo.png";
import firstIup from "../assets/image/red-i-up.png";

import Ambulance from "../assets/image/ambulance.png";
import AmbulanceAudio from "../assets/sound/ambulance.mp3";
import textAmbulance from "../assets/image/text-ambulance.png";

import Hedgehog from "../assets/image/hedgehog.jpeg";
import HedgehogAudio from "../assets/sound/hedgehog.mp3";
import textHedgehog from "../assets/image/text-hedgehog.png";

import Bee from "../assets/image/bee.png";
import BeeAudio from "../assets/sound/bee.mp3";
import textBee from "../assets/image/text-bee.png";
import firstAup from "../assets/image/red-a-up.png";

import Iguana from "../assets/image/iguana.png";
import IguanaAudio from "../assets/sound/iguana.mp3";
import textIguana from "../assets/image/text-iguana.png";

import GameStartA from "../assets/sound/game-start-a.mp3";
import GameStartE from "../assets/sound/game-start-e.mp3";
import GameStartI from "../assets/sound/game-start-i.mp3";
import GameStartO from "../assets/sound/game-start-o.mp3";
import GameStartU from "../assets/sound/game-start-u.mp3";

/**
 * Vowel data configuration
 * Each vowel has an image, sound and audio ID
 */
export const VOWELS = [
  {
    img: a,
    vowelSound: Asound,
    sound: "VowelStartGameAudioA",
    start: "a"
  },
  {
    img: e,
    vowelSound: Esound,
    sound: "VowelStartGameAudioE",
    start: "e"
  },
  {
    img: i,
    vowelSound: Isound,
    sound: "VowelStartGameAudioI",
    start: "i"
  },
  {
    img: o,
    vowelSound: Osound,
    sound: "VowelStartGameAudioO",
    start: "o"
  },
  {
    img: u,
    vowelSound: Usound,
    sound: "VowelStartGameAudioU",
    start: "u"
  }
];

/**
 * Word examples that start with different vowels
 * Used in the "Initial Vowel" game mode
 */
export const WORD_EXAMPLES = [
  {
    image: RainBow,
    audio: RainBowAudio,
    alt: "Arcoíris",
    text: textArcoiris,
    firstVowel: firstA,
    vowel: "a"
  },
  {
    image: Magnet,
    audio: MagentAudio,
    alt: "Iman",
    text: textIman,
    firstVowel: firstI,
    vowel: "i"
  },
  {
    image: Bear,
    audio: BearAudio,
    alt: "Oso",
    text: textBear,
    firstVowel: firstO,
    vowel: "o"
  },
  {
    image: Grapes,
    audio: GrapesAudio,
    alt: "Uvas",
    text: textGrapes,
    firstVowel: firstU,
    vowel: "u"
  },
  {
    image: Elephan,
    audio: ElephanAudio,
    alt: "Elefante",
    text: textElephan,
    firstVowel: firstE,
    vowel: "e"
  },
  {
    image: Uniform,
    audio: UniformAudio,
    alt: "Uniforme",
    text: textUniform,
    firstVowel: firstU,
    vowel: "u"
  },
  {
    image: Sheep,
    audio: SheepAudio,
    alt: "Oveja",
    text: textSheep,
    firstVowel: firstOup,
    vowel: "o"
  },
  {
    image: Indian,
    audio: IndianAudio,
    alt: "Indio",
    text: textIndian,
    firstVowel: firstI,
    vowel: "i"
  },
  {
    image: Star,
    audio: StarAudio,
    alt: "Estrella",
    text: textStar,
    firstVowel: firstE,
    vowel: "e"
  },
  {
    image: Igloo,
    audio: IglooAudio,
    alt: "Iglu",
    text: textIgloo,
    firstVowel: firstIup,
    vowel: "i"
  },
  {
    image: Ambulance,
    audio: AmbulanceAudio,
    alt: "Ambulancia",
    text: textAmbulance,
    firstVowel: firstA,
    vowel: "a"
  },
  {
    image: Hedgehog,
    audio: HedgehogAudio,
    alt: "Erizo",
    text: textHedgehog,
    firstVowel: firstE,
    vowel: "e"
  },
  {
    image: Bee,
    audio: BeeAudio,
    alt: "Aveja",
    text: textBee,
    firstVowel: firstAup,
    vowel: "a"
  },
  {
    image: Iguana,
    audio: IguanaAudio,
    alt: "Iguana",
    text: textIguana,
    firstVowel: firstIup,
    vowel: "i"
  }
];

/**
 * Game start audio files for each vowel
 */
export const GAME_START_AUDIO = {
  a: GameStartA,
  e: GameStartE,
  i: GameStartI,
  o: GameStartO,
  u: GameStartU
};
