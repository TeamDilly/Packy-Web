import useSWR from 'swr'
import { DataResponseBranch, DataResponseDtoGiftBoxResponse, WebNoticeResponse } from '@/lib/types'
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
  const { trigger, data, error, isMutating } = useSWRMutation<DataResponseBranch, Error, any, any>(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/branch`,
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

export function useNotice(id: string) {
  const { data, error, isLoading } = useSWR<WebNoticeResponse, Error>(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/notices/web/${id}`,
    fetcher,
  )

  return {
    data: data,
    isLoading,
    error: error,
  }
}

export function useNoticeList() {
  // const { data, error, isLoading } = useSWR<NoticeResponse, Error>(
  //   `${process.env.NEXT_PUBLIC_API_URL}/admin/notices`,
  //   fetcher,
  // )
  const { data, error, isLoading } = useSWR<WebNoticeResponse, Error>(
    `${process.env.NEXT_PUBLIC_API_URL}/admin/notices/web/${1}`,
    fetcher,
  )

  const dummy = {
    data: [
      {
        imgUrl:
          'https://packy-bucket.s3.ap-northeast-2.amazonaws.com/admin/notice/%ED%8C%A8%ED%82%A4%EC%86%8C%EA%B0%9C/%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5%402.png',
        noticeUrl: 'https://www.naver.com/',
      },

      {
        imgUrl:
          'https://packy-bucket.s3.ap-northeast-2.amazonaws.com/admin/notice/%ED%8C%A8%ED%82%A4%EC%86%8C%EA%B0%9C/%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5%402.png',
        noticeUrl: 'https://www.naver.com/',
      },
      {
        imgUrl:
          'https://packy-bucket.s3.ap-northeast-2.amazonaws.com/admin/notice/%ED%8C%A8%ED%82%A4%EC%86%8C%EA%B0%9C/%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5%402.png',
        noticeUrl: 'https://www.naver.com/',
      },
      {
        imgUrl:
          'https://packy-bucket.s3.ap-northeast-2.amazonaws.com/admin/notice/%ED%8C%A8%ED%82%A4%EC%86%8C%EA%B0%9C/%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5%402.png',
        noticeUrl: 'https://www.naver.com/',
      },
    ],
  }

  return {
    data: dummy,
    isLoading,
    error: error,
  }
}
