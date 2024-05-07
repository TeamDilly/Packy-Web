'use client'
import { useState } from 'react'
import BoxDetail from '@/app/box/detail'
import Banner from '@/app/box/banner'
import Timer from '@/app/box/timer'
import BoxArr from '@/app/box/arr'
import BoxOpen1 from '@/lottie/Box_motion_arr_1.json'
import Lottie from 'lottie-react'

export default function Box() {
  const sender = '밀리'
  const boxName = '이호의생일을축하합니다요'
  const [opened, setOpened] = useState<'closed' | 'opening' | 'opened'>('closed')

  const onOpenClick = () => {
    setOpened('opening')
  }

  return (
    <>
      {opened === 'opened' ? (
        <>
          <Timer />
          <Banner />
          <BoxDetail />
        </>
      ) : opened === 'opening' ? (
        <>
          <Banner />
          <Lottie animationData={BoxOpen1} loop={false} onComplete={() => setOpened('opened')} />
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
