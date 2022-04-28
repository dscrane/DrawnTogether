/* IMPORTS */
import React from "react";
import BeyondMeasure from "../../assets/beyond-measure.jpeg";
import "./moreInformation.css";
import InstagramQRC from "../../assets/carriecraneinstagramQR.png";
import WebsiteQRC from "../../assets/carriecraneQR.png";
/* ------ */

export const MoreInformation = () => {
  return (
    <div className="info">
      <img
        className="info__image"
        width={"40%"}
        src={BeyondMeasure}
        alt="Orbital Networks"
        aria-label="Orbital Networks"
        title="Orbital Networks"
      />

      <p className="info__text">
        The idea for the computer game Drawn Together began several years ago when I made a series of sketches for an
        installation at the Fitchburg Art Museum. I was thinking about geometry and planetary orbital systems as a way
        to describe the nuances of human social systems, systems that occur within families, groups of friends, work
        colleagues or even social media networks. We are all orbs with gravitational fields, sometimes at the center of
        the system and sometimes orbiting around it.
      </p>
      <p className="info__text">
        As I was working on this project I started to imagine a machine that would randomly generate these visual
        systems when given information about the individuals that were part of them. It occurred to me then that what I
        needed was not a machine or instrument, but a series of algorithms that could translate the individuals’
        personal data into an image.
      </p>
      <p className="info__text">
        It just so happened that my son, Daegan Crane, was training to be a programmer and was open to the challenge to
        make this happen. We (actually mostly him) have been working on this on and off for a year and a half. This
        exhibition served as a catalyst to really get it up and running. Drawn Together is the result.
      </p>

      <p className="info__text">See more about Carrie’s work...</p>
      <div className="links">
        <div className="links__item">
          <span className="links__text">On Instagram:</span>
          <img className="links__code" src={InstagramQRC} />
        </div>
        <div className="links__item">
          <span className="links__text">Her Website:</span>
          <img className="links__code" src={WebsiteQRC} />
        </div>
      </div>

      <p className="info__text">Learn more about Daegan’s work at…</p>
    </div>
  );
};
