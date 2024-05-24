import { useState } from 'react'

type ModalStatus = 'closed' | 'photo' | 'letter' | 'gift'

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

  const closeModal = () => {
    setModalStatus('closed')
  }

  return { modalStatus, openPhoto, openLetter, openGift, closeModal }
}
