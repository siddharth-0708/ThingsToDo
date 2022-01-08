import * as React from "react";
import "./todo-results.scss";
import { TodosContext } from "../../todo-context";

export const TodoResults = () => {
  const { todos, setTodos } = React.useContext(TodosContext);

  const calculateChecked = () => {
    // Fix an ability to calculate completed tasks
    var count = 0;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].checked) {
        count++;
      }
    }
    return count;
  };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
