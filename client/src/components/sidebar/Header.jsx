import React from "react";


export const Header = ({ currentForm, formNames }) => {
  const createFormSteps = () => {
    return formNames.map((heading, i) => {
      return (
        i === currentForm ? (
          <span key={`${heading}-active`}>
            <span className="step__icon step__icon-active">{heading}</span>
            &#8192;
          </span>
        ) : (
          <span key={`${heading}`}>
            <span className="step__icon">{heading}</span>
            &#8192;
          </span>
        )
      );
    })
  };

  const formHeaderOne =
    currentForm > 0 ? (
      <>Directions: ....</>
    ) : (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </>
    );

  const formSteps = currentForm > 0 ? createFormSteps() : null;

  return (
    <>
      <h1 className="header__title">
        Circle <br />
        Generator
      </h1>
      <div className="form__heading">{formHeaderOne}</div>
      <div className="form__steps">
        {formSteps}
      </div>
    </>
  );
};

