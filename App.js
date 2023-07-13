
import { every } from "lodash";
import React, { useState } from "react";
import "./styles.css";
import { TodoList } from "./TodoList/TodoList";
import { AddInput } from "./AddInput";


export default function App() {
  
  const [list, setList] = useState([]);

  function addListItem(item) {
    const newItem = { text: item, done: false };
    list.find((i) => i.text === newItem.text)
      ? alert("Keksi uusi tehtävä! Tämä on jo työn alla.")
      : setList([...list, newItem]);
  }

  function markDone(item) {
    const newState = list.map((i) => {
      return i.text === item.text ? { ...i, done: !item.done } : { ...i };
    });
    setList(newState);
  }

  const everythingIsDone = every(list, (item) => item.done)
    ? "ei keskeneräisiä tehtäviä"
    : "";

  
  return (
    <div className="App">
      <h1>TO-DO</h1>
      <AddInput onSubmit={addListItem} />
      <TodoList listItems={list} taskDone={markDone} />
      <p className="loppu"> {everythingIsDone} </p>
    </div>
  );
}
