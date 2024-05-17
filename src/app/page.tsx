'use client'
import React, { useState } from 'react'

export default function Home() {
  const [theme, setTheme] = useState<'default' | 'light'>('default')

  return (
    <main className='flex min-h-dvh flex-col items-center justify-between p-24'>
      <p className='font-h1'>hello</p>
      <p className='font-h2'>hello</p>
      <p className='font-h3'>hello</p>
      <p className='font-b1'>hello</p>
      <p className='font-b2'>hello</p>
      <p className='font-b3'>hello</p>
      <p className='font-b4'>hello</p>
      <p className='font-b5'>hello</p>
      <p className='font-b6'>hello</p>
      {/*<BoxButton buttonType='rect' size='l' theme={theme}>*/}
      {/*  hello*/}
      {/*</BoxButton>*/}

      {/*<BoxButton*/}
      {/*  buttonType='rect'*/}
      {/*  size='l'*/}
      {/*  theme='light'*/}
      {/*  onClick={() => setTheme(prev => (prev === 'default' ? 'light' : 'default'))}*/}
      {/*>*/}
      {/*  change*/}
      {/*</BoxButton>*/}
    </main>
  )
}
