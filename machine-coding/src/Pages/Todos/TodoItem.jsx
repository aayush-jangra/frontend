import "./todosStyles.css";

export const TodoItem = ({ todo, dragStart }) => {
  const bgColor = () => {
    switch (todo.status) {
      case 0:
        return "lightGray";
      case 1:
        return "lightBlue";
      case 2:
        return "lightGreen";
      default:
        return "lightGray";
    }
  };

  return (
    <div
      onDragStart={() => dragStart(todo.id)}
      draggable
      className="todo-item"
      style={{ backgroundColor: bgColor() }}
    >
      <div className="todo-item-title">{todo.name}</div>
      <div className="todo-item-description">{todo.description}</div>
      <div className="todo-item-subtitle">{todo.id}</div>
    </div>
  );
};
