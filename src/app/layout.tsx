import type { Metadata } from 'next'
import './globals.css'
import 'react-responsive-modal/styles.css'
import localFont from 'next/font/local'

const myFont = localFont({
  src: '../font/PretendardVariable.woff2',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' className={myFont.className}>
      <body>{children}</body>
    </html>
  )
}
