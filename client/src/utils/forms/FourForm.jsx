import React from "react";
import { FormGroup, FormLabel, FormControl } from "react-bootstrap";

export const FourForm = ({ responses, setResponses }) => {
  const onChange = (event) => {
    event.preventDefault();
    setResponses({ ...responses, [event.target.name]: event.target.value });
  };

  return (
    <FormGroup className="form__group">
      <FormLabel className="form__label">Relationship to Nature</FormLabel>
      <FormControl
        className="form__control"
        name="nature"
        onChange={onChange}
        id="formNature"
        as="select"
        value={responses.nature || "DEFAULT"}
      >
        <option value="DEFAULT">Choose...</option>
        <option value="hollow">Video Gamer</option>
        <option value="stroke">Happy on the porch</option>
        <option value="ring">Nature Lover</option>
        <option value="none">Climate activist</option>
      </FormControl>
      <FormLabel className="form__label">
        Relationship to Social Media
      </FormLabel>
      <FormControl
        className="form__control"
        name="media"
        onChange={onChange}
        id="formMedia"
        as="select"
        value={responses.media || "DEFAULT"}
      >
        <option value="DEFAULT">Choose...</option>
        <option value="thinner">What is social media</option>
        <option value="thicker">Lurker</option>
        <option value="thin">Regular poster</option>
        <option value="thick">Influencer</option>
      </FormControl>
      <FormLabel className="form__label">Relationship to Progress</FormLabel>
      <FormControl
        className="form__control"
        name="progress"
        onChange={onChange}
        id="formProgress"
        as="select"
        value={responses.progress || "DEFAULT"}
      >
        <option value="">Curmudgeon</option>
        <option value="">C'est Le Vie</option>
        <option value="">Reluctant Participant</option>
        <option value="">Activist</option>
      </FormControl>
    </FormGroup>
  );
};
