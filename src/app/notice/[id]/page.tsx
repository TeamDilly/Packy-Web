'use client'
import { useNotice } from '@/lib/fetchers'
import Image from 'next/image'
import Loading from '@/app/loading'

export default function Page({ params: { id } }: { params: { id: string } }) {
  const { data, isLoading, error } = useNotice(id)
  if (isLoading) return <Loading />
  if (error) throw new Error('Failed to load notice data')

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
