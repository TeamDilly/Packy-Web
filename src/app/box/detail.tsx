import Image from 'next/image'
import { GiftBoxResponse } from '@/lib/types'
import PhotoCard from '@/components/box/photo-card'

export default function BoxDetail({ box }: { box: GiftBoxResponse }) {
  return (
    <>
      <div className='container relative -z-50 mx-auto box-border flex h-dvh flex-col bg-[#303030]'>
        <div className='container px-8'>
          <p className='font-b2 absolute top-8 self-start text-white'>From. {box.senderName}</p>
          <PhotoCard
            className='absolute top-[15%] w-[36%] -rotate-3 bg-purple-300'
            src={'https://packy-bucket.s3.ap-northeast-2.amazonaws.com/admin/design/Box/Box_1%401x.png'}
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
