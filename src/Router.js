import React, { Component } from 'react';

import PhotoStream from './PhotoStream';
import HaCApply from './HaCApply';

const PHOTOS = 'photos';
const FORM = 'form';

export default class Router extends Component {
  state = {
    showing: 'photos',
  }

  showRoute = routeName => {
    this.setState({ showing: routeName });
  }

  onFormFinish = () => {
    this.showRoute(PHOTOS);
  }

  onPhotosFinish = () => {
    this.showRoute(FORM);
  }

  render() {
    if (this.state.showing === PHOTOS) {
      return <PhotoStream onFinish={this.onPhotosFinish} />;
    }

    if (this.state.showing === FORM) {
      return <HaCApply onFinish={this.onFormFinish} />;
    }

    return null;
  }
}
