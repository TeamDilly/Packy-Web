'use client'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
import { ReactNode, Suspense } from 'react'
import Loading from '@/app/loading'
import Error from '@/app/error'
import { notFound, useRouter } from 'next/navigation'
import { NOTICE_NOT_FOUND } from '@/lib/types'

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  if (error.message === NOTICE_NOT_FOUND) notFound()
  return <Error reset={resetErrorBoundary} />
}

export default function Layout({ children }: { children?: ReactNode }) {
  const router = useRouter()
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        router.refresh()
      }}
    >
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </ErrorBoundary>
  )
}
