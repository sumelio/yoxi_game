import React, { Component } from "react";
import UIfx from 'uifx'


import IntroAudio from '../../assets/sound/menu.mp3'
import './index.css'
import MenuItem from "../../components/menu-item";

class MenuGame extends Component {
  render() {
    const beep = new UIfx(IntroAudio, { volume: 0.9 });
    beep.setVolume(0.9);
    console.log("beep", beep);
  
    const handlePlay = () => {
      beep.play();
    };
  
    beep.play();
    
    return (
        <div  className="content-menu top-20px">
        <MenuItem   label="Descubra vocal inicial"/>
        <MenuItem  label="Descubra vocal final" />
        <MenuItem  label="Rima rimando" />
      </div>
    );
  }
}

export default MenuGame;
