'use client'
import Navbar from '@/app/components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Video from './components/Video/Video'
import Wireframes from './components/Wireframes/Wireframes'
import Designs from './components/Designs/Designs'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add('overflow-hidden')
    setTimeout(() => {
      document.body.classList.remove('overflow-hidden')
    }, 3300)
  }, [])

  return (
    <div className="w-full pt-[15rem]">
      <Navbar />
      <Hero />
      <Video />
      <Wireframes />
      <Designs />
    </div>
  )
}
