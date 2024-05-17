import Image from 'next/image'
import BoxButton from '@/components/ui/box-button'

export default function Banner() {
  return (
    <div className='sticky z-50 flex justify-between bg-gray-100 px-4 py-3'>
      <div className='flex space-x-2'>
        <Image
          className='rounded-lg'
          src='/icons/Icon-marketing-1024x1024.webp'
          alt='패키 앱 아이콘'
          width={40}
          height={40}
        />
        <div className='flex flex-col text-nowrap '>
          <p className='font-b6 text-gray-700'>선물박스 평생 보관하려면?</p>
          <p className='font-b4 text-gray-900'>앱 다운받고 선물박스 저장하기</p>
        </div>
      </div>
      <BoxButton buttonType='rect' size='s' theme='dark' className='text-nowrap px-4'>
        다운로드
      </BoxButton>
    </div>
  )
}
