import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toPng } from "html-to-image";
import QRCode from "qrcode";
import { ClipLoader } from "react-spinners";
import { ActionButton } from "../ActionButton";
import { endGame, updateScreenshot } from "../../redux/reducers/sessionSlice";
import "./finalPanel.css";

const FinalPanel = ({ _id, screenshot }) => {
  const dispatch = useDispatch();

  const [qrcode, setQrcode] = useState(null);
  const [loading, setLoading] = useState(true);

  const sendScreenshot = async () => {
    const screenshotData = await toPng(document.getElementById("canvas"));
    await dispatch(updateScreenshot({ _id, screenshotData }));
  };

  useEffect(() => {
    const screenshotTimer = setTimeout(async () => {
      await sendScreenshot();
    }, 6000);
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
        process.env.NODE_ENV === "production" ? "https://drawntogetherapp.herokuapp.com" : process.env.REACT_APP_SERVER;
      const urlData = await QRCode.toDataURL(`${apiUrl}/games/screenshot/${_id}`, opts);

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
        <p className="landing__text">The final results for your group...</p>
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
        <p className="restart__text">Play again. Results may vary!</p>
        {/*<p className="restart__text restart__text-smaller"></p>*/}
        <ActionButton onClick={async () => await dispatch(endGame(_id))} buttonType={"restart"} text={"Play\nAgain"} />
      </div>
    </div>
  );
};

export default FinalPanel;
