import Image from 'next/image'
import clsx from 'clsx'
import { MouseEventHandler } from 'react'

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
    <button type='button' className={clsx(className)} onClick={onClick}>
      <div
        className={
          'font-b6 relative h-[87.5%] w-[87.5%] overflow-hidden rounded-lg bg-white px-2.5 py-1.5 text-gray-900'
        }
      >
        {letterContent}
      </div>
      <div className={'right relative -top-[75%] left-[11.1%] h-[87.5%] w-[87.5%]'}>
        <Image src={src} alt='편지봉투' width={500} height={500} />
      </div>
    </button>
  )
}
