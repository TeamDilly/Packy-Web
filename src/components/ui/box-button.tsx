'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import ProgressCircle from '@/components/icon/ProgressCircle'

type BoxButtonProps = {
  buttonType: 'rect' | 'round'
  size: 'l' | 's' | 'm'
  children: ReactNode
  theme: 'default' | 'dark' | 'light'
  loading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function BoxButton({ buttonType, size, children, theme, loading = false, ...props }: BoxButtonProps) {
  const buttonClass = clsx('relative', {
    'py-[16px] px-[24px] font-b2 rounded-[16px] transition-colors': size === 'l',
    'py-[14px] px-[24px] font-b4 rounded-[8px] transition-colors': size === 'm',
    'py-[8px] px-[24px] font-b6 rounded-[8px] transition-colors': size === 's',
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
    'space-x-[12px]': size === 'l',
    'space-x-[8px]': size === 'm',
    'space-x-[4px]': size === 's',
  })

  return (
    <button className={`${buttonClass} ${activeClass} ${disableClass}`} {...props}>
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
