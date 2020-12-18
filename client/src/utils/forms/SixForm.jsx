import React, {useState} from "react";
import { FormGroup, FormLabel, FormControl } from "react-bootstrap";

export const SixForm = ({ formData, setFormData }) => {
  const [ response, setResponse ] = useState([]);
  const onChange = (event) => {
    event.preventDefault();
    console.log(event.target.value)
    response.push(event.target.value);
    console.log(response)
  };

  return (
    <FormGroup>
      <FormLabel>Choose a Color</FormLabel>
      <FormControl
        onChange={onChange}
        id="formColor"
        as="select"
        defaultValue={"DEFAULT"}
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
