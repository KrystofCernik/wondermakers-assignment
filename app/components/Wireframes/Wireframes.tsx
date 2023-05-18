import Heading from "@/components/Heading/Heading"
import Image from "next/image"
import mainWireframe from '@/wireframes/wireframe_main.png'
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

// const wireframes: Array<string> = [
//   wireframe1.src,
//   wireframe2.src,
//   wireframe3.src,
//   wireframe4.src,
//   wireframe5.src,
//   wireframe6.src,
//   wireframe7.src,
//   wireframe8.src,
//   wireframe9.src,
//   wireframe10.src,
//   wireframe11.src,
//   wireframe12.src,
//   wireframe13.src
// ]

export default function Wireframes() {
  return (
    <div className="wireframes min-w-full overflow-visible">
      <Heading title='Empowering change' />
      {/* <div className="wireframes__grid w-full grid grid-cols-5 grid-rows-3 gap-8 [&>*:nth-child(5n)]:-mb-10">
        {wireframes.map((wireframe, index) => (
          <Image
            src={wireframe}
            alt={`wireframe_${index}`}
            width={360}
            height={727}
          /> 
        ))}
      </div> */}
      <div className={`wireframes__grid w-full overflow-x-visible my-[7.5rem] pb-[20rem] grid grid-cols-5 gap-8`}>
        {columns.map((col, index) => (
          <div className={`
            flex flex-col gap-8 
            ${index === 0 || index === 4 ? '[&>*]:translate-y-fullGap': ''}
            ${index === 1 || index === 3 ? '[&>*]:translate-y-halfGap' : ''}
          `}>
            {col.map((wireframe, index) => (
              <Image
                src={wireframe}
                alt={`wireframe_${index + 1}`}
                width={360}
                height={727}
                className="z-[3]"
              /> 
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
