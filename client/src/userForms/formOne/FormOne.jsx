import React from "react";

export const FormOne = ({ responses, setResponses }) => {
  const onChange = (event) => {
    event.preventDefault();
    setResponses({ ...responses, [event.target.name]: event.target.value });
  };

  return (
    <div className="form__group">
      <div className="form__item">
        <label className="form__label">Height</label>
        <select
          className="form__control"
          name="height"
          onChange={onChange}
          id="formHeight"
          value={responses.height || "DEFAULT"}
        >
          <option value="DEFAULT">Choose...</option>
          <option value="16">Tall</option>
          <option value="32">Average</option>
          <option value="48">Short</option>
        </select>
      </div>
      <div className="form__item">
        <label className="form__label">Interest</label>
        <select
          className="form__control"
          name="interest"
          onChange={onChange}
          id="formInterest"
          value={responses.interest || "DEFAULT"}
        >
          <option value="DEFAULT">Choose...</option>
          <option value="27">Numbers</option>
          <option value="36">Words</option>
          <option value="18">Ideas</option>
          <option value="9">Images</option>
          <option value="0">People</option>
        </select>
      </div>
      <div className="form__item">
        <label className="form__label">Gender</label>
        <select
          className="form__control"
          name="gender"
          onChange={onChange}
          id="formGender"
          value={responses.gender || "DEFAULT"}
        >
          <option value="DEFAULT">Choose...</option>
          <option value="2">Male</option>
          <option value="1">Female</option>
          <option value="0">Non Binary</option>
        </select>
      </div>
      <div className="form__item">
        <label className="form__label">Age</label>
        <select
          className="form__control"
          name="age"
          onChange={onChange}
          id="formAge"
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
        </select>
      </div>
      <div className="form__item">
        <label className="form__label">Diet</label>
        <select
          className="form__control"
          name="diet"
          onChange={onChange}
          id="formDiet"
          value={responses.diet || "DEFAULT"}
        >
          <option value="DEFAULT">Choose...</option>
          <option value="carnivore">Carnivore</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="pescatarian">Pescatarian</option>
          <option value="vegan">Vegan</option>
        </select>
      </div>
    </div>
  );
};
