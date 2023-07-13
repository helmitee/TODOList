import React from "react";
import "./todo-item.css";

// Tässä komponentissa majailee yksittäinen listalla oleva
// tehtävä. Se saa proppina oman tekstinsä.
export function TodoItem(props) {
  // Voit toteuttaa kolmostehtävässä tehtävän merkkaamisen
  // tehdyksi esimerkiksi lisäämällä tähän useState-hookin,
  // jossa on done-tieto boolean-arvona. Toinen tapa pitää
  // kirjaa tehdyistä tehtävistä on tehdä se jo App.js:ssä,
  // käyttämällä listassa stringien sijaan js-objekteja joissa
  // on teksti _ja_ tuo boolean-arvo.

  const markDone = () => {
    props.taskDone(props.item);
  };
  // Alle tuotat yksittäisen listalla olevan elementin renderöinnin.
  // Elementin tiedot tulevat komponenttiin props-muuttujassa.

  return (
    <div className="todo-item">
      <p
        onClick={markDone}
        style={{ textDecoration: props.item.done ? "line-through" : "none" }}
      >
        {props.item.text}
      </p>
    </div>
  );
}
