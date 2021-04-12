import React from "react";
import { connect } from "react-redux";
import { Field, formValueSelector, FormSection } from "redux-form";

const FormOne = ({ currentPlayer, playerForm }) => {
  return (
    <div className="form__group">
      <div className="form__item">
        <label className="form__label">Height</label>
        <Field className="form__control" name={`${currentPlayer}.height`} id="formHeight" component="select">
          <option value="DEFAULT">Choose...</option>
          <option value="16">Tall</option>
          <option value="32">Average</option>
          <option value="48">Short</option>
        </Field>
      </div>
      <div className="form__item">
        <label className="form__label">Interest</label>
        <Field className="form__control" name={`${currentPlayer}.interest`} id="formInterest" component="select">
          <option value="DEFAULT">Choose...</option>
          <option value="27">Numbers</option>
          <option value="36">Words</option>
          <option value="18">Ideas</option>
          <option value="9">Images</option>
          <option value="0">People</option>
        </Field>
      </div>
      <div className="form__item">
        <label className="form__label">Gender</label>
        <Field className="form__control" name={`${currentPlayer}.gender`} id="formGender" component="select">
          <option value="DEFAULT">Choose...</option>
          <option value="2">Male</option>
          <option value="1">Female</option>
          <option value="0">Non Binary</option>
        </Field>
      </div>
      <div className="form__item">
        <label className="form__label">Age</label>
        <Field className="form__control" name={`${currentPlayer}.age`} id="formAge" component="select">
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
        </Field>
      </div>
      <div className="form__item">
        <label className="form__label">Diet</label>
        <Field className="form__control" name={`${currentPlayer}.diet`} id="formDiet" component="select">
          <option value="DEFAULT">Choose...</option>
          <option value="omnivore">Omnivore</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="pescatarian">Pescatarian</option>
          <option value="vegan">Vegan</option>
        </Field>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { playerForm: state.form.playerForm };
};

export default connect(mapStateToProps)(FormOne);

/*
const renderField = ({ input, label, placeholder, type, meta: { touched, error } }) => {
  return (
    <div className="form__group">
      <label className="form__label">{label}</label>
      <input className="form__control" {...input} type={type} placeholder={label + "..."} />
    </div>
  );
};

const addPlayerButton = (onClick) => {
  return (
    <button type="button" onClick={onClick}>
      Add Player
    </button>
  );
};

const renderPlayers = ({ fields, meta: { error, submitFailed } }) => {
  return (
    <div className="form__item form__item-fieldArray">
      {addPlayerButton(() => fields.push())}
      {submitFailed && error && <span>{error}</span>}
      {fields.map((player, index) => {
        return (
          <div key={index}>
            <button type="button" title="Remove Player" onClick={() => fields.remove(index)} />
            <h4>Player #{index + 1}</h4>
            <Field name={`${player}.age`} type="text" component={renderField} label="Age" />
            <Field name={`${player}.height`} type="text" component={renderField} label={"Height"} />
          </div>
        );
      })}
    </div>
  );
};

//  return (
//     <div className="form__group">
//       <FieldArray name="players" component={renderPlayers} />
//     </div>
//   );

*/
