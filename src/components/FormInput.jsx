import React from "react";
const formInput = (props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  return (
    <div className="formInput">
      <label>{label}</label>
      {/* <input
        name={props.name}
        ref={props.refer}
        placeholder={props.placeholder}
      /> */}
      <input {...inputProps} onChange={onChange} />
      <span>{errorMessage}</span>{" "}
    </div>
  );
};

export default formInput;
