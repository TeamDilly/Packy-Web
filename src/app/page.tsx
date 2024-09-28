'use client'
import { Suspense, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useBox } from '@/lib/fetchers'
import { BoxStatus, GIFTBOX_ALREADY_OPENED, GIFTBOX_NOT_FOUND, GIFTBOX_URL_EXPIRED } from '@/lib/types'
import { notFound, useRouter } from 'next/navigation'
import Loading from '@/app/loading'
import BoxContainer from '@/app/box-container'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
import Error from '@/app/error'

const BoxExpired = dynamic(() => import('@/app/expired'))
const BoxOpened = dynamic(() => import('@/app/opened'))

type BoxProps = {
  id: string
  opened: BoxStatus
  onOpenClick: () => void
  onOpenComplete: () => void
}

function BoxContent({ id, opened, onOpenClick, onOpenComplete }: BoxProps) {
  const { data } = useBox(id)

  return <BoxContainer id={id} data={data} opened={opened} onOpenClick={onOpenClick} onOpenComplete={onOpenComplete} />
}

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  if (error.message === GIFTBOX_URL_EXPIRED) return <BoxExpired />
  if (error.message === GIFTBOX_ALREADY_OPENED) return <BoxOpened />
  if (error.message === GIFTBOX_NOT_FOUND) return notFound()
  return <Error reset={resetErrorBoundary} />
}

function Box(props: BoxProps) {
  const router = useRouter()

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        router.refresh()
      }}
    >
      <Suspense fallback={<Loading />}>
        <BoxContent {...props} />
      </Suspense>
    </ErrorBoundary>
  )
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
    <div className='mx-auto w-screen min-w-80'>
      {id && <Box id={id} opened={opened} onOpenClick={onOpenClick} onOpenComplete={onOpenComplete} />}
    </div>
  )
}
