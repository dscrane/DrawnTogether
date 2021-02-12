import React from "react";
import { FormGroup, FormLabel, FormControl } from "react-bootstrap";

export const FormThree = ({ responses, setResponses }) => {
  const onChange = (event) => {
    event.preventDefault();
    setResponses({ ...responses, [event.target.name]: event.target.value });
  };

  return (
    <FormGroup className="form__group">
      <FormLabel className="form__label">Relationship to Money</FormLabel>
      <FormControl
        className="form__control"
        name="money"
        onChange={onChange}
        id="formMoney"
        as="select"
        value={responses.money || "DEFAULT"}
      >
        <option value="DEFAULT">Choose...</option>
        <option value="0">Miserly</option>
        <option value="2">Spend-thrift</option>
        <option value="3">Saver</option>
        <option value="1">Does not Apply</option>
      </FormControl>
      <FormLabel className="form__label">Relationship to Food</FormLabel>
      <FormControl
        className="form__control"
        name="food"
        onChange={onChange}
        id="formFood"
        as="select"
        value={responses.food || "DEFAULT"}
      >
        <option value="DEFAULT">Choose...</option>
        <option value="45">I will try anything</option>
        <option value="135">A foodie</option>
        <option value="270">A picky eater</option>
        <option value="45">See-food Dieter</option>
      </FormControl>
    </FormGroup>
  );
};
