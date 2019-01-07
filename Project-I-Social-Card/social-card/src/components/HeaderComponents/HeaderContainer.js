import React from "react";

import ImageThumbnail from "./ImageThumbnail";
import HeaderBody from "./HeaderBody";

import "./Header.css";

const HeaderContainer = () => {
  return (
    <div className="header-container">
      <ImageThumbnail />
      <HeaderBody />
    </div>
  );
};

export default HeaderContainer;
