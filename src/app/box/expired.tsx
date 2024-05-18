import BoxButton from '@/components/ui/box-button'
import Link from 'next/link'

export default function BoxExpired() {
  return (
    <div className='container mx-auto flex h-dvh flex-col items-center justify-between px-4 pb-[2.125rem]'>
      <div className='container mx-auto my-auto flex flex-col items-center space-y-4'>
        <h1 className='font-h1 break-inline text-balance break-keep text-center text-gray-900'>
          이 선물박스는 열 수 없어요
        </h1>
        <p className='font-b4 break-inline text-balance break-keep text-center text-gray-800'>
          선물박스를 열어볼 수 있는 기간이 지났어요.
          <br />
          선물박스의 주인이라면 패키에게 문의해주세요.
        </p>
      </div>
      <Link href='' className='w-full'>
        <BoxButton buttonType='rect' size='l' theme='dark' className='flex w-full justify-center text-center'>
          문의하기
        </BoxButton>
      </Link>
    </div>
  )
}
