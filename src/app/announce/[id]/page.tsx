'use client'
import { useAnnounce } from '@/lib/fetchers'
import Image from 'next/image'

export default function Page({ params: { id } }: { params: { id: string } }) {
  const { data, isLoading, error } = useAnnounce(id)

  return (
    <div className='flex h-screen flex-col items-center gap-2 overflow-auto'>
      {data.map((image, idx) => (
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
