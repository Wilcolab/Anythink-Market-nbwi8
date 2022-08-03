import React from "react";
import logo from "../../imgs/logo.png";
import SearchBar from "./SearchBar";

const Banner = () => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <SearchBar />
      </div>
    </div>
  );
};

export default Banner;
