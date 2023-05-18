import Navbar from '@/components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Video from './components/Video/Video'
import Wireframes from './components/Wireframes/Wireframes'
import Designs from './components/Designs/Designs'

export default function Home() {
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
