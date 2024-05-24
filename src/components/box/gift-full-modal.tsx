import Modal from 'react-responsive-modal'
import Image from 'next/image'

type GiftFullModalProps = {
  giftUrl: string
  isOpen: boolean
  onClose: () => void
}

export default function GiftFullModal({ giftUrl, isOpen, onClose }: GiftFullModalProps) {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      center
      showCloseIcon={false}
      styles={{
        overlay: { backgroundColor: '#171717' },
        modal: { margin: '2.5rem', padding: 0, overflow: 'visible' },
      }}
    >
      <div className='font-b4 relative flex flex-col'>
        <div className='relative h-auto w-[70vw]'>
          <Image src={giftUrl} alt='선물 기프트카드' width={500} height={500} />
        </div>
      </div>
    </Modal>
  )
}
