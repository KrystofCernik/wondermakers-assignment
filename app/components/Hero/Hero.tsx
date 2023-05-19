'use client'
import Pill from '@/components/Pill/Pill'
import gsap from 'gsap'
import { useLayoutEffect } from 'react'

const services: Array<string> = ['MVP', 'Mobile app', 'UX/UI', 'Frontend', 'Backend', 'iOS Engineering', 'Android Engineering', 'Flutter']

export default function Hero() {

  useLayoutEffect(() => {

    gsap.to('.hero__content', {
      translateY: 0,
      opacity: 1,
      duration: 2,
      ease: 'power4.out',
      delay: 0.6
    })

  })

  return (
    <div className="hero container px-8 2xl:px-0 mx-auto mb-[8.75rem]">
      <div className='hero__content flex flex-col items-center  translate-y-1/3 opacity-0'>
        <div className='flex flex-col items-center pb-[3.75rem]'>
          <h2 className='mb-1.5'>Reluvotion</h2>
          <p className="text-center text-grey-dark max-w-[455px]">Transforming volunteering with a mobile app that empowers users to make a positive impact.</p>
        </div>
        <div className='flex items-center justify-start md:justify-center gap-4 overflow-y-hidden overflow-x-auto whitespace-nowrap'>
          {services.map((service, index) => (
            <Pill
              key={service + '_' + index}
              label={service}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
