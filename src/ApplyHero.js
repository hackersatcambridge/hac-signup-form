import React from 'react';

import hacLogo from './hac-logo-light.svg';
import hcLogo from './hc-logo-light.svg';
import hcLogoPNG from './hc-logo.png';
import './ApplyHero.css';

export default function ApplyHero() {
  return (
    <div>
      <div className="ApplyHero">
        <div className="ApplyHero__section ApplyHero__section--hac">
          <img src={hacLogo} className="ApplyHero__logo" />
        </div>
        <div className="ApplyHero__section ApplyHero__section--hc">
          <img src={hcLogoPNG} className="ApplyHero__logo" />
        </div>
      </div>
      <div className="ApplyFooter">
        <h2>Freshers Fair 2018</h2>
      </div>
    </div>
  );
}
