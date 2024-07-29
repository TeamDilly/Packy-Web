import { BoxStatus, GiftBoxResponse } from '@/lib/types'
import { useBranch, useLottie } from '@/lib/fetchers'
import dynamic from 'next/dynamic'
import Loading from '@/app/loading'
import OpenMotion from '@/app/open-motion'
import { useEffect } from 'react'

type BoxContainerProps = {
  id: string
  data: GiftBoxResponse
  opened: BoxStatus
  onOpenClick: () => void
  onOpenComplete: () => void
}

const BoxDetail = dynamic(() => import('@/app/detail'))
const Banner = dynamic(() => import('@/app/banner'))
const BoxArr = dynamic(() => import('@/app/arr'))

export default function BoxContainer({ id, data, opened, onOpenClick, onOpenComplete }: BoxContainerProps) {
  const urlObj = new URL(data.box.boxLottie)
  const path = urlObj.pathname
  const { data: lottieData, error: lottieError, isLoading: lottieLoading } = useLottie(path)
  const { data: branchData, error: branchError, isLoading: branchLoading } = useBranch(id)
  useEffect(() => {
    if (branchLoading) {
      console.log('branchData', branchData)
    }
  }, [branchData, branchLoading])
  if (data.box === undefined) throw new Error()
  if (lottieLoading || branchLoading) return <Loading />
  if (lottieError || !lottieData) throw new Error('Failed to load lottie data')
  if (branchError || !branchData) throw new Error('Failed to load branch data')

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
