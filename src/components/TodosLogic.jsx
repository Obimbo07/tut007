import { v4 as uuidv4 } from "uuid";
import InputTodo from "./InputTodo";
import TodoItem from "./TodoItem";
import TodosList from "./TodosList";
import { useState } from 'react';

const TodosLogic = () => {
const [todos, setTodos] = useState([
    {
        id: uuidv4(),
        title: 'Attend meeting with Chairman',
        completed: false,
    },
    {
        id: uuidv4(),
        title: 'Attend meeting with Chairman',
        completed: false,
    },
    {
        id: uuidv4(),
        title: 'Attend meeting with Chairman',
        completed: false,
    }, 
    {
        id: uuidv4(),
        title: 'Attend meeting with Chairman',
        completed: false,
    },

]);
const handleChange = (id) => {
    setTodos((prevState) =>
    prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    })
  );
};
const delTodo = (id) => {
    setTodos([
        ...todos.filter((todo) => {
          return todo.id !== id;
        }),
      ]);
};
const addTodoItem = (title) => {
    const newTodo = {
        id: uuidv4(),
        title: title,
        completed: false,
      };
      setTodos([...todos, newTodo]);
};

  return (
     <div> 
      <InputTodo addTodoItem={addTodoItem}/>
      <TodosList  todosProps={todos} setTodos={setTodos} handleChange={handleChange} delTodo={delTodo}/>
      </div>
  );
};

export default TodosLogic;