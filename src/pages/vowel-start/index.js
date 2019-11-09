import React, { Component } from "react";

import VowelStartAudio from "../../assets/sound/vowel-first.mp3";
import "./index.css";
import ButtonBack from "../../components/button-back";
import Vowel from "../../components/vowel";
import a from "../../assets/image/a.png";
import e from "../../assets/image/e.png";
import i from "../../assets/image/i.png";
import o from "../../assets/image/o.png";
import u from "../../assets/image/u.png";

class VowelStart extends Component {
  state = {
    isPlaying: false
  };

  componentDidMount() {
    if (!this.state.isPlaying) {
      this.setState({
        isPlaying: true
      });
      document.getElementById("VowelStartAudioId").play();
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="content-menu vowel-start">
          <ButtonBack go="/menu-game" />
          <Vowel vowel={a} />
          <Vowel vowel={e} />
          <Vowel vowel={i} />
          <Vowel vowel={o} />
          <Vowel vowel={u} />
        </div>
        <audio id="VowelStartAudioId" name="VowelStartAudioId">
          <source src={VowelStartAudio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </React.Fragment>
    );
  }
}

export default VowelStart;
