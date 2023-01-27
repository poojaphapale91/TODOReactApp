import React from "react";
import "../App.css";
import { useState } from "react";
import { enterCode } from "../helpers/Keycodes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

export default function Todos() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const changeText = (event) => {
    setText(event.target.value);
  };

  const keyDownText = (event) => {
    const textNotEmpty = text.length > 0;
    const newText = text.trim();
    const isEnter = event.keyCode === enterCode;
    if (isEnter && textNotEmpty) {
      setItems([...items, newText]);
      setText("");
    }
  };

  const deleteItem = (id) => {
    console.log(id);
    const updatedItems = items.filter((elem, ind) => {
      return ind !== id;
    });
    setItems(updatedItems);
  };

  const deleteAll = () => {
    setItems([]);
  };

  return (
    <>
      <div className="App-header">
        <input
          className="todoInput"
          placeholder="Enter Task"
          value={text}
          onChange={changeText}
          onKeyDown={keyDownText}
          autoFocus
        />
        <div className="items">
          {items.map((elem, ind) => {
            return (
              <div className="itemList" key={ind}>
                <span className="itemName">{elem}</span>

                <FontAwesomeIcon
                  icon="fas fa-trash"
                  onClick={() => deleteItem(ind)}
                />
              </div>
            );
          })}
        </div>
        <div className="deleteAll">
          <button className="btn" onClick={deleteAll}>
            Delete All
          </button>
          <button className="btn">Completed List</button>
        </div>
      </div>
    </>
  );
}
