import Image from 'next/image'
import logoBlack from '@/logos/logo-black.svg'
import logoWhite from '@/logos/logo-white.svg'

export default function Logo({ color }: { color?: string }) {
  return (
    <div>
      <Image
        src={color === 'white' ? logoWhite.src : logoBlack.src}
        alt='logo'
        width={logoBlack.width}
        height={logoBlack.height}
      />
    </div>
  )
}
