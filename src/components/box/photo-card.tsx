import Image from 'next/image'
import { MouseEventHandler } from 'react'
import { cn } from '@/lib/util'

export default function PhotoCard({
  src,
  alt,
  onClick,
  className,
}: {
  src: string
  alt: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
}) {
  return (
    <button type='button' className={cn('bg-white p-1.5 pb-[1.75rem]', className)} onClick={onClick}>
      <Image src={src} alt={alt} width={500} height={500} />
    </button>
  )
}
