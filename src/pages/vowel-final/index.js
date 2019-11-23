import React, { Component } from "react";

import VowelFinalAudio from "../../assets/sound/vowel-final.mp3";
import "./index.css";
import ButtonBack from "../../components/button-back";
import yoxi from "../../assets/image/yoxi.png";


import ModalVowel from "../../components/modal-vowel";
import ButtonNext from "../../components/button-next";

class VowelFinal extends Component {
  state = {
    isPlaying: false
  };

  componentDidMount() {
    if (!this.state.isPlaying) {
      this.setState({
        isPlaying: true
      });
      document.getElementById("VowelFinalAudioId").play();
    }
  }

  handleOnMouseOver = (event) => {
    document.getElementById("VowelFinalAudioId").play();
  }

  render() {
    return (
      <React.Fragment>
        <div className="content-menu vowel-start-time">
        <h1><img onClick={this.handleOnMouseOver} src={yoxi} className="yoxi-vowel-start" alt="Yoxi" />
          VOCAL FINAL</h1>
        </div>
        <div className="content-start-vowel-stauff">
             
        </div>
        <div className="content-menu vowel-start">
          <ButtonBack go="/vowel-start-game" />
          <ButtonNext go="/vowel-start-game" />
        </div>
        <audio id="VowelFinalAudioId" name="VowelFinalAudioId">
          <source src={VowelFinalAudio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </React.Fragment>
    );
  }
}

export default VowelFinal;
