import React, {useEffect, useState} from "react";
import * as htmlToImage from "html-to-image";
import QRCode from 'qrcode';
import { ActionButton } from "../ActionButton";
import { endGameEmitter, saveScreenshotEmitter } from "../../socket.io/emitters";
import "./displayResults.css";

const DisplayResults = ({ gameId, socket }) => {
  const [ qrcode, setQrcode ] = useState(null);

  const sendScreenshot = async () => {
    const dataUrl = await htmlToImage.toPng(document.getElementById("canvas"));
    saveScreenshotEmitter(socket, dataUrl);
  }
  useEffect(() => {
    const screenshotTimer = setTimeout(async () => {
      sendScreenshot();
    }, 4000);
    return () => clearTimeout(screenshotTimer);
  },[])

  const handleSubmit = async () => {
      const opts = {
        errorCorrectionLevel: 'H',
        type: 'image/png',
        margin: 3,
        color: {
          dark:"#8fdbdb",
          light:"#2b2b2b"
        }
      }
      // const urlData = await QRCode.toDataURL(`https://dsc-circle-server.herokuapp.com/games/screenshot/${gameId}`, opts);
    const urlData = await QRCode.toDataURL(`http://192.168.1.62:5500/games/screenshot/${gameId}`, opts);

    setQrcode(urlData);
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
