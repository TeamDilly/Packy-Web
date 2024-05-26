'use client'
import { Suspense, useEffect, useState } from 'react'
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

interface Params {
  [key: string]: string
}

export default function Page() {
  const [params, setParams] = useState<Params>({})
  const [opened, setOpened] = useState<BoxStatus>('closed')

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const paramsObject: Params = {}
    searchParams.forEach((value, key) => {
      paramsObject[key] = value
    })
    setParams(paramsObject)
  }, [])

  const id: string | undefined = params['box']

  const onOpenClick = () => {
    setOpened('fading')
    setTimeout(() => setOpened('opening'), 300)
  }
  const onOpenComplete = () => setOpened('opened')

  return (
    <div className='container'>
      <Suspense fallback={<Loading />}>
        {id !== undefined && <Box id={id} opened={opened} onOpenClick={onOpenClick} onOpenComplete={onOpenComplete} />}
      </Suspense>
    </div>
  )
}
