import React from 'react';

import hacLogo from './hac-logo-light.svg';
import hcLogo from './hc-logo-light.svg';
import './ApplyHero.css';

export default function ApplyHero() {
  return (
    <div className="ApplyHero">
      <div className="ApplyHero__section ApplyHero__section--hac">
        <img src={hacLogo} className="ApplyHero__logo" />
      </div>
      <div className="ApplyHero__section ApplyHero__section--hc">
        <img src={hcLogo} className="ApplyHero__logo" />
      </div>
    </div>
  );
}
