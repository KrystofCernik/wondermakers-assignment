import './Video.scss'

export default function VideoText() {
  return (
    <div className='clipped-text absolute -top-[4.7%]'>
      <video className='clipped' autoPlay loop muted style={{ maxWidth: 'none', height: '100vh', width: '100%', objectFit: 'cover' }}>
        <source src={require('/public/video.mp4')} type="video/mp4" />
      </video>

      <svg height={'100%'} width={'100%'}>
        <clipPath id='text-mask' height={'100%'} width={'100%'} >
          <text x={'50%'} y={'50%'} fill='#0EB898' textAnchor='middle'>Empowering</text>
          <text x={'50%'} y={'71%'} fill='#0EB898' textAnchor='middle'>change</text>
        </clipPath>
      </svg>
    </div>
  )
}
