import { Star, Trash } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove, toggleImportant, toggleTask } from '../reducers/todoSlice'
import { NavLink } from 'react-router-dom'

export default function Todo({ todo }) {
  const dispatch = useDispatch()
  const { layout } = useSelector((state) => state.layout)
  return (
    <li
      className={`flex flex-col ${
        !todo.completed && layout === 'grid'
          ? 'rounded-md border-2 border-gray-300'
          : ''
      }`}
    >
      {(layout === 'list' || todo.completed) && (
        <hr className='text-gray-400' />
      )}
      <section className='my-2 flex items-center justify-between px-3 py-5'>
        <section className='flex gap-3'>
          <input
            type='checkbox'
            name='done'
            id='done'
            onChange={() => dispatch(toggleTask(todo.id))}
            checked={!!todo.completed}
            className='h-5 w-5 accent-green-700'
          />
          <NavLink
            to={`/${todo.id}`}
            className='cursor-pointer hover:underline hover:underline-offset-3'
          >
            <p className={`text-sm ${todo.completed ? 'line-through' : ''}`}>
              {todo.task}
            </p>
          </NavLink>
        </section>
        <section
          className={`flex ${
            !todo.completed ? 'flex-col' : ''
          } items-center gap-3 sm:flex-row`}
        >
          <button
            className='cursor-pointer'
            onClick={() => dispatch(remove(todo.id))}
          >
            <Trash className='hover:text-red-500' />
          </button>
          <button onClick={() => dispatch(toggleImportant(todo.id))}>
            {todo.important ? <Star fill='yellow' /> : <Star />}
          </button>
        </section>
      </section>
    </li>
  )
}
