'use client'
import { useState } from 'react'
import BoxDetail from '@/app/box/detail'
import Banner from '@/app/box/banner'
import Timer from '@/app/box/timer'
import BoxArr from '@/app/box/arr'
import OpenMotion from '@/app/box/open-motion'
import { useBox } from '@/lib/fetchers'
import BoxExpired from '@/app/box/expired'
import { GIFTBOX_NOT_FOUND, GIFTBOX_URL_EXPIRED } from '@/lib/types'
import { notFound } from 'next/navigation'

function Loading() {
  return <h1>로딩중</h1>
}

const expired = 'a11ab8e3-a068-498c-a415-487964cad3d5'
const normal = 'ae4154a0-67ad-4991-b560-d67b5c6bfd8f'

export default function Box() {
  const [opened, setOpened] = useState<'closed' | 'opening' | 'opened'>('closed')
  const { data, isLoading, error } = useBox(normal)

  const onOpenClick = () => setOpened('opening')
  const onOpenComplete = () => setOpened('opened')

  if (isLoading) return <Loading />
  if (data === undefined || error) throw error

  if (data.code === GIFTBOX_URL_EXPIRED) return <BoxExpired />
  else if (data.code === GIFTBOX_NOT_FOUND) notFound()

  if (data.data === undefined) throw new Error()

  return (
    <div className='container overflow-y-hidden'>
      {opened === 'opened' && <Timer />}
      <Banner />
      {opened === 'opened' && <BoxDetail box={data.data} />}
      {opened === 'opening' && <OpenMotion onComplete={onOpenComplete} />}
      {opened === 'closed' && data && <BoxArr box={data.data} onOpenClick={onOpenClick} />}
    </div>
  )
}
