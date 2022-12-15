/* IMPORTS */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ClipLoader } from "react-spinners";
import QRCode from "qrcode";
import { toPng } from "html-to-image";
import { updateScreenshot } from "../../../../redux/reducers/sessionSlice";
/* ------ */

export const QRContainer = ({ _id, screenshot }) => {
  const dispatch = useDispatch();
  const [qrcode, setQrcode] = useState(null);
  const [loading, setLoading] = useState(true);

  const sendScreenshot = async () => {
    const screenshotData = await toPng(document.getElementById("canvas"));
    await dispatch(updateScreenshot({ _id, screenshotData }));
  };

  // Screenshot delay timer
  useEffect(() => {
    const screenshotTimer = setTimeout(async () => {
      await sendScreenshot();
    }, 6000);
    return () => clearTimeout(screenshotTimer);
  }, []);

  // Screenshot QR code update
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
    <div className="qrcode__container">
      <p className="landing__text landing__text-smaller">Scan the code below to download the final display</p>
      {loading ? (
        <ClipLoader color="hsl(180, 51%, 71%)" loading={loading} size={50} speedMultiplier={0.65} />
      ) : (
        <img className="results__qrcode" src={`${qrcode}`} alt="screenshot-qrcode" />
      )}
    </div>
  );
};