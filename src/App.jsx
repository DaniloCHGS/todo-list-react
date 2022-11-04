import { useState } from "react"
import Item from "./Item"

function App() {
  const [list, setItem] = useState(["React", "JavaScript", "Node", "Laravel"])

  const handleDigit = () => {
    
  }

  return (
    <div className="app">
      <div className="todo">
        <div className="title">
          <h1>Todo List</h1>
        </div>
        <div className="input">
          <form action="">
            <input
              type="text"
              placeholder="Adicionar uma tarefa"
              onChange={handleDigit}
            />
            <button className="btn-primary">Adicionar</button>
          </form>
        </div>
        <div className="list-container">
          <ul>
            {list.map((item) => {
              return <Item label={item} />
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
