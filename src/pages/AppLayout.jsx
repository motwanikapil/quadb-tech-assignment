import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import AddNewTask from '../components/AddNewTask'
import TodoList from '../components/TodoList'
import CompletedList from '../components/CompletedList'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

export default function AppLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const { theme } = useSelector((state) => state.theme)

  function handleSidebar() {
    setIsSidebarOpen((prev) => !prev)
  }

  return (
    <main
      className={`${
        theme === 'dark' ? 'dark:bg-[#1f1f1f] dark:text-[#f5f5f5]' : ''
      } relative flex min-h-screen flex-col px-10 py-3`}
    >
      <Navbar handleSidebar={handleSidebar} />
      <section className='relative flex w-full gap-3'>
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-64 transform bg-gray-800 text-white transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } z-20`}
        >
          <Sidebar />
        </div>

        {/* Overlay */}
        {isSidebarOpen && (
          <div
            className='fixed inset-0 z-10 bg-black/50'
            onClick={handleSidebar}
          ></div>
        )}

        {/* Main Content */}
        <section
          className={`flex w-full flex-col transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? 'md:ml-64' : 'ml-0'
          }`}
        >
          <AddNewTask />
          <TodoList />
          <h3 className='mt-5 mb-3'>Completed</h3>
          <CompletedList />
        </section>

        <Outlet />
      </section>
    </main>
  )
}
