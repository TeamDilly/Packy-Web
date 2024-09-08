'use client'
import { useNotice, useNoticeList } from '@/lib/fetchers'
import Image from 'next/image'
import Loading from '@/app/loading'
import { Suspense, useEffect, useState } from 'react'
import { NOTICE_NOT_FOUND } from '@/lib/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'

function NoticePage({ id }: { id: string }) {
  const { data, isLoading, error } = useNotice(id)
  if (isLoading) return <Loading />
  if (error) throw new Error('Failed to load notice data')
  else if (data?.code === NOTICE_NOT_FOUND) notFound()

  return (
    <div className='flex h-screen flex-col items-center gap-2 overflow-auto'>
      {data?.data &&
        data.data.map((image, idx) => (
          <Image
            src={image}
            key={image}
            layout='responsive'
            width={500}
            height={500}
            priority
            alt={`공지사항 이미지 ${idx}`}
          />
        ))}
    </div>
  )
}

function NoticeListPage() {
  const { data, isLoading, error } = useNoticeList()
  if (isLoading) return <Loading />
  if (error) throw new Error('Failed to load notice data')

  return (
    <div className='flex h-screen flex-col items-center gap-3 overflow-auto bg-gray-100 p-4'>
      {data?.data &&
        data.data.map(({ imgUrl, noticeUrl }, idx) => (
          <Link
            key={imgUrl}
            href={noticeUrl}
            className='overflow-hidden rounded-[1.25rem] transition ease-in-out hover:scale-90'
          >
            <Image src={imgUrl} layout='responsive' width={480} height={84} priority alt={`공지사항 이미지 ${idx}`} />
          </Link>
        ))}
    </div>
  )
}

export default function Page() {
  const [params, setParams] = useState<Record<string, string>>({})

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const paramsObject: Record<string, string> = {}
    searchParams.forEach((value, key) => {
      paramsObject[key] = value
    })
    setParams(paramsObject)
  }, [])

  const id: string | undefined = params['id']
  return <Suspense fallback={<Loading />}>{id ? <NoticePage id={id} /> : <NoticeListPage />}</Suspense>
}
