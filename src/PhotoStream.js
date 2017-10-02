import React, { Component } from 'react';
import classnames from 'classnames';

import './PhotoStream.css';
import { shuffledImages } from './images';

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
      <div className="PhotoStream" onClick={this.props.onFinish}>
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
          />
        ))}
      </div>
    );
  }
}
