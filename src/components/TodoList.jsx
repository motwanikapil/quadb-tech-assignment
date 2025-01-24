import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function TodoList() {
  const { todos } = useSelector((state) => state.todos);
  const { layout } = useSelector((state) => state.layout);
  return (
    <ul
      className={`w-full ${
        layout === "grid"
          ? `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-${Math.max(
              4,
              todos.length
            )}`
          : ""
      } gap-3`}
    >
      {todos.map(
        (todo) => !todo.completed && <Todo todo={todo} key={todo.id} />
      )}
    </ul>
  );
}
