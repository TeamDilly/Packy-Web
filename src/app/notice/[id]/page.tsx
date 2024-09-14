import { useNotice } from '@/lib/fetchers'
import Loading from '@/app/loading'
import Image from 'next/image'
import { NOTICE_NOT_FOUND } from '@/lib/types'
import { notFound } from 'next/navigation'

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params
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
