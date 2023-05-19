'use client'
import Link from 'next/link'
import Logo from '@/components/Logo/Logo'
import Button from '@/components/Button/Button'
import { useLayoutEffect } from 'react'
import gsap from 'gsap'

interface Link {
  label: string,
  href: string
}

const navigation: Array <Link> = [
  {
    label: 'Services',
    href: '/'
  },
  {
    label: 'Case Studies',
    href: '/'
  },
  {
    label: 'Hiring',
    href: '/'
  }
]

export default function Navbar() {

  useLayoutEffect(() => {

    gsap.to('.navbar', {
      top: 0,
      duration: 1.5,
      ease: 'power4.out'
    })

  })

  return (
    <div className="navbar container px-8 2xl:px-0 z-[9] fixed -top-[100%] left-1/2 -translate-x-1/2 h-[120px] mx-auto flex items-center justify-between mix-blend-difference">
      <Logo color='white'/>
      <div className='hidden md:flex items-center gap-8'>
        <ul className='flex items-center gap-8'>
          {navigation.map(link => (
            <Link
              key={link.label}
              href={link.href}
              className='text-white'
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <Button
          label='Contact'
          href='/'
        />
      </div>
    </div>
  )
}
