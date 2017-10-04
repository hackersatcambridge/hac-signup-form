import React, { Component } from 'react';

import PhotoStream from './PhotoStream';
import HaCApply from './HaCApply';
import Settings from './Settings';

const PHOTOS = 'photos';
const FORM = 'form';
const SETTINGS = 'settings';

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

  onSettings = () => {
    this.showRoute(SETTINGS);
  }

  render() {
    switch (this.state.showing) {
    case PHOTOS:
      return <PhotoStream onFinish={this.onPhotosFinish} onSettings={this.onSettings} />;
    case FORM:
      return <HaCApply onFinish={this.onFormFinish} />;
    case SETTINGS:
      return <Settings onFinish={this.onFormFinish} />;
    default:
      return null;
    }
  }
}
