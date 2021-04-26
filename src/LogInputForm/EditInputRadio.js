import React from "react";

function EditRadioInput(props) {
  return (
    <input
      type="radio"
      id={props.id}
      name={props.type}
      value={props.value}
      checked={props.type === props.value}
      onChange={props.handleChange}
    />
  );
}

export default EditRadioInput;
