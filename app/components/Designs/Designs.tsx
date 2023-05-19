'use client'
import Heading from "@/components/Heading/Heading"
import Image from "next/image"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLayoutEffect } from "react"
import mockup from "@/designs/mockup.png"
import design1 from "@/designs/design_1.png"
import design2 from "@/designs/design_2.png"
import design3 from "@/designs/design_3.png"
import design4 from "@/designs/design_4.png"
import design5 from "@/designs/design_5.png"

const designs: Array<string> = [
  design5.src,  
  design1.src,
  design2.src,
  mockup.src, 
  design3.src,  
  design4.src,  
  design5.src  
] 

export default function Designs() {

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)

    let ctx = gsap.context(() => {

      gsap.fromTo('.design', {
        opacity: 0
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: '.designs',
          start: '-5%',
          end: '0%',
          scrub: true
        }
      })

      gsap.to('.design', {
        translateX: '0%',
        scrollTrigger: {
          trigger: '.designs',
          start: '0%',
          end: '30%',
          pin: true,
          scrub: 1
        }
      })

    })

    return () => ctx.revert()

  })

  return (
    <div className="designs relative z-[10] bg-green-dark before:content-[''] before:absolute before:inset-0 before:z-[1] before:bg-gradient-black">
      <div className="min-h-screen flex items-center justify-center whitespace-nowrap">
        <Heading title="Comes to life"/>
        <div className="absolute flex items-center gap-[2vw]">
          {designs.map((design, index) => (
            <Image
              key={`design_${index}`}
              src={design}
              alt={`design_${index + 1}`}
              width={360}
              height={727}
              className={`
                rounded-[2.75rem] max-w-none
                ${index === 3 ? 'design__main z-[12] w-[250px] lg:w-[360px]': 'design w-[220px] lg:w-[324px] z-[3]'}
                ${index === 0 ? 'translate-x-[320%] lg:translate-x-[335%]': ''}
                ${index === 1 ? 'translate-x-[210%] lg:translate-x-[225%]': ''}
                ${index === 2 ? 'translate-x-[110%] lg:translate-x-[115%]': ''}
                ${index === 4 ? '-translate-x-[110%] lg:-translate-x-[115%]': ''}
                ${index === 5 ? '-translate-x-[210%] lg:-translate-x-[225%]': ''}
                ${index === 6 ? '-translate-x-[320%] lg:-translate-x-[335%]': ''}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
