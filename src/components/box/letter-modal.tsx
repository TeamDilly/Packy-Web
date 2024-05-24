import Modal from 'react-responsive-modal'

type LetterModalProps = {
  letterContent: string
  envelope: {
    imgUrl: string
    borderColorCode: string
  }
  isOpen: boolean
  onClose: () => void
}

export default function LetterModal({ letterContent, envelope, isOpen, onClose }: LetterModalProps) {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      center
      showCloseIcon={false}
      styles={{
        overlay: { backdropFilter: 'blur(4px)' },
        modal: {
          width: '-webkit-fill-available',
          margin: '1.5rem',
          padding: 0,
          borderRadius: '1rem',
          borderWidth: 4,
          borderColor: `#${envelope.borderColorCode}`,
        },
      }}
    >
      <div className='font-b4 flex min-h-[280px] w-full items-center justify-center text-center text-gray-900'>
        {letterContent}
      </div>
    </Modal>
  )
}
