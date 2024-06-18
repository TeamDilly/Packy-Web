'use client'

import Link from 'next/link'
import BoxButton from '@/components/ui/box-button'
import { GiftBoxResponse } from '@/lib/types'
import { useContext, useEffect } from 'react'
import { Context } from '@/lib/context-provider'

export default function BoxArrButton({ data }: { data: GiftBoxResponse }) {
  const context = useContext(Context)

  if (!context) {
    throw new Error()
  }

  const { setData } = context

  useEffect(() => {
    setData(data)
  }, [data, setData])

  return (
    <Link href={`/open`} className='flex w-full justify-center text-center'>
      <BoxButton buttonType='rect' size='l' theme='dark' className='flex w-full justify-center text-center'>
        열어보기
      </BoxButton>
    </Link>
  )
}
