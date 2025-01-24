import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import TodoDetail from "./components/TodoDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path=":id" element={<TodoDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
