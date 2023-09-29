import { useState } from 'react';
const InputTodo = ({ addTodoItem }) => {
    const [ title, setTitles ] = useState('');
    const [ message, setMessage ] = useState('');
    const handleChange = (e) => {
        setTitles(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
       if (title.trim()) { 
        addTodoItem(title);
        setTitles('');
        setMessage('');
       } else {
        setMessage('Please add item!!');
       }
    };
  
  return (
    <>
   <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add Todo..." value={title} onChange={handleChange}/>
          <button>Submit</button>
    </form>
    <span>{message}</span>
    </>
  );
};

export default InputTodo;