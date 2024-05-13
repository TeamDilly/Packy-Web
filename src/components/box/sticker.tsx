import Image from 'next/image'

export default function Sticker({ src, className }: { src: string; className?: string }) {
  return (
    <div className={className}>
      <Image src={src} alt='스티커' width={500} height={500} />
    </div>
  )
}
