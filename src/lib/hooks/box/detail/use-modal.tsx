import { useState } from 'react'

type ModalStatus = 'closed' | 'photo' | 'letter'

export default function useModal() {
  const [modalStatus, setModalStatus] = useState<ModalStatus>('closed')

  const openPhoto = () => {
    setModalStatus('photo')
  }

  const openLetter = () => {
    setModalStatus('letter')
  }

  const closeModal = () => {
    setModalStatus('closed')
  }

  return { modalStatus, openPhoto, openLetter, closeModal }
}
