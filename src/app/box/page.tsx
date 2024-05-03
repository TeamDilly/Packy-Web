import BoxButton from '@/components/ui/box-button'
import Image from 'next/image'

export default function Box() {
  const sender = '밀리'
  const boxName = '이호의생일을축하합니다요'

  return (
    <div className='container mx-auto box-border flex h-screen flex-col items-center justify-between px-[24px] pb-[16px] pt-[48px]'>
      <div className='container mx-auto flex flex-col items-center'>
        <h1 className='font-h1 break- inline text-balance break-keep text-center text-gray-900'>
          {sender}님이 보낸 선물박스가 도착했어요!
        </h1>
        <div className='mt-[16px] rounded-full border-[1px] border-gray-300 bg-gray-100 px-[20px] py-[12px] text-gray-900'>
          {boxName}
        </div>
        <div className='mt-[40px] flex w-3/5 justify-center'>
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
      <BoxButton buttonType='rect' size='l' theme='dark' className='flex w-full justify-center text-center'>
        열어보기
      </BoxButton>
    </div>
  )
}
