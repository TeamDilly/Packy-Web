'use client'
import { createContext, ReactNode, useState } from 'react'
import { GiftBoxResponse } from '@/lib/types'

interface ContextType {
  data: GiftBoxResponse | undefined
  setData: React.Dispatch<React.SetStateAction<GiftBoxResponse | undefined>>
}

export const Context = createContext<ContextType | undefined>(undefined)

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<GiftBoxResponse | undefined>()

  return <Context.Provider value={{ data, setData }}>{children}</Context.Provider>
}
