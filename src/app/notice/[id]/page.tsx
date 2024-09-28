'use client'
import { useNotice } from '@/lib/fetchers'
import Image from 'next/image'

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params
  const { data } = useNotice(id)

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
