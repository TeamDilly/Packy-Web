import { useState } from 'react'

type ModalStatus = 'closed' | 'photo' | 'letter' | 'gift' | 'gift-full'

export default function useModal() {
  const [modalStatus, setModalStatus] = useState<ModalStatus>('closed')

  const openPhoto = () => {
    setModalStatus('photo')
  }

  const openLetter = () => {
    setModalStatus('letter')
  }

  const openGift = () => {
    setModalStatus('gift')
  }

  const openGiftFull = () => {
    setModalStatus('gift-full')
  }

  const closeModal = () => {
    setModalStatus('closed')
  }

  return { modalStatus, openPhoto, openLetter, openGift, openGiftFull, closeModal }
}
