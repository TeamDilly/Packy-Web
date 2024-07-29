import useSWR from 'swr'
import { DataResponseDtoGiftBoxResponse } from '@/lib/types'
import useSWRMutation from 'swr/mutation'
import { useEffect } from 'react'

const fetcher = async (...args: Parameters<typeof fetch>): Promise<any> => {
  const response = await fetch(...args)
  return response.json()
}

async function sendRequest(url: string, { arg }: { arg: any }) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(arg),
  }).then(res => res.json())
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

export function useLottie(path: string) {
  const { data, error, isLoading } = useSWR<JSON, Error>(`${process.env.NEXT_PUBLIC_S3_URL}${path}`, fetcher)

  return {
    data: data,
    isLoading,
    error: error,
  }
}

export function useBranch(id: string) {
  const { trigger, data, error, isMutating } = useSWRMutation(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/sign-up`,
    sendRequest,
  )

  useEffect(() => {
    trigger({ boxId: id })
  }, [trigger, id])

  return {
    data: data,
    isLoading: isMutating,
    error: error,
  }
}
