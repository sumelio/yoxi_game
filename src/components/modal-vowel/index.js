import React, { Component } from "react";
import "./index.css";
import Modal from "../modal";
import StuffAudio from "../stuffAudio";

class ModalVowel extends Component {


  render() {
    return (
      <div className="modal" >
      <Modal 
      trigger={
        <StuffAudio
          id={this.props.id}
          image={this.props.image}
          audio={this.props.audio}
          alt={this.props.alt}
            size="8px"
            correct={this.props.correct}
            vowel={this.props.vowel}
        ></StuffAudio>
      }
    >
      <StuffAudio
        id={this.props.id+'Id'}
        image={this.props.image}
        audio={this.props.audio}
        alt={this.props.alt}
        text={this.props.text}
        firstVowel={this.props.firstVowel}
          size="18px"
          correct={this.props.correct}
          vowel={this.props.vowel}

      ></StuffAudio>
        </Modal>
        </div>
    );
  }
}

export default ModalVowel;
