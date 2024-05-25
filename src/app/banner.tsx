'use client'
import Image from 'next/image'
import BoxButton from '@/components/ui/box-button'

export default function Banner() {
  const googlePlayStoreUrl = 'https://play.google.com/store/apps/details?id=com.packy&hl=ko'
  const appStoreUrl = 'https://apps.apple.com/kr/app/%ED%8C%A8%ED%82%A4/id6477327987'

  const handleClick = () => {
    if (typeof navigator !== 'undefined') {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera

      if (/android/i.test(userAgent)) {
        console.log('android')
        window.location.href = googlePlayStoreUrl
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
        console.log('ios')
        window.location.href = appStoreUrl
      } else {
        console.log('others')
        window.location.href = appStoreUrl
      }
    }
  }

  return (
    <div className='sticky z-40 flex justify-between bg-gray-100 px-4 py-3'>
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
      <BoxButton buttonType='rect' size='s' theme='dark' className='text-nowrap px-4' onClick={handleClick}>
        다운로드
      </BoxButton>
    </div>
  )
}
