import * as React from "react";
import { TodosContext } from "../../todo-context";
import "./todo-form.scss";

export const TodoForm = (props) => {
  const { todos, setTodos } = React.useContext(TodosContext);
  const [task, setTask] = React.useState("");
  console.log(todos);

  const handleAddTodo = () => {
    // Fin an ability to add new task
    const data = [...todos];
    var obj = {
      id: todos.length,
      label: task,
      checked: false
    };
    data.push(obj);
    setTodos(data);
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
