import React, { useEffect, useState } from "react";
import * as htmlToImage from "html-to-image";
import QRCode from "qrcode";
import { ActionButton } from "../ActionButton";
import { endGameEmitter, saveScreenshotEmitter } from "../../socket.io/emitters";
import "./displayResults.css";

const DisplayResults = ({ gameId, socket, screenshot }) => {
  const [qrcode, setQrcode] = useState(null);

  const sendScreenshot = async () => {
    const dataUrl = await htmlToImage.toPng(document.getElementById("canvas"));
    saveScreenshotEmitter(socket, dataUrl);
  };
  useEffect(() => {
    const screenshotTimer = setTimeout(async () => {
      await sendScreenshot();
    }, 4000);
    return () => clearTimeout(screenshotTimer);
  }, []);

  useEffect(() => {
    const createQRCode = async () => {
      const opts = {
        errorCorrectionLevel: "H",
        type: "image/png",
        margin: 3,
        color: {
          dark: "#8fdbdb",
          light: "#2b2b2b",
        },
      };
      const apiUrl =
        process.env.NODE_ENV === "production"
          ? "https://dsc-circle-server.herokuapp.com"
          : process.env.REACT_APP_SERVER;
      const urlData = await QRCode.toDataURL(`${apiUrl}/games/screenshot/${gameId}`, opts);

      setQrcode(urlData);
    };
    if (screenshot) {
      createQRCode();
    }
  }, [screenshot]);

  return (
    <div className="landing">
      <p className="landing__text">The final results of your group are displayed to the right.</p>
      <div className={!qrcode ? "invisible" : "qrcode__container"}>
        <p className="landing__text landing__text-smaller">Scan the code below to download the final display</p>
        <img className="results__qrcode" src={`${qrcode}`} alt="screenshot-qrcode" />
      </div>
      <p className="landing__text">If you would like to play again please hit the "Reset" button!</p>
      <ActionButton onClick={() => endGameEmitter(socket)} buttonType={"restart"} text={"Restart\nGame"} />
    </div>
  );
};

export default DisplayResults;
