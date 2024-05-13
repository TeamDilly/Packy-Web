import Image from 'next/image'
import { GiftBoxResponse } from '@/lib/types'
import PhotoCard from '@/components/box/photo-card'
import Sticker from '@/components/box/sticker'

export default function BoxDetail({ box }: { box: GiftBoxResponse }) {
  return (
    <>
      <div className='container relative -z-50 mx-auto box-border flex h-dvh flex-col bg-[#303030] px-8'>
        <div className='container relative mx-auto flex h-full flex-col'>
          <p className='font-b2 absolute top-8 self-start text-white'>From. {box.senderName}</p>
          <PhotoCard
            className='absolute top-[calc(100dvh*0.12)] w-[calc(100vw*0.41)] -rotate-3'
            src={'https://packy-bucket.s3.ap-northeast-2.amazonaws.com/admin/design/Box/Box_1%401x.png'}
          />
          <Sticker
            className='absolute right-0 top-[calc(100dvh*0.17)] w-[calc(100vw*0.28)] rotate-[10deg]'
            src={box.stickers[0].imgUrl}
          />
          <Sticker
            className='absolute left-0 top-[calc(100dvh*0.43)] w-[calc(100vw*0.28)] -rotate-[10deg]'
            src={box.stickers[0].imgUrl}
          />
        </div>

        <Image
          src={box.box.boxTop}
          className='absolute -top-[30px] right-0 self-end'
          alt='선물상자 포장지'
          width={280}
          height={130}
        />
      </div>
    </>
  )
}
