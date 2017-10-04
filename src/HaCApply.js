import React, { Component } from 'react';
import { Container, Button, Row } from 'reactstrap';

import './HaCApply.css';
import HaCForm from './HaCForm';
import ApplyHero from './ApplyHero';

const FORM = 'FORM';
const SUBMITTED = 'SUBMITTED';

export default class HaCApply extends Component {
  state = {
    route: FORM
  }

  gotoRoute = route => {
    this.setState({ route });
  }

  onSubmit = () => {
    this.gotoRoute(SUBMITTED);
  }

  onFinish = () => {
    this.props.onFinish();
  }

  onFormComplete = () => {
    this.gotoRoute(FORM);
  }

  renderRoute = () => {
    switch (this.state.route) {
    case FORM:
      return <HaCForm
        onSubmit={this.onSubmit}
        onCancel={this.onFinish}
        onSettings={this.onSettings} />;
    case SUBMITTED:
      return (
        <div className="HaCApply__finish">
          <h1>Thank You!</h1>
          <p>We will update you when there are events that might interest you.</p>
          <Button onClick={this.onFormComplete} color="primary" size="lg">Okay</Button>
        </div> 
      );
    default:
      return null;
    }
  }

  render() {
    return <div>
      <ApplyHero />
      <Container fluid className="HaCApply">
        {this.renderRoute()}
      </Container>
    </div>
  }
}