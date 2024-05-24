import Image from 'next/image'
import { MouseEventHandler } from 'react'
import { cn } from '@/lib/util'

export default function LetterCard({
  letterContent,
  src,
  onClick,
  className,
}: {
  letterContent: string
  src: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  className: string
}) {
  return (
    <button type='button' className={cn(className, 'relative')} onClick={onClick}>
      <div
        className={
          'font-b6 absolute inset-0 h-[87.5%] w-[87.5%] overflow-hidden rounded-lg bg-white px-2.5 py-1.5 text-gray-900'
        }
      >
        {letterContent}
      </div>
      <div className={'right absolute bottom-0 left-[11.1%] h-[87.5%] w-[87.5%]'}>
        <Image src={src} alt='편지봉투' width={500} height={500} />
      </div>
    </button>
  )
}
