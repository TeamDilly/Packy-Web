import React, { ReactNode } from 'react'

export default function GiftFrame({ children }: { children?: ReactNode }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='320' height='360' fill='#000000' viewBox='0 0 320 360'>
      <g filter='url(#filter0_i_5545_1636)'>
        <path
          fill='#171717'
          fillRule='evenodd'
          d='M160 0c-14.806 0-27.733 8.044-34.649 20H0v320h125.351c6.916 11.956 19.843 20 34.649 20 14.806 0 27.733-8.044 34.649-20H320V20H194.649C187.733 8.044 174.806 0 160 0z'
          clipRule='evenodd'
        ></path>
      </g>
      <foreignObject x='0' y='0' width='320' height='360'>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            padding: '40px 20px',
          }}
        >
          {children}
        </div>
      </foreignObject>
      <defs>
        <filter
          id='filter0_i_5545_1636'
          width='320'
          height='361'
          x='0'
          y='0'
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
          <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape'></feBlend>
          <feColorMatrix
            in='SourceAlpha'
            result='hardAlpha'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          ></feColorMatrix>
          <feOffset dy='1'></feOffset>
          <feGaussianBlur stdDeviation='5'></feGaussianBlur>
          <feComposite in2='hardAlpha' k2='-1' k3='1' operator='arithmetic'></feComposite>
          <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0'></feColorMatrix>
          <feBlend in2='shape' result='effect1_innerShadow_5545_1636'></feBlend>
        </filter>
      </defs>
    </svg>
  )
}
