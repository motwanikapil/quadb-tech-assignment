import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function CompletedList() {
  const { todos } = useSelector((state) => state.todos);
  return (
    <ul>
      {todos.map(
        (todo) => todo.completed && <Todo todo={todo} key={todo.id} />
      )}
    </ul>
  );
}
