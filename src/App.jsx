import "./style.css"

export default function App() {
  return <form className="new-item_form">
    <div className="form-row">
    <label htmlFor="item">New item</label>
    <input type="text" id="item"></input>

    </div>
  </form>
}
