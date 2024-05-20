import { useState } from 'react'

type ModalStatus = 'closed' | 'photo' | 'letter' | 'photo-closing' | 'letter-closing'

export default function useModal() {
  const [modalStatus, setModalStatus] = useState<ModalStatus>('closed')

  const handleClose = () => {
    if (modalStatus === 'photo') {
      setModalStatus('photo-closing')
    } else if (modalStatus === 'letter') {
      setModalStatus('letter-closing')
    }
    setTimeout(() => {
      closeModal()
    }, 500)
  }

  const openPhoto = () => {
    setModalStatus('photo')
  }

  const openLetter = () => {
    setModalStatus('letter')
  }

  const closeModal = () => {
    setModalStatus('closed')
  }

  return { modalStatus, openPhoto, openLetter, handleClose }
}
