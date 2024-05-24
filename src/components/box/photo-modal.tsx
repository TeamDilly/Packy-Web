import Modal from 'react-responsive-modal'
import Image from 'next/image'

type PhotoModalProps = {
  photo: string
  description: string
  isOpen: boolean
  onClose: () => void
}

export default function PhotoModal({ photo, description, isOpen, onClose }: PhotoModalProps) {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      center
      showCloseIcon={false}
      styles={{ overlay: { backdropFilter: 'blur(4px)' }, modal: { margin: '2.5rem', padding: 0 } }}
    >
      <div className='font-b4 flex flex-col space-y-4 p-4 text-gray-900'>
        <Image src={photo} alt={description} width={500} height={500} />
        <p className='py-3 text-center'>{description}</p>
      </div>
    </Modal>
  )
}
