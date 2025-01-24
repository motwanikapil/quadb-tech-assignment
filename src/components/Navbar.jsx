import { Grid2x2, List, Menu, MoonStar, Search, SunMedium } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../reducers/themeSlice'
import { toggleLayout } from '../reducers/layoutSlice'

export default function Navbar({ handleSidebar }) {
  const { theme } = useSelector((state) => state.theme)
  const { layout } = useSelector((state) => state.layout)
  const dispatch = useDispatch()

  function handleDarkMode() {
    dispatch(toggleTheme())
  }

  function handleLayoutChange() {
    dispatch(toggleLayout())
  }

  return (
    <main className='flex items-center justify-between p-4 shadow-md'>
      <section className='flex gap-3'>
        <button
          onClick={handleSidebar}
          className='transition-transform duration-300 hover:scale-110'
        >
          <Menu />
        </button>
        <img src='/logo.png' alt='Logo' className='h-8' />
      </section>
      <section className='flex items-center gap-3'>
        <button
          onClick={handleLayoutChange}
          className='transition-transform duration-300 hover:scale-110'
        >
          {layout === 'list' ? <Grid2x2 /> : <List />}
        </button>
        <button
          onClick={handleDarkMode}
          className='transition-transform duration-300 hover:scale-110'
        >
          {theme === 'light' ? <SunMedium /> : <MoonStar />}
        </button>
      </section>
    </main>
  )
}
