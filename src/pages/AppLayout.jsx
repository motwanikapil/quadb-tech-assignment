import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import AddNewTask from "../components/AddNewTask";
import TodoList from "../components/TodoList";
import CompletedList from "../components/CompletedList";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

export default function AppLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { theme } = useSelector((state) => state.theme);

  function handleSidebar() {
    setIsSidebarOpen((prev) => !prev);
  }

  return (
    <main
      className={`${
        theme === "dark" ? "dark:bg-[#1f1f1f] dark:text-[#f5f5f5]" : ""
      } flex flex-col px-10 py-3 min-h-screen`}
    >
      <Navbar handleSidebar={handleSidebar} />
      <section className="flex w-full gap-3">
        {isSidebarOpen && <Sidebar />}
        <section className="flex flex-col w-full">
          <AddNewTask />
          <TodoList />
          <h3 className="mt-5 mb-3">Completed</h3>
          <CompletedList />
        </section>
        <Outlet />
      </section>
    </main>
  );
}
