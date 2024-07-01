import type { Metadata } from 'next'
import './globals.css'
import 'react-responsive-modal/styles.css'
import GoogleAnalytics from '@/app/google-analytics'
import localFont from 'next/font/local'

const pretendard = localFont({
  src: '../font/PretendardVariable.woff2',
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
