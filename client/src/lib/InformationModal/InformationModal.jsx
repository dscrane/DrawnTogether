/* IMPORTS */
import React from "react";
import { Modal } from "../Modal";
import BeyondMeasure from "../../assets/beyond-measure.jpeg";
import InstagramQRC from "../../assets/carriecraneinstagramQR.png";
import WebsiteQRC from "../../assets/carriecraneQR.png";
import RepoQRC from "../../assets/drawntogether-repoQR.png";
import "./informationModal.css";
/* ------ */

export const InformationModal = ({ show, onClose }) => {
  return (
    <Modal show={show} onClose={onClose} type={"large"}>
      <span>Drawn Together</span>
      <div className="info">
        <div className="info__hero">
          <img
            className="info__image"
            width={"40%"}
            src={BeyondMeasure}
            alt="Orbital Networks"
            aria-label="Orbital Networks"
            title="Orbital Networks"
          />
          <span className="hero__caption">Photo By: Charles Sternaimolo</span>
        </div>
        <p className="info__text">
          The idea for the computer game Drawn Together began several years ago when I made a series of sketches for an
          installation at the Fitchburg Art Museum. I was thinking about geometry and planetary orbital systems as a way
          to describe the nuances of human social systems, systems that occur within families, groups of friends, work
          colleagues or even social media networks. We are all orbs with gravitational fields, sometimes at the center
          of the system and sometimes orbiting around it.
        </p>
        <p className="info__text">
          As I was working on this project I started to imagine a machine that would randomly generate these visual
          systems when given information about the individuals that were part of them. It occurred to me then that what
          I needed was not a machine or instrument, but a series of algorithms that could translate the individuals’
          personal data into an image.
        </p>
        <p className="info__text">
          As a programmer, my son, Daegan Crane, was open to the challenge to make this happen. We have been working on
          this on and off for a year and a half. Through several iterations Drawn Together has become a more polished,
          user-friendly application. An exhibition at ArtsWorcester, an art galley in Worcester, Massachusetts served as
          a catalyst to put the finishing touches on the project and present it to the public. Enjoy!
        </p>
        <div className="info__footer">
          <div className="links">
            <p className="info__text info__text-footer">See more about Carrie’s work...</p>
            <div className="links__row">
              <div className="links__item">
                <span className="links__text">Instagram:</span>
                <img className="links__code" src={InstagramQRC} />
              </div>
              <div className="links__item">
                <span className="links__text">Website:</span>
                <img className="links__code" src={WebsiteQRC} />
              </div>
            </div>
          </div>
          <div className="links">
            <p className="info__text info__text-footer">Learn more about the project at…</p>
            <div className="links__item">
              <span className="links__text">GitHub:</span>
              <img className="links__code" src={RepoQRC} />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
