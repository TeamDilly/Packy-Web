import { useState } from 'react'

type ModalStatus = 'closed' | 'photo' | 'letter' | 'gift' | 'gift-full'

export default function useModal() {
  const [modalStatus, setModalStatus] = useState<ModalStatus>('closed')

  const openModal = (status: ModalStatus) => setModalStatus(status)
  const closeModal = () => setModalStatus('closed')

  return { modalStatus, openModal, closeModal }
}
