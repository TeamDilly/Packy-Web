import Image from 'next/image'
import { GiftBoxResponse } from '@/lib/types'
import PhotoCard from '@/components/box/photo-card'
import Sticker from '@/components/box/sticker'
import LetterCard from '@/components/box/letter-card'

export default function BoxDetail({ box }: { box: GiftBoxResponse }) {
  return (
    <>
      <div className='container relative -z-50 mx-auto box-border flex h-[calc(100dvh-6.125rem)] flex-col overflow-x-hidden overflow-y-scroll bg-[#303030] px-8'>
        <p className='font-b2 relative mt-8 self-start text-white'>From. {box.senderName}</p>
        <div className='container relative mx-auto mt-8 grid h-full grid-cols-2 grid-rows-3 place-items-center'>
          <PhotoCard
            className='photo-card-width h-auto -rotate-3'
            src={'https://packy-bucket.s3.ap-northeast-2.amazonaws.com/admin/design/Box/Box_1%401x.png'}
          />
          <Sticker className='sticker-width ml-8 rotate-[10deg]' src={box.stickers[0].imgUrl} />
          <Sticker className='sticker-width mr-8 -rotate-[10deg]' src={box.stickers[0].imgUrl} />
          <LetterCard
            letterContent={box.letterContent}
            src={box.envelope.imgUrl}
            className='letter-card-width rotate-3'
          />
        </div>

        <Image
          src={box.box.boxTop}
          className='absolute -top-[30px] right-0 -z-10 self-end'
          alt='선물상자 포장지'
          width={280}
          height={130}
        />
      </div>
    </>
  )
}
