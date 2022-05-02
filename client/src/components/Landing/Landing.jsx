import React from "react";
import { HelpOutlineRounded } from "@mui/icons-material";
import "./landing.css";

export const Landing = ({ toggleModal }) => {
  return (
    <div className="landing">
      <div className="landing__content">
        <p className="landing__text">For teams of 2-5 players.</p>
        <p className="landing__text">
          This game will create and alter a unique network of circles based on your group's common interest and varied
          personalities.
        </p>
      </div>
      <div className="landing__info">
        <p className="landing__text">Drawn Together is an artistic collaboration between Carrie and Daegan Crane.</p>
        <p className="landing__text">Learn More:</p>
        <button className="help help-landing" onClick={toggleModal}>
          <HelpOutlineRounded className="help__icon help__icon-landing" />
        </button>
      </div>
    </div>
  );
};
