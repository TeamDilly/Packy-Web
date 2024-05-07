'use client'
import { useState } from 'react'
import BoxDetail from '@/app/box/detail'
import Banner from '@/app/box/banner'
import Timer from '@/app/box/timer'
import BoxArr from '@/app/box/arr'

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
          <Timer />
          <Banner />
          <BoxDetail />
        </>
      ) : (
        <>
          <Banner />
          <BoxArr sender={sender} boxName={boxName} onOpenClick={onOpenClick} />
        </>
      )}
    </>
  )
}
