import React from "react";
import { FormGroup, FormLabel, FormControl } from "react-bootstrap";

export const TwoForm = ({ responses, setResponses }) => {
  const onChange = (event) => {
    event.preventDefault();
    setResponses({ ...responses, [event.target.name]: event.target.value });
  };

  return (
    <FormGroup>
      <FormLabel>Time</FormLabel>
      <FormControl
        name="time"
        onChange={onChange}
        id="formTemporal"
        as="select"
        value={responses.time || "DEFAULT"}
      >
        <option value="DEFAULT">Choose...</option>
        <option value="18">Morning</option>
        <option value="45">Evening</option>
      </FormControl>
      <FormLabel>Personality</FormLabel>
      <FormControl
        name="personality"
        onChange={onChange}
        id="formPersonality"
        as="select"
        value={responses.personality || "DEFAULT"}
      >
        <option value="DEFAULT">Choose...</option>
        <option value="60">Introvert</option>
        <option value="31">Extrovert</option>
      </FormControl>
      <FormLabel>Hair</FormLabel>
      <FormControl
        name="hair"
        onChange={onChange}
        id="formHair"
        as="select"
        value={responses.hair || "DEFAULT"}
      >
        <option value="DEFAULT">Choose...</option>
        <option value="10">Curly</option>
        <option value="18">Straight</option>
        <option value="25">Wavy</option>
      </FormControl>
    </FormGroup>
  );
};
