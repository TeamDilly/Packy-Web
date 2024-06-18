import Image from 'next/image'
import { GiftBoxResponse } from '@/lib/types'
import { cn } from '@/lib/util'
import BoxArrButton from '@/components/box/arr/button'

type BoxArrProps = { box: GiftBoxResponse }

export default function BoxArr({ box }: BoxArrProps) {
  return (
    <div
      className={cn(
        'item-fadein container relative mx-auto flex h-[calc(100dvh-4rem)] flex-col items-center justify-between px-6 py-4',
      )}
    >
      <div className='container mx-auto my-auto flex flex-col items-center space-y-6'>
        <div className='mx-auto flex flex-col items-center'>
          <h1 className='font-h1 break-inline text-balance break-keep text-center text-gray-900'>
            {box.senderName}님이 보낸
            <br />
            선물박스가 도착했어요!
          </h1>
          <div className='mt-4 rounded-full border border-gray-300 bg-gray-100 px-5 py-3 text-gray-900'>
            {box.letterContent}
          </div>
        </div>

        <div className='flex w-[64%] justify-center'>
          <Image src={box.box.boxNormal} alt='선물박스' layout='responsive' width={300} height={300} priority />
        </div>
      </div>
      <BoxArrButton data={box} />
    </div>
  )
}
