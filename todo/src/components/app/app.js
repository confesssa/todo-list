import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import ToDoList from "../todo-list/todo-list";

import "./app.css";

const App = () => {
  const todoData = [
    { label: "Drink Coffee", important: false, key: "1" },
    { label: "Build React App", important: true, key: "2" },
    { label: "Have a lunch", important: false, key: "3" },
  ];
  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <ToDoList todos={todoData} />
    </div>
  );
};

export default App;
