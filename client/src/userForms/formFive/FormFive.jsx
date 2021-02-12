import React from "react";
import { FormGroup, FormLabel, FormControl } from "react-bootstrap";

export const FormFive = ({ responses, setResponses }) => {
  const onChange = (event) => {
    event.preventDefault();
    setResponses({ ...responses, [event.target.name]: event.target.value });
  };

  return (
    <FormGroup className="form__group">
      <FormLabel className="form__label">Relationship to Religion</FormLabel>
      <FormControl
        className="form__control"
        name="religion"
        onChange={onChange}
        id="formReligion"
        as="select"
        value={responses.religion || "DEFAULT"}
      >
        <option value="DEFAULT">Choose...</option>
        <option value="1">Practitioner</option>
        <option value="2">Agnostic</option>
        <option value="3">God-fearing</option>
        <option value="4">Wiccin</option>
        <option value="5">Undecided</option>
      </FormControl>
      <FormLabel className="form__label">Relationship to Culture</FormLabel>
      <FormControl
        className="form__control"
        name="culture"
        onChange={onChange}
        id="formCulture"
        as="select"
        value={responses.culture || "DEFAULT"}
      >
        <option value="DEFAULT">Choose...</option>
        <option value="1">People Magazine reader</option>
        <option value="2">Netflix binger</option>
        <option value="3">Museum attendee</option>
        <option value="4">Cultural practitioner</option>
      </FormControl>
    </FormGroup>
  );
};
