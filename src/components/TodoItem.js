import React from 'react';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const { completed, id, title } = props.todo;
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={completed}
        onChange={() => props.handleChangeProps(id)}
      />
      <span style={completed ? completedStyle : null}>
        {title}
      </span>
      ;
      <button onClick={() => props.deleteTodoProps(id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
