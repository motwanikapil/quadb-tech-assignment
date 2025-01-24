import { yupResolver } from '@hookform/resolvers/yup'
import { Bell, CalendarFold, Repeat } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { add } from '../reducers/todoSlice'

const schema = yup.object({
  task: yup.string().trim().required().min(5).max(500),
})

export default function AddNewTask() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const dispatch = useDispatch()

  const { theme } = useSelector((state) => state.theme)

  function onSubmit(data) {
    dispatch(add(data))
    reset()
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      event.target.form.dispatchEvent(
        new Event('submit', { cancelable: true, bubbles: true }),
      )
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${
        theme === 'dark' ? 'dark:bg-[#1f1f1f] dark:text-[#f5f5f5]' : ''
      }flex mt-3 mb-5 box-border flex-col rounded-md border border-transparent bg-[linear-gradient(0deg,rgba(53,121,55,0.1)_0%,rgba(208,255,210,0.1)_100%)] p-3 focus-within:border-green-700`}
    >
      <textarea
        type='text'
        placeholder='Add A Task'
        name='task'
        className='box-border resize-none p-3 focus:outline-0'
        rows='6'
        onKeyDown={handleKeyDown}
        autoFocus
        {...register('task')}
      />
      {errors.task && (
        <p className='text-sm text-red-500'>{errors.task.message}</p>
      )}
      <section className='mt-3 flex items-center justify-between'>
        <article className='flex items-center gap-3'>
          <button type='button'>
            {/* Set Reminder */}
            <Bell />
          </button>
          <button type='button'>
            {/* Repeat */}
            <Repeat />
          </button>
          <button type='button'>
            {/* Add Due Date */}
            <CalendarFold />
          </button>
        </article>
        <button
          type='submit'
          className='cursor-pointer rounded-lg bg-green-200 px-3 py-1.5 text-green-700 uppercase'
        >
          Add New Task
        </button>
      </section>
    </form>
  )
}
