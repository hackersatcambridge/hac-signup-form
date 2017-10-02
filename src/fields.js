import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export function RadioFields({ fields, type = 'radio', name, required = false }) {
  return fields.map(
    ({ value, label }) =>
      <FormGroup key={value} check>
        <Label check>
          <Input type={type} name={name} value={value} required={required} /><div>{label}</div>
        </Label>
      </FormGroup>
  );
}
