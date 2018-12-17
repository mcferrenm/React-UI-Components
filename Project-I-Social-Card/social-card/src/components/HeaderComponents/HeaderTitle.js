import React from 'react';
import './Header.css';

const HeaderTitle = () => {
  return (
    <div>
      <h3>Lambda School</h3>
      <span>@LambdaSchool</span>
      <span>{Date.now()}</span>
    </div>
  );
};

export default HeaderTitle;
