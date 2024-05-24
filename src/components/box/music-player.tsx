import ReactPlayer from 'react-player'
import { cn } from '@/lib/util'

export default function MusicPlayer({ url, className }: { url: string; className?: string }) {
  return (
    <div className={cn(className, 'music-player-width')}>
      <ReactPlayer style={{ borderRadius: 8, overflow: 'hidden' }} url={url} width={'auto'} height={'auto'} />
    </div>
  )
}
