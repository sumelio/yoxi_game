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
import Asound from "../../assets/sound/Aa.mp3";
import e from "../../assets/image/e.png";
import Esound from "../../assets/sound/Ee.mp3";
import i from "../../assets/image/i.png";
import Isound from "../../assets/sound/Ii.mp3";
import o from "../../assets/image/o.png";
import Osound from "../../assets/sound/Oo.mp3";
import u from "../../assets/image/u.png";
import Usound from "../../assets/sound/Uu.mp3";
import yoxi from "../../assets/image/yoxi.png";


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

import Grapes from "../../assets/image/grapes.png";
import GrapesAudio from "../../assets/sound/grapes.mp3";
import textGrapes from "../../assets/image/text-grapes.png";
import firstU from "../../assets/image/red-u.png";


import Uniform from "../../assets/image/uniform.png";
import UniformAudio from "../../assets/sound/uniform.mp3";
import textUniform from "../../assets/image/text-uniform.png";

import Sheep from "../../assets/image/sheep.png";
import SheepAudio from "../../assets/sound/sheep.mp3";
import textSheep from "../../assets/image/text-sheep.png";
import firstOup from "../../assets/image/red-o-up.png";

import Indian from "../../assets/image/indian.jpeg";
import IndianAudio from "../../assets/sound/indian.mp3";
import textIndian from "../../assets/image/text-Indian.png";

import Star from "../../assets/image/star.jpeg";
import StarAudio from "../../assets/sound/star.mp3";
import textStar from "../../assets/image/text-star.png";

import Igloo from "../../assets/image/igloo.png";
import IglooAudio from "../../assets/sound/igloo.mp3";
import textIgloo from "../../assets/image/text-gloo.png";
import firstIup from "../../assets/image/red-i-up.png";


import Ambulance from "../../assets/image/ambulance.png";
import AmbulanceAudio from "../../assets/sound/ambulance.mp3";
import textAmbulance from "../../assets/image/text-ambulance.png";

import Hedgehog from "../../assets/image/hedgehog.jpeg";
import HedgehogAudio from "../../assets/sound/hedgehog.mp3";
import textHedgehog from "../../assets/image/text-hedgehog.png";

import Bee from "../../assets/image/bee.png";
import BeeAudio from "../../assets/sound/bee.mp3";
import textBee from "../../assets/image/text-bee.png";
import firstAup from "../../assets/image/red-a-up.png";

import Iguana from "../../assets/image/iguana.png";
import IguanaAudio from "../../assets/sound/iguana.mp3";
import textIguana from "../../assets/image/text-iguana.png";



import ButtonNext from "../../components/button-next";
import ModalVowel from "../../components/modal-vowel";

