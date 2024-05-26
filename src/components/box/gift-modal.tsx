import Modal from 'react-responsive-modal'
import Image from 'next/image'
import BoxButton from '@/components/ui/box-button'

type GiftModalProps = {
  giftUrl: string
  isOpen: boolean
  onClose: () => void
  openFull: () => void
}

export default function GiftModal({ giftUrl, isOpen, onClose, openFull }: GiftModalProps) {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      center
      showCloseIcon={false}
      styles={{
        overlay: { backgroundColor: '#222222' },
        modal: { margin: '2.5rem', padding: 0, overflow: 'visible' },
      }}
    >
      <div className='font-b4 relative flex flex-col bg-gray-950 p-5'>
        <div className='absolute left-1/2 top-0 h-[16vw] w-[16vw] -translate-x-1/2 -translate-y-1/4 transform rounded-full bg-gray-950' />
        <div className='relative h-[63vw] w-[63vw]'>
          <Image
            src={giftUrl}
            alt='선물 기프트카드'
            fill
            sizes='63vw'
            style={{
              objectFit: 'cover',
              zIndex: 100,
              objectPosition: 'top',
            }}
          />
          <BoxButton
            buttonType='round'
            size='s'
            theme='dark'
            onClick={openFull}
            className='absolute bottom-4 left-1/2 z-[110] -translate-x-1/2 transform text-nowrap bg-opacity-30'
          >
            이미지 전체보기
          </BoxButton>
        </div>
        <div className='absolute bottom-0 left-1/2 h-[16vw] w-[16vw] -translate-x-1/2 translate-y-1/4 transform rounded-full bg-gray-950' />
      </div>
    </Modal>
  )
}
