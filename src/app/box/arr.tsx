import Image from 'next/image'
import BoxButton from '@/components/ui/box-button'
import { MouseEventHandler } from 'react'
import { GiftBoxResponse } from '@/lib/types'
import clsx from 'clsx'

type BoxArrProps = { box: GiftBoxResponse; onOpenClick: MouseEventHandler; opened: 'closed' | 'fading' }

export default function BoxArr({ box, onOpenClick, opened }: BoxArrProps) {
  return (
    <div
      className={clsx(
        { 'item-fadeout': opened === 'fading' },
        'item-fading container relative mx-auto flex h-[calc(100dvh-4rem)] flex-col items-center justify-between px-6 py-4',
      )}
    >
      <div className='container mx-auto my-auto flex flex-col items-center'>
        <h1 className='font-h1 break-inline text-balance break-keep text-center text-gray-900'>
          {box.senderName}님이 보낸
          <br />
          선물박스가 도착했어요!
        </h1>
        <div className='mt-4 rounded-full border border-gray-300 bg-gray-100 px-5 py-3 text-gray-900'>
          {box.letterContent}
        </div>
        <div className='my-6 flex w-[64%] justify-center'>
          <Image
            src={box.box.boxNormal}
            alt='선물박스'
            style={{
              width: '100%',
              height: 'auto',
            }}
            width={300}
            height={300}
          />
        </div>
      </div>
      <BoxButton
        buttonType='rect'
        size='l'
        theme='dark'
        className='flex w-full justify-center text-center'
        onClick={onOpenClick}
      >
        열어보기
      </BoxButton>
    </div>
  )
}
