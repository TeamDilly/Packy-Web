import Image from 'next/image'
import { GiftBoxResponse } from '@/lib/types'
import PhotoCard from '@/components/box/photo-card'
import Sticker from '@/components/box/sticker'
import LetterCard from '@/components/box/letter-card'
import MusicPlayer from '@/components/box/music-player'
import useModal from '@/lib/hooks/box/detail/use-modal'
import BoxButton from '@/components/ui/box-button'
import Modal from 'react-responsive-modal'

export default function BoxDetail({ box }: { box: GiftBoxResponse }) {
  const { modalStatus, openPhoto, openLetter, openGift, closeModal } = useModal()

  return (
    <>
      <div className='item-fadein container relative'>
        <div className='container relative z-30 mx-auto box-border flex h-[calc(100dvh-6.125rem)] flex-col overflow-x-hidden overflow-y-scroll bg-[#303030] px-8'>
          <p className='font-b2 relative mt-8 self-start text-white'>From. {box.senderName}</p>
          <div className='container relative mx-auto mt-8 grid h-full grid-cols-2 grid-rows-3 place-items-center'>
            <PhotoCard
              className='photo-card-width h-auto -rotate-3'
              alt={box.photos[0].description}
              src={'https://packy-bucket.s3.ap-northeast-2.amazonaws.com/admin/design/Box/Box_1%401x.png'}
              onClick={openPhoto}
            />
            <Sticker className='sticker-width ml-8 rotate-[10deg]' src={box.stickers[0].imgUrl} />
            <Sticker className='sticker-width mr-8 -rotate-[10deg]' src={box.stickers[0].imgUrl} />
            <LetterCard
              letterContent={box.letterContent}
              src={box.envelope.imgUrl}
              onClick={openLetter}
              className='letter-card-width rotate-3'
            />
            <MusicPlayer className='col-span-2 place-self-start' url={box.youtubeUrl} />
          </div>
        </div>
        <Image
          src={box.box.boxTop}
          className='absolute -top-[30px] right-0 z-30 self-end'
          alt='선물상자 포장지'
          width={280}
          height={130}
        />
      </div>
      <Modal
        open={modalStatus === 'photo'}
        onClose={closeModal}
        center
        showCloseIcon={false}
        styles={{ overlay: { backdropFilter: 'blur(4px)' }, modal: { margin: '2.5rem', padding: 0 } }}
      >
        <div className={'font-b4 flex flex-col space-y-4 p-4 text-gray-900'}>
          <Image src={box.photos[0].photoUrl} alt={box.photos[0].description} width={500} height={500} />
          <p className='py-3 text-center'>{box.photos[0].description}</p>
        </div>
      </Modal>
      <Modal
        open={modalStatus === 'letter'}
        onClose={closeModal}
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
            borderColor: `#${box.envelope.borderColorCode}`,
          },
        }}
      >
        <div className={`font-b4 flex min-h-[280px] w-full items-center justify-center text-center text-gray-900`}>
          {box.letterContent}
        </div>
      </Modal>
      <Modal
        open={modalStatus === 'gift'}
        onClose={closeModal}
        center
        showCloseIcon={false}
        styles={{
          overlay: { backgroundColor: '#222222' },
          modal: { margin: '2.5rem', padding: 0, overflow: 'visible' },
        }}
      >
        <div className='font-b4 relative flex flex-col bg-gray-950 p-5'>
          <div className='absolute left-1/2 top-0 h-[16vw] w-[16vw] -translate-x-1/2 -translate-y-1/4 transform rounded-full bg-gray-950' />
          <div className='relative h-[64vw] w-[64vw]'>
            <Image
              src={box.gift.url}
              alt='선물 기프트카드'
              fill
              sizes='64vw'
              style={{
                objectFit: 'none',
                zIndex: 100,
              }}
            />
          </div>
          <div className='absolute bottom-0 left-1/2 h-[16vw] w-[16vw] -translate-x-1/2 translate-y-1/4 transform rounded-full bg-gray-950' />
        </div>
      </Modal>
      <BoxButton
        buttonType='round'
        size='m'
        theme='light'
        onClick={openGift}
        className='absolute bottom-20 left-1/2 z-50 -translate-x-1/2 transform bg-white'
      >
        선물 확인하기
      </BoxButton>
    </>
  )
}
