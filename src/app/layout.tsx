import type { Metadata } from 'next'
import './globals.css'
import 'react-responsive-modal/styles.css'
import { ContextProvider } from '@/lib/context-provider'

// const pretendard = localFont({
//   src: '../font/PretendardVariable.ttf',
//   display: 'swap',
// })

export const metadata: Metadata = {
  title: '패키',
  description: '마음으로 채우는 특별한 선물박스',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='ko'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body>
        {/*<GoogleAnalytics />*/}
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  )
}
