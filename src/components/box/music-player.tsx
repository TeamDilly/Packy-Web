import clsx from 'clsx'
import ReactPlayer from 'react-player'

export default function MusicPlayer({ className }: { className?: string }) {
  return (
    <div className={clsx(className, 'music-player-width')}>
      <ReactPlayer
        style={{ borderRadius: 8, overflow: 'hidden' }}
        url='https://www.youtube.com/watch?v=HoAaO_Oe7OM'
        width={'auto'}
        height={'auto'}
      />
    </div>
  )
}
