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
        theme === 'dark'
          ? 'dark:bg-[#1f1f1f] dark:text-[#f5f5f5]'
          : 'bg-[#f5f5f5] text-black'
      } top-15 flex h-screen flex-col gap-5 overflow-auto border-2 border-gray-400 p-3 pt-5 text-center sm:static sm:mt-3`}
    >
      <Profile />
      <hr className='my-3 text-gray-400' />
      <ul>
        <li>All Tasks</li>
        <hr className='my-3 text-gray-400' />
        <li>Today</li>
        <hr className='my-3 text-gray-400' />
        <li>Important</li>
        <hr className='my-3 text-gray-400' />
        <li>Planned</li>
        <hr className='my-3 text-gray-400' />
        <li>Assigned to me</li>
      </ul>
      <hr className='my-3 text-gray-400' />
      <p>+ Add List</p>
      <hr className='my-3 text-gray-400' />
      <TodaysTasks />
    </main>
  )
}
