import clsx from 'clsx'
import ReactPlayer from 'react-player'

export default function MusicPlayer({ url, className }: { url: string; className?: string }) {
  return (
    <div className={clsx(className, 'music-player-width')}>
      <ReactPlayer style={{ borderRadius: 8, overflow: 'hidden' }} url={url} width={'auto'} height={'auto'} />
    </div>
  )
}
