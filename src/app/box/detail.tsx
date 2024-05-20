import Image from 'next/image'
import { GiftBoxResponse } from '@/lib/types'
import PhotoCard from '@/components/box/photo-card'
import Sticker from '@/components/box/sticker'
import LetterCard from '@/components/box/letter-card'
import MusicPlayer from '@/components/box/music-player'
import Modal from 'react-modal'
import useModal from '@/lib/hooks/box/detail/use-modal'

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
    backdropFilter: 'blur(5px)',
    zIndex: 50,
    backgroundColor: 'rgba(0,0,0,0.44)',
  },
}

const photoModalStyles = { ...customStyles, content: { ...customStyles.content, borderRadius: 0 } }
const letterModalStyles = { ...customStyles, content: { ...customStyles.content, borderRadius: '1rem' } }

export default function BoxDetail({ box }: { box: GiftBoxResponse }) {
  const { modalStatus, openPhoto, openLetter, closeModal } = useModal()

  return (
    <>
      <div className='container relative'>
        <div className='container relative z-30 mx-auto box-border flex h-[calc(100dvh-6.125rem)] flex-col overflow-x-hidden overflow-y-scroll bg-[#303030] px-8'>
          <p className='font-b2 relative mt-8 self-start text-white'>From. {box.senderName}</p>
          <div className='container relative mx-auto mt-8 grid h-full grid-cols-2 grid-rows-3 place-items-center'>
            <PhotoCard
              className='photo-card-width h-auto -rotate-3'
              alt={box.photos[0].description}
              src={box.photos[0].photoUrl}
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
      <Modal isOpen={modalStatus === 'photo'} onRequestClose={closeModal} style={photoModalStyles} ariaHideApp={false}>
        <div className='font-b4 flex w-[calc(100vw-5rem)] flex-col space-y-4 p-4 text-gray-900'>
          <Image src={box.photos[0].photoUrl} alt={box.photos[0].description} width={500} height={500} />
          <p className='py-3 text-center'>{box.photos[0].description}</p>
        </div>
      </Modal>
      <Modal
        isOpen={modalStatus === 'letter'}
        onRequestClose={closeModal}
        style={letterModalStyles}
        ariaHideApp={false}
      >
        <div className='font-b4 flex min-h-[280px] w-[calc(100vw-3rem)] items-center justify-center text-center text-gray-900'>
          {box.letterContent}
        </div>
      </Modal>
    </>
  )
}
