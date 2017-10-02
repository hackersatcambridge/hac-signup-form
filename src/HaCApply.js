import React, { Component } from 'react';
import { Container, Button, Row } from 'reactstrap';

import './HaCApply.css';
import HaCForm from './HaCForm';
import ApplyHero from './ApplyHero';

export default class HaCApply extends Component {
  state = {
    submitted: false
  }

  onSubmit = () => {
    this.setState({ submitted: true });
  }

  onFinish = () => {
    this.props.onFinish();
  }

  render() {
    return <div>
      <ApplyHero />
      <Container fluid className="HaCApply">
        {this.state.submitted ?
          <div>
            <h1>Thank You!</h1>
            <p>We will update you when there are events that might interest you.</p>
            <Button onClick={this.onFinish} color="primary">Okay</Button>
          </div> :
          <HaCForm
            onSubmit={this.onSubmit}
            onCancel={this.onFinish} />
        }
      </Container>
    </div>
  }
}