import useSWR from 'swr'
import { OpenGiftBoxForWebData } from '@/lib/types'

const fetcher = async (...args: Parameters<typeof fetch>): Promise<any> => {
  const response = await fetch(...args)
  return response.json()
}

export function useBox(id: string | string[]) {
  const { data, error, isLoading } = useSWR<OpenGiftBoxForWebData, Error>(
    `${process.env.NEXT_PUBLIC_API_URL}/giftboxes/web/${id}`,
    fetcher,
  )

  return {
    data: data,
    isLoading,
    error: error,
  }
}
