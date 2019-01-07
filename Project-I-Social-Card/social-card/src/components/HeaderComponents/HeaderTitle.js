import React from "react";
import "./Header.css";

import moment from "moment";

const HeaderTitle = () => {
  return (
    <div className="header-title">
      <span className="user-name">Lambda School</span>
      <span className="user-handle">@LambdaSchool</span>
      <span className="post-date">・{moment().format("D MMM")}</span>
    </div>
  );
};

export default HeaderTitle;
