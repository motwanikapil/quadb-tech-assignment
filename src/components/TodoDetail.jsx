import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Todo from './Todo'
import { ArrowLeftCircle } from 'lucide-react'

export default function TodoDetail() {
  const { id } = useParams()
  const todo = useSelector((state) =>
    state.todos.todos.find((todo) => todo.id === id),
  )
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* For larger screens (Desktop/Tablet) */}
      <div className='mx-auto hidden w-1/2 md:block'>
        <main>
          <button className='mb-3' onClick={() => navigate('/')}>
            <ArrowLeftCircle size='30' />
          </button>
          <Todo todo={todo} />
          <hr className='text-gray-400' />
        </main>
      </div>

      {/* For mobile screens */}
      <div className='fixed inset-0 z-50 flex items-center justify-center bg-gray-500/50 md:hidden'>
        <main className='relative flex h-1/2 w-11/12 flex-col overflow-auto rounded-lg bg-white p-4 shadow-lg'>
          <button onClick={() => navigate('/')} className='mb-3'>
            <ArrowLeftCircle size='30' />
          </button>
          <Todo todo={todo} />
          <hr className='mt-4 text-gray-400' />
        </main>
      </div>
    </>
  )
}
