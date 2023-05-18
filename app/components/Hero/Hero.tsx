import Pill from '@/components/Pill/Pill'

const services: Array<string> = ['MVP', 'Mobile app', 'UX/UI', 'Frontend', 'Backend', 'iOS Engineering', 'Android Engineering', 'Flutter']

export default function Hero() {
  return (
    <div className="hero container mx-auto flex flex-col items-center mb-[8.75rem]">
      <div className='flex flex-col items-center pb-[3.75rem]'>
        <h2 className='mb-1.5'>Reluvotion</h2>
        <p className="text-center text-grey-dark max-w-[455px]">Transforming volunteering with a mobile app that empowers users to make a positive impact.</p>
      </div>
      <div className='flex items-center justify-center gap-4'>
        {services.map((service, index) => (
          <Pill
            key={service + '_' + index}
            label={service}
          />
        ))}
      </div>
    </div>
  )
}
