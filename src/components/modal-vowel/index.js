import React, { Component } from "react";
import "./index.css";
import Modal from "../modal";
import StuffAudio from "../stuffAudio";

class ModalVowel extends Component {


  render() {
    return (
      <Modal
      trigger={
        <StuffAudio
          id={this.props.id}
          image={this.props.image}
          audio={this.props.audio}
          alt={this.props.alt}
            size="10px"
            correct={this.correct}
            vowel='a'
        ></StuffAudio>
      }
    >
      <StuffAudio
        id={this.props.id}
        image={this.props.image}
        audio={this.props.audio}
        alt={this.props.alt}
        text={this.props.text}
        firstVowel={this.props.firstVowel}
          size="18px"

      ></StuffAudio>
    </Modal>
    );
  }
}

export default ModalVowel;
