import React from 'react';
import { Button, Container } from 'reactstrap';
import * as screenfull from 'screenfull';

import { downloadFormDataAsCsv } from './persist';

function goFullscreen() {
  screenfull.request();
}

export default function Settings({ onFinish }) {
  return (
    <Container>
      <div><Button onClick={downloadFormDataAsCsv}>Download Results</Button></div>
      <div><Button onClick={goFullscreen}>Fullscreen</Button></div>
      <div><Button onClick={onFinish}>Done</Button></div>
    </Container>
  );
}
