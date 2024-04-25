import React from 'react'

function ProgressCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24' {...props}>
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M21 12a9 9 0 00-9-9V0c6.627 0 12 5.373 12 12h-3z'
        clipRule='evenodd'
      ></path>
    </svg>
  )
}

export default ProgressCircle
