import React from "react";
import { useState } from "react";

function Button_Function() {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  };

  return (
    <>
      <div>Button_Function{value}</div>
      <button onClick={increment}>+</button>
    </>
  );
}

export default Button_Function;
