import React, { Component } from 'react';
import classnames from 'classnames';

import './PhotoStream.css';
import { shuffledImages } from './images';
import hacLogo from './hac-logo-light.svg';

export default class PhotoStream extends Component {
  images = shuffledImages();
  state = {
    imageIndex: 0,
  };
  timerHandle = null;

  gotoNextImage = () => {
    this.setState(({ imageIndex }) => ({
      imageIndex: (imageIndex + 1) % this.images.length
    }));
  }

  componentDidMount() {
    this.timerHandle = setInterval(this.gotoNextImage, 5000);
  }

  componentWillUnmount() {
    if (this.timerHandle != null) {
      clearInterval(this.timerHandle);
    }
  }

  render() {
    return (
      <div className="PhotoStream">
        {this.images.map((image, index) => (
          <div
            key={index}
            className={
              classnames(
                'PhotoStream__image',
                index === this.state.imageIndex ? 
                  'PhotoStream__image--active' : null,
                image.contain ?
                  'PhotoStream__image--contain' : null,
              )
            }
            style={{
              backgroundImage: `url(${image.src})`,
            }}
            onClick={this.props.onFinish}
          />
        ))}
        <img className="PhotoStream__logo" src={hacLogo} onClick={this.props.onSettings} />
      </div>
    );
  }
}
