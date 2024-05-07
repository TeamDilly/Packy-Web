'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import ProgressCircle from '@/components/icon/ProgressCircle'

type BoxButtonProps = {
  buttonType: 'rect' | 'round'
  size: 'l' | 's' | 'm'
  children?: ReactNode
  theme: 'default' | 'dark' | 'light'
  loading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function BoxButton({ buttonType, size, children, theme, loading = false, ...props }: BoxButtonProps) {
  const buttonClass = clsx('relative', {
    'py-4 px-6 font-b2 rounded-2xl transition-colors': size === 'l',
    'py-[0.875rem] px-6 font-b4 rounded-lg transition-colors': size === 'm',
    'py-2 px-6 font-b6 rounded-lg transition-colors': size === 's',
    'bg-purple-500 text-white': theme === 'default',
    'bg-gray-900 text-white': theme === 'dark',
    'bg-gray-100 text-black': theme === 'light',
  })

  const activeClass = clsx({
    'active:bg-purple-600': !props.disabled && theme === 'default',
    'active:bg-gray-800': !props.disabled && theme === 'dark',
    'active:bg-gray-300': !props.disabled && theme === 'light',
  })

  const disableClass = clsx({
    'bg-purple-300 text-white': props.disabled && theme === 'default',
    'bg-gray-300 text-white': props.disabled && theme === 'dark',
    'bg-gray-100 text-gray-400': props.disabled && theme === 'light',
  })

  const contentClass = clsx('flex', {
    'space-x-3': size === 'l',
    'space-x-2': size === 'm',
    'space-x-1': size === 's',
  })

  return (
    <button {...props} className={clsx(buttonClass, activeClass, disableClass, props?.className)}>
      <ProgressCircle
        data-testid='progress-circle'
        className={clsx('absolute left-0 right-0 m-auto animate-spin', { hidden: !loading })}
      />
      <div data-testid='content' className={clsx(contentClass, { invisible: loading })}>
        {children}
      </div>
    </button>
  )
}
