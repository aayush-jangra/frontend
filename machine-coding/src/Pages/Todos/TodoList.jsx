import { TodoItem } from "./TodoItem";
import "./todosStyles.css";

export const TodoList = ({ title, todos, dragStart, drop }) => {
  return (
    <div
      className="todo-list-container"
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={drop}
    >
      <h2>{title}</h2>
      {todos.map((todo) => (
        <TodoItem dragStart={dragStart} key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
