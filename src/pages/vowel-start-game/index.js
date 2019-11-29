import React, { Component } from "react";
import { Link } from "react-router-dom";

import VowelStartAudio from "../../assets/sound/vowel-first.mp3";
import GameStartA from "../../assets/sound/game-start-a.mp3";
import GameStartE from "../../assets/sound/game-start-e.mp3";
import GameStartI from "../../assets/sound/game-start-i.mp3";
import GameStartO from "../../assets/sound/game-start-o.mp3";
import GameStartU from "../../assets/sound/game-start-u.mp3";
import "./index.css";
import ButtonBack from "../../components/button-back";
import Vowel from "../../components/vowel";
import arrowNext from "../../assets/image/arrow-next.png";

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
      ],
      modelVowels: [
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
      ],
      currentModelVowel: [
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
      ],
      currentVowel: null,
      show: false
    };

    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.handleOnMouseOverGame = this.handleOnMouseOverGame.bind(this);
    this.startGame = this.startGame.bind(this);
    this.addAudios = this.addAudios.bind(this);
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    this.startGame(params && params.vowel ? params.vowel : null);
  }

  startGame(vowel) {
    this.setState({
      show: false
    });
    const currentVowel = vowel ? this.getVowelByStart(vowel) : this.getNext();

    const currentModelVowel = [
      { idle: true },
      { idle: true },
      { idle: true },
      { idle: true },
      { idle: true }
    ];
    let currentModelVowelWin = this.state.modelVowels
      .slice()
      .filter(i => i.vowel === currentVowel.start)
      .map(i => {
        return { ...i, used: false, idle: false };
      });
    while (currentModelVowelWin.filter(i => i.used === false).length > 0) {
      const win =
        currentModelVowelWin[this.getRandomInt(0, currentModelVowelWin.length)];
      const index = this.getRandomInt(0, 5);
      if (currentModelVowel[index].idle) {
        currentModelVowel[index] = win;
        win.used = true;
        currentModelVowelWin = currentModelVowelWin.filter(
          i => i.used === false
        );
      }
    }

    let currentModelVowelFail = this.state.modelVowels
      .slice()
      .filter(i => i.vowel !== currentVowel.start)
      .map(i => {
        return { ...i, idle: true };
      });

    while (currentModelVowel.filter(i => i && i.idle).length >= 1) {
      currentModelVowel
        .filter(i => i && i.idle)
        .forEach(a => {
          const fail =
            currentModelVowelFail[
              this.getRandomInt(0, currentModelVowelFail.length)
            ];
          // debugger;
          //
          //a = fail
          if (fail.idle) {
            fail.idle = false; 
            a.idle = false;
            a.image = fail.image;
            a.audio = fail.audio;
            a.alt = fail.alt;
            a.text = fail.text;
            a.firstVowel = fail.firstVowel;
            a.vowel = fail.vowel;
          }
          // fail.used = true;
        });

      //const item = this.state.modelVowels.filter(i => i.vowel !== currentVowel.start)[0];
      //currentModelVowel.push(item);
    }

    this.setState({
      currentVowel: currentVowel,
      currentModelVowel: currentModelVowel
    });

    if (currentVowel && currentVowel.sound) {
      setTimeout(() => {
        if(document.getElementById(currentVowel.sound)) {
          document.getElementById(currentVowel.sound).play();
        }
        //this.handleOnMouseOverGame()
      }, 1000);

      setTimeout(() => {
        if(document.getElementById(currentVowel.sound) ) {
          document.getElementById(currentVowel.sound).play();
        }
        //this.handleOnMouseOverGame()
        this.setState({
          show: true
        });
      }, 6000);
    }
  }

  handleOnMouseOverGame() {
    if (
      this.state.currentVowel &&
      this.state.currentVowel.sound &&
      document.getElementById(this.state.currentVowel.sound)
    ) {
      document.getElementById(this.state.currentVowel.sound).play();
    }
  }

  getNext() {
    const vowelCurrent = this.state.vowels[this.getRandomInt(0, 5)];
    return vowelCurrent;
  }

  getVowelByStart(vowel) {
    const vowelCurrent = this.state.vowels.find(item => item.start === vowel);
    return vowelCurrent;
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  addAudios = () => {
    return (
      <div>
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
      </div>
    );
  };
  paintVowel(v, c, f) {
    return (
      <div onClick={f}>
        <Vowel
          className={v.start !== c.start && "filter"}
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
          {this.addAudios()}
        </React.Fragment>
      );
    }

    if (this.state.currentVowel) {
      return (
        <React.Fragment>
          <div className="content-menu vowel-start-time">
            <h1> JUGAR VOCAL INICIAL</h1>
          </div>
          <div className="start-game-title">
            <div className="two">
              {this.state.show && (<img
                onClick={this.handleOnMouseOverGame}
                src={yoxi}
                className="yoxi-vowel-start"
                alt="Yoxi"
              />)}
              {this.state.vowels.map((v, i) =>
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
               {! this.state.show && (<img
                onClick={this.handleOnMouseOverGame}
                src={yoxi}
                className="yoxi-vowel-start"
                alt="Yoxi"
          />)}
          
          <div className="content-menu vowel-start">
            <ButtonBack go="/vowel-start" />
            <Link to="/vowel-start-game/u">
              <img
                onClick={this.handleOnClickNext}
                src={arrowNext}
                className="arrowNext"
                alt="Menu"
              />
            </Link>
          </div>
          {this.addAudios()}
        </React.Fragment>
      );
    }
  }
}

export default VowelStartGame;
