'use client'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLayoutEffect } from "react";

import './Video.scss'

export default function Video() {

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)

    const viewportWidth = window.innerWidth
    let clipPathX: string = '2rem'

    if (viewportWidth > 1560) {
      clipPathX = (viewportWidth - 1560) / 2 + 'px'
    } else {
      clipPathX = '2rem'
    }

    let ctx = gsap.context(() => {

      gsap.fromTo('.video', {
        clipPath: `inset(0 ${clipPathX} 0 ${clipPathX})`,
      },
      {
        clipPath: `inset(0 0px 0 0px)`,
        scrollTrigger: {
          trigger: 'body',
          start: '0%',
          end: '10%',
          scrub: 1
        }
      })

      gsap.fromTo('.video', {
        translateY: '30%',
        clipPath: `inset(0 0px 0 0px)`
      },
      {
        translateY: 0,
        clipPath: `inset(0 ${clipPathX} 0 ${clipPathX})`,
        duration: 3,
        ease: 'power4.out',
        delay: 0.5
      })

    })

    return () => ctx.revert()

  })

  return (
    <div className="video__wrapper relative">
      <div
        className='video mx-0 translate-y-1/3'
        style={{clipPath: `inset(0 0px 0 0px`}}
      >
        <video autoPlay loop muted style={{ maxWidth: 'none', height: '100vh', width: '100%', objectFit: 'cover' }}>
          <source src={require('/public/video.mp4')} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}
