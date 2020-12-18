import React, { useState } from "react";
import { FormGroup, FormLabel, FormControl } from "react-bootstrap";

export const TwoForm = ({ formData, setFormData }) => {
 const [ response, setResponse ] = useState([]);
  const onChange = (event) => {
    event.preventDefault();
    console.log(event.target.value)
    response.push(event.target.value);
    console.log(response)
  };

  return (
    <FormGroup>
      <FormLabel>Time</FormLabel>
      <FormControl
        onChange={onChange}
        id="formTemporal"
        as="select"
        defaultValue={"DEFAULT"}
      >
        <option value="DEFAULT">Choose...</option>
        <option value="18">Morning</option>
        <option value="45">Evening</option>
      </FormControl>
      <FormLabel>Personality</FormLabel>
      <FormControl
        onChange={onChange}
        id="formPersonality"
        as="select"
        defaultValue={"DEFAULT"}
      >
        <option value="DEFAULT">Choose...</option>
        <option value="60">Introvert</option>
        <option value="31">Extrovert</option>
      </FormControl>
      <FormLabel>Hair</FormLabel>
      <FormControl
        onChange={onChange}
        id="formHair"
        as="select"
        defaultValue={"DEFAULT"}
      >
        <option value="DEFAULT">Choose...</option>
        <option value="10">Curly</option>
        <option value="18">Straight</option>
        <option value="25">Wavy</option>
      </FormControl>
    </FormGroup>
  );
};
