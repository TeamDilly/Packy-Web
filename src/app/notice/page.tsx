'use client'
import { useNoticeList } from '@/lib/fetchers'
import Image from 'next/image'
import Loading from '@/app/loading'
import Link from 'next/link'

export default function Page() {
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
            className='overflow-hidden rounded-[1.25rem] transition ease-in-out hover:scale-95'
          >
            <Image src={imgUrl} layout='responsive' width={480} height={84} priority alt={`공지사항 이미지 ${idx}`} />
          </Link>
        ))}
    </div>
  )
}
