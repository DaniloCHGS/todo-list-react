function App() {
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
              name=""
              id=""
              placeholder="Adicionar uma tarefa"
            />
            <button className="btn-primary">Adicionar</button>
          </form>
        </div>
        <div className="list-container">
          <ul>
            <li className="list-item">Estudar React</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
