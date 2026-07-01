import React, { Component } from "react";
import PropTypes from "prop-types";
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

ModalVowel.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  audio: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string,
  firstVowel: PropTypes.string,
  correct: PropTypes.string,
  vowel: PropTypes.string
};

export default ModalVowel;
