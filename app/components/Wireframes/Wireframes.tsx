'use client'
import Heading from "@/components/Heading/Heading"
import VideoText from "../Video/VideoText"
import { useLayoutEffect } from "react"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"  
import Image from "next/image"
import wireframe1 from '@/wireframes/wireframe_1.png'
import wireframe2 from '@/wireframes/wireframe_2.png'
import wireframe3 from '@/wireframes/wireframe_3.png'
import wireframe4 from '@/wireframes/wireframe_4.png'
import wireframe5 from '@/wireframes/wireframe_5.png'
import wireframe6 from '@/wireframes/wireframe_6.png'
import wireframe7 from '@/wireframes/wireframe_7.png'
import wireframe8 from '@/wireframes/wireframe_8.png'
import wireframe9 from '@/wireframes/wireframe_9.png'
import wireframe10 from '@/wireframes/wireframe_10.png'
import wireframe11 from '@/wireframes/wireframe_11.png'
import wireframe12 from '@/wireframes/wireframe_12.png'
import wireframe13 from '@/wireframes/wireframe_13.png'

const columns: Array<Array<string>> = [
  [
    wireframe1.src,
    wireframe6.src
  ],
  [
    wireframe2.src,
    wireframe7.src,
    wireframe11.src
  ],
  [
    wireframe3.src,
    wireframe8.src,
    wireframe12.src
  ],
  [
    wireframe4.src,
    wireframe9.src,
    wireframe13.src
  ],
  [
    wireframe5.src,
    wireframe10.src
  ]
]

export default function Wireframes() {

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {

      const tlWireframes = gsap.timeline()

      tlWireframes.fromTo('.wireframes .clipped-text', {
        translateY: '-100vh',
      },
      {
        translateY: '0vh',
        ease: 'none',
        scrollTrigger: {
          trigger: '.wireframes',
          start: '-100%',
          end: '0%',
          scrub: true
        }
      })

      tlWireframes.fromTo('.wireframes .clipped-text', {
        opacity: 1
      },
      {
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '.wireframes',
          start: '0%',
          end: '100%',
          scrub: true
        }
      })

      tlWireframes.fromTo('.wireframes h1', {
        opacity: 0
      },
      {
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.wireframes',
          start: '0%',
          end: '100%',
          scrub: true
        }
      })

      tlWireframes.fromTo('.wireframes .clipped-text', {
        opacity: 0
      },
      {
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.wireframes',
          start: '-100%',
          end: '-80%',
          scrub: true
        }
      })

      tlWireframes.fromTo('.wireframe__main', {
        translateY: '180%'
      },
      {
        translateY: '0%',
        scrollTrigger: {
          trigger: '.wireframes',
          start: '0%',
          end: '100%',
          scrub: 1
        }
      })

      tlWireframes.fromTo('.wireframes__grid div', {
        translateY: '260%',
      },
      {
        translateY: '-50%',
        stagger: -0.015,
        scrollTrigger: {
          trigger: '.wireframes',
          start: '0%',
          end: '350%',
          pin: true,
          scrub: 1
        }
      })

      tlWireframes.fromTo('.design__main', {
        translateY: '-100vh',
        opacity: 0
      },
      {
        translateY: '0vh',
        opacity: 1,
        scrollTrigger: {
          trigger: '.designs',
          start: '-100%',
          end: '0%',
          scrub: 1
        }
      })
      
    })

    return () => ctx.revert()

  })

  return (
    <div className="wireframes relative h-screen flex flex-col items-center justify-center z-[10]">
      <Heading title="Empowering change" />
      <VideoText />
      <div className={`wireframes__grid w-max absolute grid grid-cols-5 gap-[2vw] z-[11]`}>
        {columns.map((col, index) => (
          <div
            key={`col_${index + 1}`}
            className={`
              flex flex-col gap-[2vw] 
              ${index === 0 || index === 4 ? '[&>*]:translate-y-fullGap': ''}
              ${index === 1 || index === 3 ? '[&>*]:translate-y-halfGap' : ''}
            `}
          >
            {col.map((wireframe, index) => (
              <Image
                key={`wireframe_${index + 1}`}
                src={wireframe}
                alt={`wireframe_${index + 1}`}
                width={360}
                height={727}
                className="z-[3] max-w-none w-[250px] lg:w-[360px]"
              /> 
            ))}
          </div>
        ))}
      </div>
      <Image
        src={wireframe12.src}
        alt="wireframe"
        width={360}
        height={727}
        className="wireframe__main absolute w-[250px] lg:w-[360px] z-[11]"
      />
    </div>
  )
}
