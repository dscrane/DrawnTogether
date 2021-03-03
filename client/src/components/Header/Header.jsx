import React from "react";
import { headerIcons } from "./headerIcons";

const Header = ({ currentForm }) => {
  const formNames = ["Interest", "Players", "Physical", "Personal", "Financial", "Natural", "Cultural", "Visual"];
  const createHeaderIcons = () => {
    return headerIcons.map((icon, i) => {
      return i === currentForm - 1 ? (
        <div key={`${formNames[i]}-active`}>
          <span className="header__icon header__icon-active">{icon}</span>
        </div>
      ) : (
        <div key={`${formNames[i]}`}>
          <span className="header__icon">{icon}</span>
        </div>
      );
    });
  };

  const displayHeaderText =
    currentForm > 0 ? null : (
      <>
        Circle Generator is the artistic brainchild of Carrie Crane. Moving through the sections of the game will create
        and alter a collection of circles based on your groups common interest and a variety of personality factors. By
        the end you will have unique visual of how the members of your group are connected to the common interest that
        brought you together.
      </>
    );

  const displayHeaderIcons = currentForm > 0 ? createHeaderIcons() : null;

  return (
    <div className="header" data-testid="component-Header">
      <h1 className="header__title">
        Spherical <br />
        Impressions
      </h1>
      <h3 className="header__text">{displayHeaderText}</h3>
      <div className="header__icons">{displayHeaderIcons}</div>
    </div>
  );
};

export default Header;
