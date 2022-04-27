import React, { useEffect, useState } from "react";
import { toPng } from "html-to-image";
import QRCode from "qrcode";
import { ClipLoader } from "react-spinners";
import { ActionButton } from "../ActionButton";
import "./displayResults.css";

const DisplayResults = ({ gameId, updateScreenshot, screenshot, endGame }) => {
  const [qrcode, setQrcode] = useState(null);
  const [loading, setLoading] = useState(true);

  const sendScreenshot = async () => {
    const dataUrl = await toPng(document.getElementById("canvas"));
    updateScreenshot(gameId, dataUrl);
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
      setLoading(false);
    };
    if (screenshot) {
      createQRCode();
    }
  }, [screenshot]);

  return (
    <div className="results">
      <div className="results__content">
        <p className="landing__text">...the final results for your group...</p>
        <div className="qrcode__container">
          <p className="landing__text landing__text-smaller">Scan the code below to download the final display</p>
          {loading ? (
            <ClipLoader color="hsl(180, 51%, 71%)" loading={loading} size={50} speedMultiplier={0.65} />
          ) : (
            <img className="results__qrcode" src={`${qrcode}`} alt="screenshot-qrcode" />
          )}
        </div>
      </div>
      <div className="results__restart">
        <p className="landing__text">If you would like to play again please hit the "Reset" button!</p>
        <ActionButton onClick={() => endGame(gameId)} buttonType={"restart"} text={"Restart\nGame"} />
      </div>
    </div>
  );
};

export default DisplayResults;
