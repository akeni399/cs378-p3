import React from 'react';
import LogoImage from '../images/cookemlogo.png';

function Logo() {
  return (
    <div className="logo">
      <img src={LogoImage} alt="logo" />
    </div>
  );
}

export default Logo;