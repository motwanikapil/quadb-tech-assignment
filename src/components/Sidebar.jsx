import React, { useEffect } from 'react'
import Profile from './Profile'
import { useSelector } from 'react-redux'

function TodaysTasks() {
  return (
    <main>
      <h3>Today's Tasks</h3>
      <p>11</p>
    </main>
  )
}

export default function Sidebar() {
  const { theme } = useSelector((state) => state.theme)
  return (
    <main
      className={`${
        theme === 'dark' ? 'dark:bg-[#1f1f1f] dark:text-[#f5f5f5]' : ''
      } absolute top-15 flex h-screen w-52 flex-col gap-5 overflow-auto border-2 border-gray-400 p-3 text-center sm:relative sm:w-lg`}
    >
      <Profile />
      <ul>
        <li>All Tasks</li>
        <li>Today</li>
        <li>Important</li>
        <li>Planned</li>
        <li>Assigned to me</li>
      </ul>
      <p>+ Add List</p>
      <TodaysTasks />
    </main>
  )
}
