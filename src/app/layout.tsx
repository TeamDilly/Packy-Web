import type { Metadata } from 'next'
import './globals.css'
import 'react-responsive-modal/styles.css'
import localFont from 'next/font/local'
import GoogleAnalytics from '@/app/google-analytics'

const pretendard = localFont({
  src: '../font/PretendardVariable.ttf',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '패키',
  description: '마음으로 채우는 특별한 선물박스',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='ko' className={pretendard.className}>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
