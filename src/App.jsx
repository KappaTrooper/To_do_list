import { useState } from "react";
import "./style.css";

export default function App() {
  const [newItem, setNewItem] = useState("")
  
  return (
    <>
      <form className="new-item_form">
        <div className="form-row">
          <label htmlFor="item">New item</label>
          <input type="text" id="item"></input>
        </div>
        <button className="btn">Add</button>
      </form>

      <h1 className="header"> Todo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox"/>
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  );
}
