import React, {useState} from "react";
import { FormGroup, FormLabel, FormControl } from "react-bootstrap";

export const FourForm = ({ nextPlayer }) => {
  const [ response, setResponse ] = useState([]);
  const onChange = (event) => {
    event.preventDefault();
    console.log(event.target.value)
    response.push(event.target.value);
    console.log(response)
  };


  return (
    <FormGroup>
      <FormLabel>Relationship to Nature</FormLabel>
      <FormControl
        onChange={onChange}
        id="formNature"
        as="select"
        defaultValue={"DEFAULT"}
      >
        <option value="DEFAULT">Choose...</option>
        <option value="1">Video Gamer</option>
        <option value="2">Happy on the porch</option>
        <option value="3">Nature Lover</option>
        <option value="4">Climate activist</option>
      </FormControl>
      <FormLabel>Relationship to Social Media</FormLabel>
      <FormControl
        onChange={onChange}
        id="formMedia"
        as="select"
        defaultValue={"DEFAULT"}
      >
        <option value="DEFAULT">Choose...</option>
        <option value="1">What is social media</option>
        <option value="2">Lurker</option>
        <option value="3">Regular poster</option>
        <option value="4">Influencer</option>
      </FormControl>
    </FormGroup>
  );
};
