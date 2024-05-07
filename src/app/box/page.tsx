'use client'
import { useState } from 'react'
import BoxOutside from '@/app/box/outside'
import BoxInside from '@/app/box/inside'
import Banner from '@/app/box/banner'

export default function Box() {
  const sender = '밀리'
  const boxName = '이호의생일을축하합니다요'
  const [opened, setOpened] = useState(false)

  const onOpenClick = () => {
    setOpened(true)
  }

  return (
    <>
      {opened ? (
        <>
          <Banner />
          <BoxInside />
        </>
      ) : (
        <>
          <Banner />
          <BoxOutside sender={sender} boxName={boxName} onOpenClick={onOpenClick} />
        </>
      )}
    </>
  )
}
