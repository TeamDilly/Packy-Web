import Modal from 'react-responsive-modal'
import Image from 'next/image'
import BoxButton from '@/components/ui/box-button'
import GiftFrame from '@/components/box/gift-frame'

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
        modal: { backgroundColor: '#222222', margin: 0, padding: 0, overflow: 'visible', boxShadow: 'none' },
      }}
    >
      <GiftFrame>
        <div className='relative h-full w-full'>
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
      </GiftFrame>
    </Modal>
  )
}
