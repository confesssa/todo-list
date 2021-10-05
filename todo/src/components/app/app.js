import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter/item-status-filter";
import ToDoList from "../todo-list/todo-list";
import ItemAddForm from "../item-add-form/item-add-form";

import "./app.css";
import React, { Component } from "react";

export default class App extends Component {

  maxId = 100;
  state = {
    todoData: [
      { label: "Drink Coffee", important: false, id: 1 },
      { label: "Build React App", important: true, id: 2 },
      { label: "Have a lunch", important: false, id: 3 },
    ],
  };

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    }

    this.setState (({ todoData }) => {
      const newArray = [...todoData, newItem];
      return {
        todoData: newArray
      }
    })
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      todoData.splice(idx, 1);
      return {
        todoData: newArray,
      };
    });
  };

  onToggleImportant = (id) => {
    console.log('Toggle done', id)
  } 

  onToggleDone = (id) => {
    console.log('Toggle important', id)
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />

        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        
        <ToDoList 
          todos={this.state.todoData} 
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone} />

        <ItemAddForm onItemAdded={ this.addItem } />
      </div>
    );
  }
}
