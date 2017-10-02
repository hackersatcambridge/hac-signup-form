import React from 'react';

import HaCLogo from './hac-logo-light.svg';
import './ApplyHero.css';
import { downloadFormDataAsCsv } from './persist';

export default function ApplyHero() {
  return (
    <div className="ApplyHero">
      <img src={HaCLogo} className="ApplyHero__logo" onClick={downloadFormDataAsCsv} />
    </div>
  );
}
