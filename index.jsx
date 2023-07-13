import React, { useState } from "react";
import "./input.css";

// Tämä on ns. kontrolloitu komponentti, jota käytät
// merkintöjen lisäämiseen. "Kontrolloitu" viittaa siihen,
// että tekstikentän tila on aina tallennettuna useState-hookilla.
// Näin se on helppo löytää, kun Lisää-nappia painetaan, eikä
// sitä tarvitse hakea perinteisen js:n keinoin.

// Ainoa prop, jota AddInput käyttää,
// on onSubmit-funktio, jolle annetaan parametrina lisätty teksti.
// Tämä proppi sinun tulee antaa App.js:ssä, eli tätä komponenttia
// ei pitäisi tarvita muuttaa millään tavalla.
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
