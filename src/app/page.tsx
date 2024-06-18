import { Suspense } from 'react'
import Banner from '@/app/banner'
import BoxArr from '@/app/arr'
import BoxExpired from '@/app/expired'
import { GIFTBOX_NOT_FOUND, GIFTBOX_URL_EXPIRED } from '@/lib/types'
import { notFound } from 'next/navigation'
import Loading from '@/app/loading'

type BoxProps = {
  id: string
}

async function Box({ id }: BoxProps) {
  const data = await fetch(`${process.env.API_URL}/giftboxes/web/${id}`, {
    cache: 'no-store',
  }).then(r => r.json())

  if (data === undefined) throw new Error()

  if (data.code === GIFTBOX_URL_EXPIRED) return <BoxExpired />
  else if (data.code === GIFTBOX_NOT_FOUND) notFound()

  if (data.data === undefined) throw new Error()

  return (
    <>
      <Banner />
      <BoxArr box={data.data} />
    </>
  )
}

export default function Page({ searchParams }: { searchParams: { box?: string } }) {
  const id = searchParams?.box

  return (
    <div className='container'>
      <Suspense fallback={<Loading />}>{id !== undefined && <Box id={id} />}</Suspense>
    </div>
  )
}
