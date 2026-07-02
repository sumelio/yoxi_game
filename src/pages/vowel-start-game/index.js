import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./index.css";
import ButtonBack from "../../components/button-back";
import ButtonNext from "../../components/button-next";
import ModalVowel from "../../components/modal-vowel";
import Vowel from "../../components/vowel";
import arrowNext from "../../assets/image/arrow-next.png";
import yoxi from "../../assets/image/yoxi.png";

import {
  VOWELS,
  WORD_EXAMPLES,
  GAME_START_AUDIO
} from "../../config/vowelGameData";
import { getRandomInt } from "../../utils/helpers";
import { playSound } from "../../utils/audioManager";

const OPTIONS_COUNT = 5;

class VowelStartGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVowel: null,
      currentModelVowel: [],
      show: false
    };
    this.timeouts = [];

    this.handleOnClickYoxi = this.handleOnClickYoxi.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    this.startGame(params && params.vowel ? params.vowel : null);
  }

  componentDidUpdate(prevProps) {
    const prevVowel = prevProps.match.params.vowel;
    const currentVowel = this.props.match.params.vowel;
    if (currentVowel && currentVowel !== prevVowel) {
      this.startGame(currentVowel);
    }
  }

  componentWillUnmount() {
    this.clearTimeouts();
  }

  addTimeout(fn, delay) {
    this.timeouts.push(setTimeout(fn, delay));
  }

  clearTimeouts() {
    this.timeouts.forEach(clearTimeout);
    this.timeouts = [];
  }

  startGame(vowel) {
    this.clearTimeouts();
    this.setState({ show: false });

    const currentVowel = vowel ? this.getVowelByStart(vowel) : this.getNext();

    // Cinco espacios vacíos para las opciones del juego
    const currentModelVowel = Array.from({ length: OPTIONS_COUNT }, () => ({
      idle: true
    }));

    // Colocar las palabras ganadoras en posiciones aleatorias
    let winningWords = WORD_EXAMPLES.filter(
      item => item.vowel === currentVowel.start
    ).map(item => ({ ...item, used: false, idle: false }));

    while (winningWords.filter(item => item.used === false).length > 0) {
      const win = winningWords[getRandomInt(0, winningWords.length)];
      const index = getRandomInt(0, OPTIONS_COUNT);
      if (currentModelVowel[index].idle) {
        currentModelVowel[index] = win;
        win.used = true;
        winningWords = winningWords.filter(item => item.used === false);
      }
    }

    // Rellenar los espacios restantes con palabras incorrectas
    const failWords = WORD_EXAMPLES.filter(
      item => item.vowel !== currentVowel.start
    ).map(item => ({ ...item, idle: true }));

    while (currentModelVowel.filter(item => item && item.idle).length >= 1) {
      currentModelVowel
        .filter(item => item && item.idle)
        .forEach(slot => {
          const fail = failWords[getRandomInt(0, failWords.length)];
          if (fail.idle) {
            fail.idle = false;
            slot.idle = false;
            slot.image = fail.image;
            slot.audio = fail.audio;
            slot.alt = fail.alt;
            slot.text = fail.text;
            slot.firstVowel = fail.firstVowel;
            slot.vowel = fail.vowel;
          }
        });
    }

    this.setState({
      currentVowel: currentVowel,
      currentModelVowel: currentModelVowel
    });

    const gameAudio = GAME_START_AUDIO[currentVowel.start];
    if (gameAudio) {
      this.addTimeout(() => {
        playSound(gameAudio);
      }, 1000);

      this.addTimeout(() => {
        playSound(gameAudio);
        this.setState({ show: true });
      }, 6000);
    }
  }

  handleOnClickYoxi() {
    const { currentVowel } = this.state;
    if (currentVowel && GAME_START_AUDIO[currentVowel.start]) {
      playSound(GAME_START_AUDIO[currentVowel.start]);
    }
  }

  getNext() {
    return VOWELS[getRandomInt(0, VOWELS.length)];
  }

  getVowelByStart(vowel) {
    return VOWELS.find(item => item.start === vowel);
  }

  paintVowel(v, c, f) {
    return (
      <div key={v.start} onClick={f}>
        <Vowel
          className={v.start !== c.start ? "filter" : ""}
          vowel={v.img}
          id={v.start}
          vowelSound={v.vowelSound}
          size="100px"
        />
      </div>
    );
  }

  render() {
    if (!this.state.currentVowel) {
      return (
        <React.Fragment>
          <div className="content-menu vowel-start">
            <ButtonBack go="/vowel-start" />
            <ButtonNext go="/vowel-start-game" />
          </div>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <div className="content-menu vowel-start-time">
          <h1>JUGAR VOCAL INICIAL</h1>
        </div>
        <div className="start-game-title">
          <div className="two">
            {this.state.show && (
              <img
                onClick={this.handleOnClickYoxi}
                src={yoxi}
                className="yoxi-vowel-start"
                alt="Yoxi"
              />
            )}
            {VOWELS.map(v =>
              this.paintVowel(v, this.state.currentVowel, () =>
                this.startGame(v.start)
              )
            )}
          </div>
        </div>

        {this.state.show && (
          <div className="start-game-options">
            {this.state.currentModelVowel.map(element => (
              <ModalVowel
                key={element.alt}
                id={element.image}
                image={element.image}
                audio={element.audio}
                alt={element.alt}
                text={element.text}
                firstVowel={element.firstVowel}
                correct={this.state.currentVowel.start}
                vowel={element.vowel}
              />
            ))}
          </div>
        )}
        {!this.state.show && (
          <img
            onClick={this.handleOnClickYoxi}
            src={yoxi}
            className="yoxi-vowel-start"
            alt="Yoxi"
          />
        )}

        <div className="content-menu vowel-start">
          <ButtonBack go="/vowel-start" />
          <Link to="/vowel-start-game/u">
            <img src={arrowNext} className="arrowNext" alt="Siguiente" />
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default VowelStartGame;
