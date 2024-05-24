'use client'
import { Suspense, useState } from 'react'
import BoxDetail from '@/app/detail'
import Banner from '@/app/banner'
import Timer from '@/app/timer'
import BoxArr from '@/app/arr'
import OpenMotion from '@/app/open-motion'
import { useBox } from '@/lib/fetchers'
import BoxExpired from '@/app/expired'
import { GIFTBOX_NOT_FOUND, GIFTBOX_URL_EXPIRED } from '@/lib/types'
import { notFound } from 'next/navigation'
import Loading from '@/app/loading'

type BoxStatus = 'closed' | 'opening' | 'opened' | 'fading'

type BoxProps = {
  id: string
  opened: BoxStatus
  onOpenClick: () => void
  onOpenComplete: () => void
}

function Box({ id, opened, onOpenClick, onOpenComplete }: BoxProps) {
  const { data, isLoading, error } = useBox(id)

  if (isLoading) return <Loading />
  if (data === undefined || error) throw error

  if (data.code === GIFTBOX_URL_EXPIRED) return <BoxExpired />
  else if (data.code === GIFTBOX_NOT_FOUND) notFound()

  if (data.data === undefined) throw new Error()

  return (
    <>
      {opened === 'opened' && <Timer />}
      <Banner />
      {opened === 'opened' && <BoxDetail box={data.data} />}
      {(opened === 'opening' || opened === 'fading') && <OpenMotion onComplete={onOpenComplete} />}
      {(opened === 'closed' || opened === 'fading') && data && (
        <BoxArr box={data.data} onOpenClick={onOpenClick} opened={opened} />
      )}
    </>
  )
}

export default function Page({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const id = searchParams['box']
  if (typeof id !== 'string') notFound()
  const [opened, setOpened] = useState<BoxStatus>('closed')

  const onOpenClick = () => {
    setOpened('fading')
    setTimeout(() => setOpened('opening'), 300)
  }
  const onOpenComplete = () => setOpened('opened')

  return (
    <div className='container'>
      <Suspense fallback={<Loading />}>
        <Box id={id} opened={opened} onOpenClick={onOpenClick} onOpenComplete={onOpenComplete} />
      </Suspense>
    </div>
  )
}
