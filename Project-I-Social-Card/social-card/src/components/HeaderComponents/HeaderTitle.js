import React from 'react';
import './Header.css';

const HeaderTitle = () => {
  return (
    <div>
      <h4>Lambda School</h4>
      <span>@LambdaSchool</span>
      <span>{Date.now()}</span>
    </div>
  );
};

export default HeaderTitle;
