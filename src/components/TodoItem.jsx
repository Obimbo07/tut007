import styles from '../styles/TodoItem.css'
const TodoItem = ({ itemProp, handleChange, delTodo }) => {
    return <li className={styles.item}>
    <div className={styles.content}>
    <input type="checkbox" 
    checked={itemProp.compelted} 
    onChange={() => handleChange(itemProp.id)} 
    />
    <button onClick={() => delTodo(itemProp.id)}>Delete</button>
    {itemProp.title}
    </div>
    </li>
    
  };

export default TodoItem;
  