'use client'

import Timer from '@/app/timer'
import { useContext, useEffect, useState } from 'react'
import OpenMotion from '@/app/open-motion'
import BoxDetail from '@/app/detail'
import Banner from '@/app/banner'
import { Context } from '@/lib/context-provider'

type BoxStatus = 'opening' | 'opened' | 'fading'

export default function Page() {
  const [opened, setOpened] = useState<BoxStatus>('fading')
  const context = useContext(Context)

  useEffect(() => {
    setTimeout(() => setOpened('opening'), 300)
  }, [])

  if (!context) {
    return null
  }

  const { data } = context

  if (data === undefined) return null

  const onOpenComplete = () => setOpened('opened')

  return (
    <>
      {opened === 'opened' && <Timer />}
      <Banner />
      {opened === 'opened' && <BoxDetail box={data} />}
      {(opened === 'opening' || opened === 'fading') && <OpenMotion onComplete={onOpenComplete} />}
    </>
  )
}
