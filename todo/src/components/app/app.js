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
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Build React App'),
      this.createTodoItem('Have a lunch'),
    ],
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

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

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName]};
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

onToggleDone = (id) => {
  this.setState(({ todoData }) => {
    return {
      todoData: this.toggleProperty(todoData, id, 'done')
    };
  });
};

onToggleImportant = (id) => {
  this.setState(({ todoData }) => {
    return {
      todoData: this.toggleProperty(todoData, id, 'important')
    };
  });
};

  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter((el) => el.done ).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className="todo-app">
        <AppHeader toDo={ todoCount } done={ doneCount } />

        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        
        <ToDoList 
          todos={todoData} 
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone} />

        <ItemAddForm onItemAdded={ this.addItem } />
      </div>
    );
  }
}
