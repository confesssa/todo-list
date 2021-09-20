import ToDoListItem from "./todo-list-item";
import './todo-list.css';

const ToDoList = ({ todos }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps} = item;
    return (
      <li key = { id }>
      <ToDoListItem 
      {...itemProps}
      />
    </li>
    )
  })
  return (
    <ul className='list-group'>
  { elements }
    </ul>
  )
};

export default ToDoList;