class VowelStartGame extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
      vowels: [
        { img: a, vowelSound: Asound, sound: 'VowelStartGameAudioA', start: 'a' },
        { img: e, vowelSound: Esound, sound: 'VowelStartGameAudioE', start: 'e'  },
        { img: i, vowelSound: Isound, sound: 'VowelStartGameAudioI', start: 'i'  },
        { img: o, vowelSound: Osound, sound: 'VowelStartGameAudioO', start: 'o'  },
        { img: u, vowelSound: Usound, sound: 'VowelStartGameAudioU', start: 'u'  }
      ],
      currentVowel: null,
      show: false
    };

    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.handleOnMouseOverGame = this.handleOnMouseOverGame.bind(this);
  }

  componentDidMount() { 
        const currentVowel = this.getNext();
        this.setState({
          currentVowel: currentVowel
        });
        if (currentVowel && currentVowel.sound) {
       
          setTimeout(() => {
            document.getElementById(currentVowel.sound).play();
            //this.handleOnMouseOverGame()
          }, 1000)

          setTimeout(() => {
            document.getElementById(currentVowel.sound).play();
            //this.handleOnMouseOverGame()
            this.setState({
              show: true
            });
          }, 4000);
    
        }
  }

  handleOnMouseOverGame () {
    if (this.state.currentVowel && this.state.currentVowel.sound && document.getElementById(this.state.currentVowel.sound)) {
      document.getElementById(this.state.currentVowel.sound).play();
    }
  };

  getNext() {
    const vowelCurrent = this.state.vowels[this.getRandomInt(0, 5)];
    console.log("vowelCurrent", vowelCurrent);
    return vowelCurrent;
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  render() {

    if (!this.state.currentVowel) { 
      return (

        <React.Fragment>
          
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
      )
    }

    if (this.state.currentVowel) {
      return (
      
        <React.Fragment>
          <div className="content-menu vowel-start-time">
            <h1> JUGAR VOCAL INICIAL</h1>
          </div>
          <div className="start-game-title">
            <div className="two">
            <img onClick={this.handleOnMouseOverGame} src={yoxi} className="yoxi-vowel-start" alt="Yoxi" />
              <Vowel
                vowel={this.state.currentVowel.img}
                id={this.state.currentVowel.start}
                vowelSound={this.state.currentVowel.vowelSound}
                size="100px" 
              />
              </div>
          </div>

          {this.state.show &&
            <div className="start-game-options">
              <ModalVowel
                id={RainBow}
                image={RainBow}
                audio={RainBowAudio}
                alt="Arcoíris"
                text={textArcoiris}
                firstVowel={firstA}
                correct={this.state.currentVowel.start}
                vowel='a'
              />
              <ModalVowel
                id={Magnet}
                image={Magnet}
                audio={MagentAudio}
                alt="Iman"
                text={textIman}
                firstVowel={firstI}
                correct={this.state.currentVowel.start}
                vowel='i'
              />

              <ModalVowel
                id={Bear}
                image={Bear}
                audio={BearAudio}
                alt="Oso"
                text={textBear}
                firstVowel={firstO}
                correct={this.state.currentVowel.start}
                vowel='o'
              />

              <ModalVowel
                id={Grapes}
                image={Grapes}
                audio={GrapesAudio}
                alt="Uvas"
                text={textGrapes}
                firstVowel={firstU}
                correct={this.state.currentVowel.start}
                vowel='u'
              />

              <ModalVowel
                id={Elephan}
                image={Elephan}
                audio={ElephanAudio}
                alt="Elefante"
                text={textElephan}
                firstVowel={firstE}
                correct={this.state.currentVowel.start}
                vowel='e'
              />
              <ModalVowel
                id={Uniform}
                image={Uniform}
                audio={UniformAudio}
                alt="Uniforme"
                text={textUniform}
                firstVowel={firstU}
                correct={this.state.currentVowel.start}
                vowel='u'
              />
              <ModalVowel
                id={Sheep}
                image={Sheep}
                audio={SheepAudio}
                alt="Oveja"
                text={textSheep}
                firstVowel={firstO}
                correct={this.state.currentVowel.start}
                vowel='o'
              />
              <ModalVowel
                id={Indian}
                image={Indian}
                audio={IndianAudio}
                alt="Indio"
                text={textIndian}
                firstVowel={firstI}
                correct={this.state.currentVowel.start}
                vowel='i'
              />
              <ModalVowel
                id={Star}
                image={Star}
                audio={StarAudio}
                alt="Estrella"
                text={textStar}
                firstVowel={firstE}
                correct={this.state.currentVowel.start}
                vowel='e'
              />
              <ModalVowel
                id={Igloo}
                image={Igloo}
                audio={IglooAudio}
                alt="Iglu"
                text={textIgloo}
                firstVowel={firstIup}
                correct={this.state.currentVowel.start}
                vowel='i'
              />
              <ModalVowel
                id={Ambulance}
                image={Ambulance}
                audio={AmbulanceAudio}
                alt="Ambulancia"
                text={textAmbulance}
                firstVowel={firstA}
                correct={this.state.currentVowel.start}
                vowel='a'
              />
              <ModalVowel
                id={Hedgehog}
                image={Hedgehog}
                audio={HedgehogAudio}
                alt="Erizo"
                text={textHedgehog}
                firstVowel={firstE}
                correct={this.state.currentVowel.start}
                vowel='e'
              />
              <ModalVowel
                id={Bee}
                image={Bee}
                audio={BeeAudio}
                alt="Aveja"
                text={textBee}
                firstVowel={firstAup}
                correct={this.state.currentVowel.start}
                vowel='a'
              />
              <ModalVowel
                id={Iguana}
                image={Iguana}
                audio={IguanaAudio}
                alt="Iguana"
                text={textIguana}
                firstVowel={firstIup}
                correct={this.state.currentVowel.start}
                vowel='i'
              />
            </div>
          }
          <div className="content-menu vowel-start">
            <ButtonBack go="/vowel-start" />
            <ButtonNext go="/vowel-final" />
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
}

export default VowelStartGame;
