import Image from 'next/image'
import logoBlack from '@/logos/logo-black.svg'

export default function Logo() {
  return (
    <>
      <Image
        src={logoBlack.src}
        alt='logo'
        width={logoBlack.width}
        height={logoBlack.height}
      />
    </>
  )
}
