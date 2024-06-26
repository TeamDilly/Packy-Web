import { BoxStatus, GiftBoxResponse } from '@/lib/types'
import { useLottie } from '@/lib/fetchers'
import dynamic from 'next/dynamic'
import Loading from '@/app/loading'
import OpenMotion from '@/app/open-motion'

type BoxContainerProps = {
  data: GiftBoxResponse
  opened: BoxStatus
  onOpenClick: () => void
  onOpenComplete: () => void
}

const BoxDetail = dynamic(() => import('@/app/detail'))
const Banner = dynamic(() => import('@/app/banner'))
const BoxArr = dynamic(() => import('@/app/arr'))

export default function BoxContainer({ data, opened, onOpenClick, onOpenComplete }: BoxContainerProps) {
  const urlObj = new URL(data.box.boxLottie)
  const path = urlObj.pathname
  const { data: lottieData, error: lottieError, isLoading: lottieLoading } = useLottie(path)

  if (data.box === undefined) throw new Error()
  if (lottieLoading) return <Loading />
  if (lottieError || !lottieData) throw new Error('Failed to load lottie data')

  return (
    <>
      <Banner />
      {opened === 'opened' && <BoxDetail box={data} />}
      {(opened === 'opening' || opened === 'fading') && (
        <OpenMotion lottieData={lottieData} opened={opened} onComplete={onOpenComplete} />
      )}
      {(opened === 'closed' || opened === 'fading') && data && (
        <BoxArr box={data} onOpenClick={onOpenClick} opened={opened} />
      )}
    </>
  )
}
