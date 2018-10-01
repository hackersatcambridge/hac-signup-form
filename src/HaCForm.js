import React, { Component } from 'react';
import { Button, FormGroup, Form, Label, Input, Col, Container, Row } from 'reactstrap';

import './HaCForm.css';
import { RadioFields } from './fields';
import { appendFormData } from './persist';

function serializeFormElement(element) {
  if (element.tagName === 'INPUT') {
    if (element.type === 'checkbox') {
      // We serialize checkboxes as arrays because we make assumptions and we're lazy
      return element.checked ? { [element.name]: [element.value] } : { };
    }

    if (element.type === 'radio') {
      return element.checked ? { [element.name]: element.value } : { };
    }

    return { [element.name]: element.value };
  }

  return { };
}

function serializeForm(formElement) {
  const values = { };

  for (const element of formElement.elements) {
    const serialized = serializeFormElement(element);

    for (const [key, value] of Object.entries(serialized)) {
      if (Array.isArray(values[key]) && (Array.isArray(value))) {
        values[key] = [...values[key], ...value];
      } else {
        values[key] = value;
      }
    }
  }

  return values;
}

class HaCForm extends Component {
  submitForm = event => {
    appendFormData(serializeForm(event.target));
    event.preventDefault();
    this.props.onSubmit();
  }

  render() {
    // NOTE: THIS DOES NOT WORK FOR SELECT OR TEXTAREA ELEMENTS
    return (
      <Form onSubmit={this.submitForm} className="HaCForm">
        <FormGroup>
          <Label size="lg">What is your full name?</Label>
          <Input size="lg" required name="name" type="text"/>
        </FormGroup>
        <FormGroup>
          <Label size="lg">What is your CRSid or email address?</Label>
          <Input type="text" size="lg" required name="email"/>
        </FormGroup>
        <FormGroup>
          <Label size="lg">What is your field of study?</Label>
          <Input type="text" size="lg" name="field-of-study"/>
        </FormGroup>
        <FormGroup tag="fieldset">
          <Label size="lg">Do you have any programming experience?</Label>
          <p>Just a rough estimate.</p>
          <RadioFields
            name="experience"
            required
            fields={[
              {
                value: 'none',
                label: 'None',
              },
              {
                value: 'small',
                label: 'Only a little bit here and there',
              },
              {
                value: 'medium',
                label: 'I\'m an intermediate programmer',
              },
              {
                value: 'large',
                label: 'I\'m at the keyboard pretty much every day',
              }
            ]} />
        </FormGroup>
        <FormGroup tag="fieldset">
          <Label size="lg">What are you interested in?</Label>
          <p>Ask someone if you need more info on any of these.</p>
          <RadioFields
            name="interested"
            type="checkbox"
            fields={[
              {
                value: 'attending-hackathons',
                label: 'Attending hackathons',
              },
              {
                value: 'attending-workshops',
                label: 'Attending workshops and talks on programming and interesting technology',
              },
              {
                value: 'hac-nights',
                label: 'Meeting like-minded people at our weekly gatherings (HaC Nights)',
              },
              {
                value: 'volunteering-hackathons',
                label: 'Volunteering to help make our hackathons a success',
              },
              {
                value: 'running-workshops',
                label: 'Teaching others by running or demonstrating at workshops',
              },
              {
                value: 'writing',
                label: 'Writing blog posts or creating YouTube videos about cool tech',
              },
            ]} />
        </FormGroup>
        <Row>
          <Col xs="auto">
            <Button size="lg" type="submit" color="primary">Submit</Button>
          </Col>
          <Col />
          <Col xs="auto">
            <Button size="lg" color="secondary" outline onClick={this.props.onCancel}>Cancel</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default HaCForm;
