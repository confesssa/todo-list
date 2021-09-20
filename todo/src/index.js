import React from 'react';
import reactDom from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import ToDoList from './components/todo-list';

const App = () => {

  const todoData = [
    {label: 'Drink Coffee', important: false, key: 1},
    {label: 'Build React App', important: true, key: 2},
    {label: 'Have a lunch', important: false, key: 3},
  ]
  return (
    <div>
    <AppHeader />
    <SearchPanel />
    <ToDoList todos = { todoData }/>
  </div>
  )
};

reactDom.render(<App />, document.getElementById('root'));
