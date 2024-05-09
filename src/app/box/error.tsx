'use client'

import { useEffect } from 'react'
import BoxButton from '@/components/ui/box-button'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='container mx-auto flex h-dvh flex-col items-center justify-center space-y-4 px-4'>
      <div className='container mx-auto flex flex-col items-center space-y-1'>
        <h2 className='font-h2 break-inline text-balance break-keep text-center text-gray-900'>오류가 생겼어요</h2>
        <p className='font-b4 break-inline text-balance break-keep text-center text-gray-600'>
          잠시 후 다시 시도해주세요.
        </p>
      </div>
      <BoxButton theme='default' onClick={() => reset()} buttonType='round' size='m'>
        다시 시도하기
      </BoxButton>
    </div>
  )
}
