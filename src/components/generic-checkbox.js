import React from "react";

const GenericCheckbox = ({ id, label, checked, onChange }) => {
  return (
    <>
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <label htmlFor={id}>Item {label}</label>
    </>
  );
};

export default GenericCheckbox;
