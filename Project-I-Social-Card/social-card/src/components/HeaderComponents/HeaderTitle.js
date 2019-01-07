import React from "react";
import "./Header.css";

const HeaderTitle = () => {
  return (
    <div className="header-title">
      <span className="user-name">Lambda School</span>
      <span className="user-handle">@LambdaSchool</span>
      <span className="post-date">・26 Jan</span>
    </div>
  );
};

export default HeaderTitle;
