import useSWR from 'swr'
import { DataResponseDtoGiftBoxResponse } from '@/lib/types'

const fetcher = async (...args: Parameters<typeof fetch>): Promise<any> => {
  const response = await fetch(...args)
  return response.json()
}

export function useBox(id: string) {
  const { data, error, isLoading } = useSWR<DataResponseDtoGiftBoxResponse, Error>(
    `${process.env.NEXT_PUBLIC_API_URL}/giftboxes/web/${id}`,
    fetcher,
  )

  return {
    data: data,
    isLoading,
    error: error,
  }
}

export function useLottie(url: string) {
  const { data, error, isLoading } = useSWR<JSON, Error>('/admin/design/Box_motion/arr/Box_motion_arr_1.json', fetcher)

  return {
    data: data,
    isLoading,
    error: error,
  }
}
