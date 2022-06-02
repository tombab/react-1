import React, { useState } from "react";
import GenericCheckbox from "./components/generic-checkbox";
import "./App.css";

const App = () => {
  // ================================================= ARRAYS
  const arrayToFill = new Array(5);

  // ================================================= STATE
  const [isChecked, setIsChecked] = useState(arrayToFill.fill(false));

  // ================================================= INLINE METHODS
  const toggleCheck = (index) => {
    setIsChecked((prevState) => {
      const newState = [...prevState];
      newState[index] = !prevState[index];
      return newState;
    });
  };

  const toggleCheckAll = () => {
    if (isChecked.includes(false)) {
      setIsChecked([...arrayToFill].fill(true));
    } else {
      setIsChecked([...arrayToFill].fill(false));
    }
  };

  return (
    <div className="app">
      <div className="checkboxContainer">
        <input
          type="checkbox"
          id="selectAll"
          checked={isChecked.includes(false) ? false : true}
          onChange={toggleCheckAll}
        />
        <label htmlFor="selectAll">Select all</label>

        {isChecked.map((check, index) => {
          return (
            <GenericCheckbox
              key={index}
              id={index}
              label={index+1}
              onChange={() => {
                toggleCheck(index);
              }}
              checked={check}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;