'use client'
import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'
import { useEffect } from 'react'
import { Api } from '@/lib/api'

const api = new Api({
  baseUrl: process.env.NEXT_PUBLIC_API_URL as string,
})

export function useBox(id: string) {
  const { data, error } = useSWR(['giftbox', id], () => api.api.openGiftBoxForWeb(id), {
    suspense: true,
    shouldRetryOnError: false,
  })

  if (error) throw error

  if (data?.code !== 'OK') {
    throw new Error(data?.code)
  }

  return { data: data?.data }
}

export function useLottie(path: string) {
  const { data, error, isLoading } = useSWR<JSON, Error>(
    ['lottie', path],
    () => fetch(`${process.env.NEXT_PUBLIC_S3_URL}${path}`).then(res => res.json()),
    { shouldRetryOnError: false },
  )

  return {
    data: data as JSON,
    isLoading,
    error,
  }
}

export function useBranch(id: string) {
  const { trigger, data, error, isMutating } = useSWRMutation(['branch', id], () =>
    api.api.createBranchUrl({ boxId: Number(id) }),
  )

  useEffect(() => {
    if (id) {
      trigger()
    }
  }, [trigger, id])

  return {
    data: data,
    isLoading: isMutating,
    error,
  }
}

export function useNotice(id: string) {
  const { data, error, isLoading } = useSWR(['notice', id], () => api.api.getNotice(Number(id)), {
    shouldRetryOnError: false,
  })

  return {
    data: data,
    isLoading,
    error,
  }
}

export function useNoticeList() {
  const { data, error, isLoading } = useSWR('noticeList', () => api.api.getNotices(), { shouldRetryOnError: false })

  return {
    data: data,
    isLoading,
    error,
  }
}
