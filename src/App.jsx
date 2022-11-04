import { useEffect, useState } from "react";
import Item from "./Item";
import axios from "axios";

function App() {
  const [list, setItemList] = useState([]);
  const [checkedList, setItemCheckedList] = useState([]);
  const [item, setItem] = useState("");

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const { data } = await axios.get("http://localhost:3000/itens");
    setItemList(data);
  };

  const add = async () => {
    if (item && item.length >= 3) {
      let payload = { id: idAuto(), label: item, checked: false };
      let response = await axios.post("http://localhost:3000/itens", payload);
      setItem("");
      getList();
    }
  };

  const idAuto = () => {
    if (!list.length) {
      console.log(1);
      return 1;
    }
    let { id } = list[list.length - 1];
    id++;
    console.log(id);
    return id;
  };

  const hasDelete = async (item) => {
    let { id } = item;
    let response = await axios.delete(`http://localhost:3000/itens/${id}`);
    getList();
  };

  const hasChecked = (checked) => {
    // Quando o item está checkado é alterado para lista checked
    if (checked.checked) {
      setItemCheckedList([checked, ...checkedList]);
      onRemoveItemChecked(checked);
    } else {
      // Quando o item não está checkado é alterado para primeira lista
      setItemList([...list, checked]);
      onRemoveItemChecked(checked);
    }
  };

  const onRemoveItemChecked = (checked) => {
    if (checked.checked) {
      let newList = list.filter((item) => item.id != checked.id);
      setItemList(newList);
    } else {
      let newList = checkedList.filter((item) => item.id != checked.id);
      setItemCheckedList(newList);
    }
  };

  return (
    <div className="app">
      <div className="todo">
        <div className="title">
          <h1>Todo List</h1>
        </div>
        <div className="input">
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              add();
            }}
          >
            <input
              type="text"
              placeholder="Adicionar uma tarefa"
              onChange={(e) => setItem(e.target.value)}
              value={item}
            />
            <button type="button" className="btn-primary" onClick={add}>
              Confirmar
            </button>
          </form>
        </div>

        {list.length ? (
          <div className="list-container">
            <label className="tag-state">A fazer</label>
            <ul>
              {list.map((item) => {
                return (
                  <Item
                    item={item}
                    checked={hasChecked}
                    deleting={hasDelete}
                    key={item.id}
                  />
                );
              })}
            </ul>
          </div>
        ) : (
          ""
        )}

        {checkedList.length ? (
          <div className="list-container list-checked">
            <label className="tag-state">Feito</label>
            <ul>
              {checkedList.map((item) => {
                return (
                  <Item
                    item={item}
                    checked={hasChecked}
                    deleting={hasDelete}
                    key={item.id}
                  />
                );
              })}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
