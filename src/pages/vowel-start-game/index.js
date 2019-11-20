import React, { Component } from "react";

import VowelStartAudio from "../../assets/sound/vowel-first.mp3";
import GameStartA from "../../assets/sound/game-start-a.mp3";
import GameStartE from "../../assets/sound/game-start-e.mp3";
import GameStartI from "../../assets/sound/game-start-i.mp3";
import GameStartO from "../../assets/sound/game-start-o.mp3";
import GameStartU from "../../assets/sound/game-start-u.mp3";
import "./index.css";
import ButtonBack from "../../components/button-back";
import Vowel from "../../components/vowel";
import a from "../../assets/image/a.png";
import e from "../../assets/image/e.png";
import i from "../../assets/image/i.png";
import o from "../../assets/image/o.png";
import u from "../../assets/image/u.png";


import RainBow from "../../assets/image/rainbow.png";
import RainBowAudio from "../../assets/sound/rainbow.mp3";
import textArcoiris from "../../assets/image/text-arcoiris.png";
import firstA from "../../assets/image/red-a.png";

import Magnet from "../../assets/image/magnet.png";
import MagentAudio from "../../assets/sound/magnet.mp3";
import textIman from "../../assets/image/text-iman.png";
import firstI from "../../assets/image/red-i.png";

import Bear from "../../assets/image/bear.png";
import BearAudio from "../../assets/sound/bear.mp4";
import textBear from "../../assets/image/text-bear.png";
import firstO from "../../assets/image/red-o.png";

import Elephan from "../../assets/image/elephan.png";
import ElephanAudio from "../../assets/sound/elephan.mp3";
import textElephan from "../../assets/image/text-elephan.png";
import firstE from "../../assets/image/red-e.png";

import yoxi from "../../assets/image/yoxi.png";
import ButtonNext from "../../components/button-next";
import ModalVowel from "../../components/modal-vowel";

class VowelStartGame extends Component {
  state = {
    vowels: [ 
        {img: a, sound: 'VowelStartGameAudioA'}, 
        {img: e, sound: 'VowelStartGameAudioE'},
        {img: i, sound: 'VowelStartGameAudioI'},
        {img: o, sound: 'VowelStartGameAudioO'},
        {img: u, sound: 'VowelStartGameAudioU'}
      ]
  };

  constructor() {
    super();
    this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
    this.getNext = this.getNext.bind(this);
  }
  componentDidMount() {}

  handleOnMouseOver = event => {
    document.getElementById("VowelStartAudioId").play();
  };

  getNext() {
    const vowelCurrent = this.state.vowels[this.getRandomInt(0, 4)];
    console.log("vowelCurrent", vowelCurrent);
    return vowelCurrent;
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  render() {
    const currentVowel = this.getNext();
    if (currentVowel && currentVowel.sound) {
      debugger;
      setTimeout(() => {
        document.getElementById(currentVowel.sound).play();
      }, 500)
      
    }
    return (
      <React.Fragment>
        <div className="start-game-title">
          {currentVowel && <Vowel vowel={currentVowel.img} />}
        </div>

        <ModalVowel
            id={RainBow}
            image={RainBow}
            audio={RainBowAudio}
            alt="Arcoíris"
            text={textArcoiris}
            firstVowel={firstA}
          />
          <ModalVowel
            id={Magnet}
            image={Magnet}
            audio={MagentAudio}
            alt="Iman"
            text={textIman}
            firstVowel={firstI}
          />

          <ModalVowel
            id={Bear}
            image={Bear}
            audio={BearAudio}
            alt="Oso"
            text={textBear}
            firstVowel={firstO}
          />

          <ModalVowel
            id={Elephan}
            image={Elephan}
            audio={ElephanAudio}
            alt="Elefante"
            text={textElephan}
            firstVowel={firstE}
          />
                  <div className="content-menu vowel-start">
          <ButtonBack go="/vowel-start" />
          <ButtonNext go="/vowel-start-game" />
        </div>
        <audio id="VowelStartAudioId" name="VowelStartAudioAId">
          <source src={VowelStartAudio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <audio id="VowelStartGameAudioA" name="VowelStartGameAudioA">
          <source src={GameStartA} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <audio id="VowelStartGameAudioE" name="VowelStartGameAudioE">
          <source src={GameStartE} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <audio id="VowelStartGameAudioI" name="VowelStartGameAudioI">
          <source src={GameStartI} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <audio id="VowelStartGameAudioO" name="VowelStartGameAudioO">
          <source src={GameStartO} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <audio id="VowelStartGameAudioU" name="VowelStartGameAudioU">
          <source src={GameStartU} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </React.Fragment>
    );
  }
}

export default VowelStartGame;
