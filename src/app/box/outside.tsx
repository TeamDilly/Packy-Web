import Image from 'next/image'
import BoxButton from '@/components/ui/box-button'
import { MouseEventHandler } from 'react'

type BoxOutsideProps = { sender: string; boxName: string; onOpenClick: MouseEventHandler }

export default function BoxOutside({ sender, boxName, onOpenClick }: BoxOutsideProps) {
  return (
    <div className='container mx-auto box-border flex h-screen flex-col items-center justify-between px-6 py-4'>
      <div className='container mx-auto my-auto flex flex-col items-center'>
        <h1 className='font-h1 break- inline text-balance break-keep text-center text-gray-900'>
          {sender}님이 보낸 선물박스가 도착했어요!
        </h1>
        <div className='mt-4 rounded-full border border-gray-300 bg-gray-100 px-5 py-3 text-gray-900'>{boxName}</div>
        <div className='mt-10 flex w-3/5 justify-center'>
          <Image
            src={`/img/box/Box_1.webp`}
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
