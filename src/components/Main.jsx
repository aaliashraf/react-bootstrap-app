import React, { Component } from "react";
import Navbars from "./navbar";
import Slider from "./carousel";
import Sections from "./welcome";
import Footers from "./footer";
// import Buttons from "./Button";
class Movie extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbars />
        <Slider />
        <Sections />
        {/* <Buttons /> */}
        <Footers />
      </div>
    );
  }
}

export default Movie;
