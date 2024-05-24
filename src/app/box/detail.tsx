import Image from 'next/image'
import { GiftBoxResponse } from '@/lib/types'
import PhotoCard from '@/components/box/photo-card'
import Sticker from '@/components/box/sticker'
import LetterCard from '@/components/box/letter-card'
import MusicPlayer from '@/components/box/music-player'
import Modal from 'react-modal'
import useModal from '@/lib/hooks/box/detail/use-modal'
import BoxButton from '@/components/ui/box-button'
import { useState } from 'react'

// Define the animation in your global CSS or styled-components
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
  },
  overlay: {
    padding: '2.5rem',
    backdropFilter: 'blur(0px)',
    zIndex: 50,
    backgroundColor: 'rgba(0,0,0,0.44)',
  },
}

const photoModalFadeinStyles = {
  ...customStyles,
  content: { ...customStyles.content, borderRadius: 0 },
  overlay: { ...customStyles.overlay, animation: 'fadein_blur .5s forwards' },
}
const photoModalFadeoutStyles = {
  ...customStyles,
  content: { ...customStyles.content, borderRadius: 0 },
  overlay: { ...customStyles.overlay, animation: 'fadeout_blur .5s forwards' },
}

export default function BoxDetail({ box }: { box: GiftBoxResponse }) {
  const [openGift, setOpenGift] = useState(false)
  const { modalStatus, openPhoto, openLetter, handleClose } = useModal()

  const letterModalFadeinStyles = {
    ...customStyles,
    content: {
      ...customStyles.content,
      borderRadius: '1rem',
      borderWidth: '0.25rem',
      borderColorCode: box.envelope.borderColorCode,
    },
    overlay: { ...customStyles.overlay, animation: 'fadein_blur .5s forwards' },
  }
  const letterModalFadeoutStyles = {
    ...customStyles,
    content: {
      ...customStyles.content,
      borderRadius: '1rem',
      borderWidth: '0.25rem',
      borderColorCode: box.envelope.borderColorCode,
    },
    overlay: { ...customStyles.overlay, animation: 'fadeout_blur .5s forwards' },
  }

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
        isOpen={modalStatus === 'photo' || modalStatus === 'photo-closing'}
        onRequestClose={handleClose}
        style={modalStatus === 'photo-closing' ? photoModalFadeoutStyles : photoModalFadeinStyles}
        ariaHideApp={false}
      >
        <div className={'font-b4 flex w-[calc(100vw-5rem)] flex-col space-y-4 p-4 text-gray-900'}>
          <Image
            src={'https://packy-bucket.s3.ap-northeast-2.amazonaws.com/admin/design/Box/Box_1%401x.png'}
            alt={box.photos[0].description}
            width={500}
            height={500}
          />
          <p className='py-3 text-center'>{box.photos[0].description}</p>
        </div>
      </Modal>
      <Modal
        isOpen={modalStatus === 'letter' || modalStatus === 'letter-closing'}
        onRequestClose={handleClose}
        style={modalStatus === 'letter-closing' ? letterModalFadeoutStyles : letterModalFadeinStyles}
        ariaHideApp={false}
      >
        <div
          className={`font-b4 flex min-h-[280px] w-[calc(100vw-3rem)] items-center justify-center text-center text-gray-900`}
        >
          {box.letterContent}
        </div>
      </Modal>
      <BoxButton
        buttonType='round'
        size='m'
        theme='light'
        onClick={() => setOpenGift(true)}
        className='absolute bottom-20 left-1/2 z-50 -translate-x-1/2 transform bg-white'
      >
        선물 확인하기
      </BoxButton>
    </>
  )
}
