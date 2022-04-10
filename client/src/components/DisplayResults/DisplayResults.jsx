import React, {useEffect, useState} from "react";
import FormData from "form-data";
import * as htmlToImage from "html-to-image";
import QRCode from 'qrcode';
import { ActionButton } from "../ActionButton";
import {endGameEmitter, screenshotEmitter} from "../../socket.io/emitters";
import { api, dataToFile } from "../../utils";
import "./displayResults.css";

const DisplayResults = ({ gameId, socket, screenshot }) => {

  const [ qrcode, setQrcode ] = useState(null);
  console.log(qrcode)
  useEffect(() => {
    const generateQRCode = async () => {
      const opts = {
        errorCorrectionLevel: 'H',
        type: 'image/png',
        margin: 3,
        color: {
          dark:"#8fdbdb",
          light:"#2b2b2b"
        }
      }
      const urlData = await QRCode.toDataURL(`https://dsc-circle-server.herokuapp.com/games/screenshot/${gameId}`, opts);
      setQrcode(urlData);
    }
    if (screenshot) {
      generateQRCode();
    }
  }, [screenshot])

  const handleSubmit = async () => {
    const dataUrl = await htmlToImage.toPng(document.getElementById("canvas"));
    screenshotEmitter(socket, dataUrl);
  };
  const resultsDisplay = !qrcode ? (
    <>
      <p className="landing__text landing__text-smaller">
        If you would like an emailed version of your display click the button below
      </p>
      <ActionButton onClick={handleSubmit} buttonType={"screenshot"} text={"Take Screenshot"} />
    </>
  ) : (
    <>
      <p className="landing__text landing__text-smaller">
        Scan the code below to download the final display
      </p>
      <img className="results__qrcode" src={`${qrcode}`} alt="screenshot-qrcode" />
    </>
  );

  return (
    <div className="landing">
      <p className="landing__text">The final results of your group are displayed to the right.</p>
      {resultsDisplay}
      <p className="landing__text">If you would like to play again please hit the "Reset" button!</p>
      <ActionButton onClick={() => endGameEmitter(socket)} buttonType={"restart"} text={"Restart\nGame"} />
    </div>
  );
};

export default DisplayResults;
