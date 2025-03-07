import { useState } from "react";
import { TodoList } from "./TodoList";
import { defaultTodos, TodoStatus } from "../../constants/todos";
import "./todosStyles.css";

export const TodosPage = () => {
  const [todos, setTodos] = useState(defaultTodos);
  const [dragItem, setDragItem] = useState(null);
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
  });

  const dragStart = (item) => {
    setDragItem(item);
  };

  const drop = (newStatus) => {
    if (dragItem !== null) {
      setTodos((prev) =>
        prev.map((todo) => {
          if (todo.id === dragItem) {
            return { ...todo, status: newStatus };
          }

          return todo;
        })
      );
    }
  };

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const createTask = (e) => {
    e.preventDefault();
    setTodos((prev) => {
      return [
        ...prev,
        {
          id: Date.now(),
          name: inputs.title,
          description: inputs.description,
          status: TodoStatus.BACKLOG,
        },
      ];
    });
    setInputs({
      title: "",
      description: "",
    });
  };

  return (
    <div className="todos-page-container">
      <form onSubmit={createTask} className="todo-create-container">
        <input
          value={inputs.title}
          onChange={handleChange}
          name="title"
          type="text"
          placeholder="Title"
        />
        <input
          value={inputs.description}
          onChange={handleChange}
          name="description"
          style={{ flex: 1 }}
          type="text"
          placeholder="Description"
        />
        <button type="submit">Create</button>
      </form>
      <div className="todo-list-group">
        <TodoList
          title={"Backlog"}
          todos={todos.filter((todo) => todo.status === TodoStatus.BACKLOG)}
          dragStart={dragStart}
          drop={() => drop(TodoStatus.BACKLOG)}
        />
        <TodoList
          title={"In Progress"}
          todos={todos.filter((todo) => todo.status === TodoStatus.IN_PROGRESS)}
          dragStart={dragStart}
          drop={() => drop(TodoStatus.IN_PROGRESS)}
        />
        <TodoList
          title={"Done"}
          todos={todos.filter((todo) => todo.status === TodoStatus.DONE)}
          dragStart={dragStart}
          drop={() => drop(TodoStatus.DONE)}
        />
      </div>
    </div>
  );
};
