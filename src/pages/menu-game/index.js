import React, { Component } from "react";
import UIfx from "uifx";

import EnterAudio from "../../assets/sound/enter.mp3";

import MenuAudio from "../../assets/sound/menu.mp3";
import "./index.css";
import MenuItem from "../../components/menu-item";
import ButtonBack from "../../components/button-back";
import yoxi from "../../assets/image/yoxi.png";

class MenuGame extends Component {
  state = {
    isPlaying: false
  };

  componentDidMount() {
    if (!this.state.isPlaying) {
      this.setState({
        isPlaying: true
      });
      document.getElementById("MenuAudioId").play();
    }
  }

  handleOnMouseOver = () => {
    this.enterAudio = new UIfx(EnterAudio, { volume: 1.0 });
    this.enterAudio.play(1.0);
    document.getElementById("MenuAudioId").play();
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <img
            onClick={this.handleOnMouseOver}
            src={yoxi}
            className="yoxi-menu"
            alt="Yoxi"
          />
        </div>
        <div className="content-menu">
          <ButtonBack go="/" />
          <MenuItem label="Identificar vocal inicial" go="/vowel-start" />
          <MenuItem label="Descubre el sonido de la vocal inicial" go="/vowel-start-game" />
          <MenuItem label="Descubre el sonido de la vocal final" go="/vowel-intermedial" />
          <MenuItem label="Rima rimando" go="/vowel-start" />
        </div>
        <audio id="MenuAudioId" name="MenuAudioId">
          <source src={MenuAudio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </React.Fragment>
    );
  }
}

export default MenuGame;
