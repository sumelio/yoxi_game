import React, { Component } from "react";
import UIfx from "uifx";

import EnterAudio from "../../assets/sound/enter.mp3";
import MenuAudio from "../../assets/sound/menu.mp3";
import "./index.css";
import MenuItem from "../../components/menu-item";
import ButtonBack from "../../components/button-back";
import yoxi from "../../assets/image/yoxi.png";

import { playSound } from "../../utils/audioManager";

class MenuGame extends Component {
  componentDidMount() {
    playSound(MenuAudio);
  }

  handleOnClickYoxi = () => {
    this.enterAudio = new UIfx(EnterAudio, { volume: 1.0 });
    this.enterAudio.play(1.0);
    playSound(MenuAudio);
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <img
            onClick={this.handleOnClickYoxi}
            src={yoxi}
            className="yoxi-menu"
            alt="Yoxi"
          />
        </div>
        <div className="content-menu">
          <ButtonBack go="/" />
          <MenuItem
            label="Descubre el sonido de la vocal inicial"
            go="/vowel-start"
          />
          <MenuItem
            label="Descubre el sonido de la vocal final"
            go="/vowel-final"
          />
          <MenuItem label="Rima rimando" go="/rhyme-Word" />
        </div>
      </React.Fragment>
    );
  }
}

export default MenuGame;
