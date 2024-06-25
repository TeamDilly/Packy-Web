import Image from 'next/image'
import { GiftBoxResponse, StickerResponse } from '@/lib/types'
import PhotoCard from '@/components/box/photo-card'
import Sticker from '@/components/box/sticker'
import LetterCard from '@/components/box/letter-card'
import MusicPlayer from '@/components/box/music-player'
import useModal from '@/lib/hooks/box/detail/use-modal'
import BoxButton from '@/components/ui/box-button'
import GiftFullModal from '@/components/box/gift-full-modal'
import GiftModal from '@/components/box/gift-modal'
import LetterModal from '@/components/box/letter-modal'
import PhotoModal from '@/components/box/photo-modal'

export default function BoxDetail({ box }: { box: GiftBoxResponse }) {
  const { modalStatus, openModal, closeModal } = useModal()

  const stickers: (StickerResponse | null)[] = [null, null]
  box.stickers.forEach(sticker => (stickers[sticker.location - 1] = sticker))
  return (
    <>
      <div className='item-fadein container relative'>
        <div className='container relative z-30 mx-auto box-border flex h-[calc(100dvh-4rem)] flex-col overflow-x-hidden overflow-y-scroll bg-gray-900 px-8'>
          <p className='font-b2 relative mt-8 self-start text-white'>From. {box.senderName}</p>
          <div className='container relative mx-auto mt-8 grid h-full grid-cols-2 grid-rows-3 place-items-center pb-24'>
            <PhotoCard
              className='-rotate-3'
              alt={box.photos[0].description}
              src={box.photos[0].photoUrl}
              onClick={() => openModal('photo')}
            />
            {stickers[0] !== null ? (
              <Sticker className='sticker-width ml-8 rotate-[10deg]' src={box.stickers[0].imgUrl} />
            ) : (
              <div />
            )}
            {stickers[1] !== null ? (
              <Sticker className='sticker-width mr-8 -rotate-[10deg]' src={box.stickers[1].imgUrl} />
            ) : (
              <div />
            )}

            <LetterCard
              letterContent={box.letterContent}
              src={box.envelope.imgUrl}
              onClick={() => openModal('letter')}
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
      <PhotoModal
        photo={box.photos[0].photoUrl}
        description={box.photos[0].description}
        isOpen={modalStatus === 'photo'}
        onClose={closeModal}
      />
      <LetterModal
        letterContent={box.letterContent}
        envelope={box.envelope}
        isOpen={modalStatus === 'letter'}
        onClose={closeModal}
      />
      {box.gift?.url && (
        <>
          <GiftModal
            giftUrl={box.gift.url}
            isOpen={modalStatus === 'gift' || modalStatus === 'gift-full'}
            onClose={closeModal}
            openFull={() => openModal('gift-full')}
          />
          <GiftFullModal
            giftUrl={box.gift.url}
            isOpen={modalStatus === 'gift-full'}
            onClose={() => openModal('gift')}
          />

          <BoxButton
            buttonType='round'
            size='m'
            theme='light'
            onClick={() => openModal('gift')}
            className='absolute bottom-5 left-1/2 z-50 -translate-x-1/2 transform bg-white'
          >
            선물 확인하기
          </BoxButton>
        </>
      )}
    </>
  )
}
