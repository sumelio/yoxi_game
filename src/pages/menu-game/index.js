import React, { Component } from "react";

import MenuAudio from "../../assets/sound/menu.mp3";
import "./index.css";
import MenuItem from "../../components/menu-item";
import ButtonBack from "../../components/button-back";

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

  handleOnMouseOver() {
    if (!this.state.isPlaying) {
      this.setState({
        isPlaying: true
      });
      document.getElementById("MenuAudioId").play();
    }
  }

  render() {
    return (
      <React.Fragment>
        <div></div>
        <div className="content-menu">
          <ButtonBack go="/" />
          <MenuItem label="Descubra vocal inicial" go="/vowel-start" />
          <MenuItem label="Descubra vocal final" />
          <MenuItem label="Rima rimando" />
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
