import clsx from 'clsx'
import Image from 'next/image'

export default function PhotoCard({ src, className }: { src: string; className?: string }) {
  return (
    <div className={clsx('bg-white p-1.5 pb-[1.75rem]', className)}>
      <Image src={src} alt='선물 사진' width={500} height={500} />
    </div>
  )
}
