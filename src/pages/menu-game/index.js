import React, { Component } from "react";
import UIfx from "uifx";
import { Link } from "react-router-dom";
import arrowNext from '../../assets/image/arrow-next.png';
import arrowBack from '../../assets/image/arrow-back.png';

import IntroAudio from "../../assets/sound/menu.mp3";
import "./index.css";
import MenuItem from "../../components/menu-item";

class MenuGame extends Component {
  render() {
    const beep = new UIfx(IntroAudio, { volume: 0.9 });
    beep.setVolume(0.9);
    console.log("beep", beep);
    beep.play();

    return (
      <React.Fragment>
        <div></div>
        <div className="content-menu top-20px">
        <Link to="/"><img src={arrowBack} className="arrow-navigation" alt="Atrás"/></Link>
          <MenuItem label="Descubra vocal inicial" />
          <MenuItem label="Descubra vocal final" />
          <MenuItem label="Rima rimando" />
          <Link to="/menu-game"><img src={arrowNext} className="arrow-navigation" alt="Siguiente"/></Link>
        </div>
      </React.Fragment>
    );
  }
}

export default MenuGame;
