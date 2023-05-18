import Image from "next/image";
import photo from '/public/photo.png'

export default function Video() {
  return (
    <div className="container mx-auto mb-[11.75rem]">
      <Image
        src={photo.src}
        alt="photo"
        width={1560}
        height={943}
      />
    </div>
  )
}
