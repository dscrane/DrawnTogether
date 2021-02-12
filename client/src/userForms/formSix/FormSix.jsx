import React from "react";
import { FormGroup, FormLabel, FormControl } from "react-bootstrap";

export const FormSix = ({ responses, setResponses }) => {
  const onChange = (event) => {
    event.preventDefault();
    setResponses({ ...responses, [event.target.name]: event.target.value });
  };

  return (
    <FormGroup className="form__group">
      <FormLabel className="form__label">Choose a Color</FormLabel>
      <FormControl
        className="form__control"
        name="color"
        onChange={onChange}
        id="formColor"
        as="select"
        value={responses.color || "DEFAULT"}
      >
        <option value="DEFAULT">Choose...</option>
        <option value="chartreuse">Chartreuse</option>
        <option value="vermilion">Vermilion</option>
        <option value="cobalt">Cobalt</option>
        <option value="teal">Teal</option>
        <option value="kellyGreen">Kelly Green</option>
        <option value="aubergine">Aubergine</option>
      </FormControl>
    </FormGroup>
  );
};
