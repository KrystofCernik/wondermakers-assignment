import Link from 'next/link'
import Logo from '@/components/Logo/Logo'
import Button from '@/components/Button/Button'

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

  return (
    <div className="navbar container fixed top-0 left-1/2 -translate-x-1/2 h-[120px] mx-auto flex items-center justify-between">
      <Logo />
      <div className='flex items-center gap-8'>
        <ul className='flex items-center gap-8'>
          {navigation.map(link => (
            <Link
              key={link.label}
              href={link.href}
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
