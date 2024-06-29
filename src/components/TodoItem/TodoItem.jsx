import "./TodoItem.scss";

const TodoItem = ({ title, handleClick }) => {
  return (
    <div className="todo-item">
      <h1>{title}</h1>
      <p className="todo-item__remove" onClick={handleClick}>
        Remove
      </p>
    </div>
  );
};

export default TodoItem;
