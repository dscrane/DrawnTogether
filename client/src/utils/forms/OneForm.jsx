import React, { useState } from "react";
import { FormGroup, FormLabel, FormControl } from "react-bootstrap";

export const OneForm = ({ responses, setResponses }) => {
  const onChange = (event) => {
    event.preventDefault();
    setResponses({ ...responses, [event.target.name]: event.target.value });
  };

  return (
    <FormGroup>
      <FormLabel>Height</FormLabel>
      <FormControl
        name="height"
        onChange={onChange}
        id="formHeight"
        as="select"
        value={responses.height || "DEFAULT"}
      >
        <option value="DEFAULT">Choose...</option>
        <option value="16">Tall</option>
        <option value="32">Average</option>
        <option value="48">Short</option>
      </FormControl>
      <FormLabel>Interest</FormLabel>
      <FormControl
        name="interest"
        onChange={onChange}
        id="formInterest"
        as="select"
        value={responses.interest || "DEFAULT"}
      >
        <option value="DEFAULT">Choose...</option>
        <option value="27">Numbers</option>
        <option value="36">Words</option>
        <option value="18">Ideas</option>
        <option value="9">Images</option>
        <option value="0">People</option>
      </FormControl>
      <FormLabel>Gender</FormLabel>
      <FormControl
        name="gender"
        onChange={onChange}
        id="formGender"
        as="select"
        value={responses.gender || "DEFAULT"}
      >
        <option value="DEFAULT">Choose...</option>
        <option value="2">Male</option>
        <option value="1">Female</option>
        <option value="0">Non Binary</option>
      </FormControl>
      <FormLabel>Age</FormLabel>
      <FormControl
        name="age"
        onChange={onChange}
        id="formAge"
        as="select"
        value={responses.age || "DEFAULT"}
      >
        <option value="DEFAULT">Choose...</option>
        <option value="400">0-10</option>
        <option value="40">11-20</option>
        <option value="360">21-30</option>
        <option value="80">31-40</option>
        <option value="320">41-50</option>
        <option value="120">51-60</option>
        <option value="280">61-70</option>
        <option value="160">71-80</option>
        <option value="240">81-90</option>
        <option value="200">91-100</option>
      </FormControl>
      <FormLabel>Diet</FormLabel>
      <FormControl
        name="diet"
        onChange={onChange}
        id="formDiet"
        as="select"
        value={responses.diet || "DEFAULT"}
      >
        <option value="DEFAULT">Choose...</option>
        <option value="carnivore">Carnivore</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="pescatarian">Pescatarian</option>
        <option value="vegan">Vegan</option>
      </FormControl>
    </FormGroup>
  );
};
