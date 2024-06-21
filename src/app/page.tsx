'use client'
import { Suspense, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useBox } from '@/lib/fetchers'
import { BoxStatus, GIFTBOX_NOT_FOUND, GIFTBOX_URL_EXPIRED } from '@/lib/types'
import { notFound } from 'next/navigation'
import Loading from '@/app/loading'
import BoxContainer from '@/app/box-container'

const BoxExpired = dynamic(() => import('@/app/expired'))

type BoxProps = {
  id: string
  opened: BoxStatus
  onOpenClick: () => void
  onOpenComplete: () => void
}

function Box({ id, opened, onOpenClick, onOpenComplete }: BoxProps) {
  const { data, isLoading, error } = useBox(id)

  if (isLoading) return <Loading />
  if (error) throw error

  if (data?.code === GIFTBOX_URL_EXPIRED) return <BoxExpired />
  else if (data?.code === GIFTBOX_NOT_FOUND) notFound()

  if (data?.data === undefined) throw new Error()

  return <BoxContainer data={data.data} opened={opened} onOpenClick={onOpenClick} onOpenComplete={onOpenComplete} />
}

export default function Page() {
  const [params, setParams] = useState<Record<string, string>>({})
  const [opened, setOpened] = useState<BoxStatus>('closed')

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const paramsObject: Record<string, string> = {}
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
        {id && <Box id={id} opened={opened} onOpenClick={onOpenClick} onOpenComplete={onOpenComplete} />}
      </Suspense>
    </div>
  )
}
