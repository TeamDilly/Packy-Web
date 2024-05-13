'use client'
import { useEffect, useState } from 'react'

export default function Timer() {
  const [time, setTime] = useState(7 * 24 * 60 * 60)

  const formatTime = (time: number) => {
    const days = String(Math.floor(time / (24 * 60 * 60))).padStart(2, '0')
    const hours = String(Math.floor((time % (24 * 60 * 60)) / (60 * 60))).padStart(2, '0')
    const minutes = String(Math.floor((time % (60 * 60)) / 60)).padStart(2, '0')
    const seconds = String(time % 60).padStart(2, '0')
    return `${days}:${hours}:${minutes}:${seconds}`
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => Math.max(prevTime - 1, 0))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='font-b6 sticky z-50 flex justify-between bg-purple-500 px-4 py-2 text-white'>
      <p>일주일 뒤에는 선물박스를 볼 수 없어요!</p>
      <p>남은시간 {formatTime(time)}</p>
    </div>
  )
}
