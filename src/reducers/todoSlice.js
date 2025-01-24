import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [
    {
      id: crypto.randomUUID(),
      task: "Add New Tasks",
      important: false,
      completed: false,
    },
    {
      id: crypto.randomUUID(),
      task: "Dynamic Todo List",
      important: false,
      completed: false,
    },
    {
      id: crypto.randomUUID(),
      task: "Nice Todo List",
      important: false,
      completed: false,
    },
    {
      id: crypto.randomUUID(),
      task: "Use It Today",
      important: false,
      completed: false,
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add(state, action) {
      state.todos.push({
        id: crypto.randomUUID(),
        important: false,
        completed: false,
        ...action.payload,
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    remove(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    update(state, action) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        } else {
          return todo;
        }
      });

      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    toggleTask(state, action) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }

        return todo;
      });

      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    toggleImportant(state, action) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, important: !todo.important };
        }

        return todo;
      });

      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { add, remove, toggleTask, toggleImportant, update } =
  todoSlice.actions;

export default todoSlice.reducer;
