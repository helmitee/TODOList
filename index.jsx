import React, { useState } from "react";
import "./input.css";

export const AddInput = (props) => {
  const [inputState, setInputState] = useState("");
  return (
    <div class="input-container">
      <input
        className="input-field"
        type="text"
        value={inputState}
        onChange={(event) => setInputState(event.target.value)}
      />
      <button
        className="input-button"
        onClick={() => {
          props.onSubmit(inputState);
          setInputState("");
        }}
      >
        Lisää
      </button>
    </div>
  );
};
