import React, { Component } from "react";

import VowelStartAudio from "../../assets/sound/vowel-first.mp3";
import "./index.css";
import ButtonBack from "../../components/button-back";
import ButtonNext from "../../components/button-next";
import ModalVowel from "../../components/modal-vowel";
import yoxi from "../../assets/image/yoxi.png";

import { WORD_EXAMPLES } from "../../config/vowelGameData";
import { playSound } from "../../utils/audioManager";

class VowelStart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.timeoutId = null;
  }

  componentDidMount() {
    playSound(VowelStartAudio);
    this.timeoutId = setTimeout(() => {
      this.setState({ show: true });
    }, 4000);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  handleOnClickYoxi = () => {
    playSound(VowelStartAudio);
  };

  render() {
    return (
      <React.Fragment>
        <div className="content-menu vowel-start-time">
          <h1>
            <img
              onClick={this.handleOnClickYoxi}
              src={yoxi}
              className="yoxi-vowel-start"
              alt="Yoxi"
            />
            VOCAL INICIAL
          </h1>
        </div>
        {this.state.show && (
          <div className="content-start-vowel-stauff">
            {WORD_EXAMPLES.map(word => (
              <ModalVowel
                key={word.alt}
                id={word.image}
                image={word.image}
                audio={word.audio}
                alt={word.alt}
                text={word.text}
                firstVowel={word.firstVowel}
              />
            ))}
          </div>
        )}
        <div className="content-menu vowel-start">
          <ButtonBack go="/menu-game" />
          <ButtonNext go="/vowel-start-game" />
        </div>
      </React.Fragment>
    );
  }
}

export default VowelStart;
