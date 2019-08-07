import React from "react";
import Background from "../background/Background";
import Navbar from "../navigation/Navbar";
import "./Welcome.scss";

export default function Welcome() {
  return (
    <div>
      <Background />
      <Navbar />
      <div>Welcome!</div>
      <div className="welcome-message-container">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </div>
  );
}
