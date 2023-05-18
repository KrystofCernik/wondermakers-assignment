import Heading from "@/components/Heading/Heading"
import Image from "next/image"
import mockup from "@/designs/mockup.png"
import design1 from "@/designs/design_1.png"
import design2 from "@/designs/design_2.png"
import design3 from "@/designs/design_3.png"
import design4 from "@/designs/design_4.png"
import design5 from "@/designs/design_5.png"

const designs: Array<string> = [
  mockup.src
  // design1.src,  
  // design2.src,  
  // design3.src,  
  // design4.src,  
  // design5.src  
] 

export default function Designs() {
  return (
    <div className="designs relative bg-green-dark before:content-[''] before:absolute before:inset-0 before:z-[1] before:bg-gradient-black">
      <div className="min-h-screen flex items-center justify-center whitespace-nowrap">
        <Heading title="Comes to life"/>
        {designs.map((design, index) => (
          <div className="absolute z-[3]">
            <Image
              src={design}
              alt={`design_${index + 1}`}
              width={360}
              height={727}
              className="rounded-[2.75rem]"
            />
          </div>
        ))}
      </div>
      <div className="greetings h-screen flex items-center justify-center">
        <h2 className="text-green-light z-[2]">Hope you like it.</h2>
      </div>
    </div>
  )
}
