import React from "react";
import { TodoItem } from "./TodoItem";

// Tuo tähän elementtiin proppina todo-listasi tehtävät
// (esim. props.items jos items oli propin nimi).
// Tuota map-funktiolla lista tehtävistä. Jokainen
// listan elementti on TodoItem-komponentti, joka löytyy
// TodoItem.jsx-tiedostosta. Muista, että React-elementtejä
// tuotetaan kirjoittamalla <TodoItem /> eikä esim. TodoItem().
export const TodoList = (props) => {
  const elements = props.listItems.map((item, index) => (
    <TodoItem key={index} item={item} taskDone={props.taskDone}></TodoItem>
  ));

  return <div>{elements}</div>;
};
