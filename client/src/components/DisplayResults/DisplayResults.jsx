import React, { useState } from "react";
import FormData from "form-data";
import * as htmlToImage from "html-to-image";
import { ActionButton } from "../ActionButton";
import { endGameEmitter } from "../../socket.io/emitters";
import { api, dataToFile } from "../../utils";

const DisplayResults = ({ gameId, socket }) => {
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [screenshot, setScreenshot] = useState(null);
  const [email, setEmail] = useState("");

  const handleScreenshot = async () => {
    const dataUrl = await htmlToImage.toPng(document.getElementById("canvas"));
    const screenshot = await dataToFile(dataUrl, "screenshot.png");
    setScreenshot(screenshot);
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    const fileName = `screenshot_${gameId}.png`;
    const form = new FormData();

    // add data to form object
    form.append("screenshot", screenshot, fileName);
    form.append("email", email);
    form.append("screenshotName", fileName);

    const { data } = await api.post("/games/sendScreenshot", form, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    setEmailSuccess(data.emailStatus);
  };

  return (
    <div className="landing">
      <p className="landing__text">The final results of your group are displayed to the right.</p>
      <p className="landing__text landing__text-smaller">
        If you would like an emailed version of your display click the button below
      </p>
      {emailSuccess ? (
        <div>
          <p>The image has been sent.</p>
          <p>Your email has not been saved and you will not receive additional emails!</p>
        </div>
      ) : (
        <ResultForm
          screenshot={screenshot}
          handleScreenshot={handleScreenshot}
          handleEmailChange={handleEmailChange}
          handleSubmit={handleSubmit}
        />
      )}
      <p className="landing__text">If you would like to play again please hit the "Reset" button!</p>
      <ActionButton onClick={() => endGameEmitter(socket)} buttonType={"restart"} text={"Restart\nGame"} />
    </div>
  );
};

const ResultForm = ({ screenshot, handleScreenshot, handleSubmit, handleEmailChange }) => {
  return !screenshot ? (
    <ActionButton onClick={handleScreenshot} buttonType={"screenshot"} text={"Take Screenshot"} />
  ) : (
    <div className="form form__screenshot">
      <input
        className="form__control form__control-input form__control-input_screenshot"
        placeholder="Email..."
        type="email"
        onChange={handleEmailChange}
      />
      <ActionButton onClick={handleSubmit} buttonType={"send"} text={"Send"} />
    </div>
  );
};

export default DisplayResults;
