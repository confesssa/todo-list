import React from 'react';
import reactDom from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import ItemStatusFilter from './components/item-status-filter';
import ToDoList from './components/todo-list';

import './index.css'

const App = () => {

  const todoData = [
    {label: 'Drink Coffee', important: false, key: 1},
    {label: 'Build React App', important: true, key: 2},
    {label: 'Have a lunch', important: false, key: 3},
  ]
  return (
    <div className='todo-app'>
    <AppHeader toDo={1} done={3} />
    <div className="top-panel d-flex">
    <SearchPanel />
    <ItemStatusFilter />
    </div>
    <ToDoList todos = { todoData }/>
  </div>
  )
};

reactDom.render(<App />, document.getElementById('root'));
