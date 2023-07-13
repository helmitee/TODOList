// Tehtävän alkuperäinen toteutus Pekka Pullin käsialaa
import { every } from "lodash";
import React, { useState } from "react";
import "./styles.css";
import { TodoList } from "./TodoList/TodoList";
import { AddInput } from "./AddInput";

// Voit käyttää tätä listaa ykköstehtävässä.
// Kakkostehtävää varten voit alustaa oman listasi
// tyhjänä, eli tämän listan ei tarvitse näkyä
// lopullisessa palautuksessa

export default function App() {
  // Tee tähän kakkostehtävässä Reactin tilaan kytkeytyvä
  // useState-hook, joka pitää sisällään Todo-listan elementit.
  // Lista voi olla aluksi tyhjä ([]). Muista vaihtaa tämä uusi
  // lista myös TodoListin proppeihin!
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

  // Tähän kannattaa tehdä kaikki funktiot, joilla listaa
  // muokataan. Esim. listaan lisääminen, listasta poistaminen,
  // listaelementin siirtäminen. Funktiot voi lähettää muille
  // komponenteille propseina.

  // Allaolevassa rakenteessa on jo <TodoList />, jolle sinun tulee
  // antaa proppina todo-listan elementit. Mene sitten TodoList.jsx:ään
  // ottamaan prop vastaan ja luomaan itse lista.

  // Kakkostehtävässä sinun tulee vielä tuoda tähän
  // AddInput-komponentti, joka löytyy valmiina AddInput-hakemistosta.
  // Sillä lisätään komponentit listaan. Anna sille proppina
  // funktio, jolla lisäät elementin tekemääsi useState-hookiin.
  return (
    <div className="App">
      <h1>TO-DO</h1>
      <AddInput onSubmit={addListItem} />
      <TodoList listItems={list} taskDone={markDone} />
      <p className="loppu"> {everythingIsDone} </p>
    </div>
  );
}
