/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface GiftBoxRequest {
  /** @example "너를 위해 준비했어" */
  name?: string
  /** @example "보내는 사람" */
  senderName?: string
  /** @example "받는 사람" */
  receiverName?: string
  /**
   * @format int64
   * @example 1
   */
  boxId?: number
  /**
   * @format int64
   * @example 1
   */
  envelopeId?: number
  /** @example "생일 축하해~" */
  letterContent?: string
  /** @example "https://www.youtube.com" */
  youtubeUrl?: string
  photos?: PhotoRequest[]
  stickers?: StickerRequest[]
  gift?: GiftRequest
}

export interface GiftRequest {
  /** @example "photo" */
  type?: string
  /** @example "www.example.com" */
  url?: string
}

export interface PhotoRequest {
  /** @example "www.test.com" */
  photoUrl?: string
  /** @example "우리 같이 놀러갔던 날 :)" */
  description?: string
  /**
   * @format int32
   * @example 1
   */
  sequence?: number
}

export interface StickerRequest {
  /**
   * @format int64
   * @example 1
   */
  id?: number
  /**
   * @format int32
   * @example 1
   */
  location?: number
}

export interface DataResponseDtoGiftBoxIdResponse {
  code?: string
  message?: string
  data?: GiftBoxIdResponse
}

export interface GiftBoxIdResponse {
  /**
   * @format int64
   * @example 1
   */
  id?: number
  /** @example "550e8400-e29b-41d4-a716-446655440000" */
  uuid?: string
  /** @example "www.example.com" */
  kakaoMessageImgUrl?: string
}

export interface SignupRequest {
  /** @example "kakao" */
  provider?: string
  /** @example "짱제이" */
  nickname?: string
  /**
   * @format int64
   * @example 1
   */
  profileImg?: number
  pushNotification?: boolean
  marketingAgreement?: boolean
}

export interface DataResponseDtoJwtResponse {
  code?: string
  message?: string
  data?: JwtResponse
}

export interface JwtResponse {
  /**
   * @format int64
   * @example 1
   */
  id?: number
  /** @example "Bearer" */
  grantType?: string
  /** @example "eyJhbGciOiJIUzUxMiJ9..." */
  accessToken?: string
  /** @example "eyJhbGciOiJIUzUxMiJ9..." */
  refreshToken?: string
  /**
   * @format int64
   * @example 1705651413
   */
  accessTokenExpiresIn?: number
}

export interface JwtRequest {
  /** @example "eyJhbGciOiJIUzUxMiJ9..." */
  accessToken?: string
  /** @example "eyJhbGciOiJIUzUxMiJ9..." */
  refreshToken?: string
}

export interface ProfileRequest {
  /** @example "제2" */
  nickname?: string
  /**
   * @format int64
   * @example 1
   */
  profileImg?: number
}

export interface DataResponseDtoProfileResponse {
  code?: string
  message?: string
  data?: ProfileResponse
}

export interface ProfileResponse {
  /**
   * @format int64
   * @example 1
   */
  id?: number
  /** @example "kakao" */
  provider?: string
  /** @example "짱제이" */
  nickname?: string
  /** @example "www.example.com" */
  imgUrl?: string
}

export interface DeliverStatusRequest {
  /** @example "DELIVERED" */
  deliverStatus?: string
}

export interface DataResponseDtoString {
  code?: string
  message?: string
  data?: string
}

export interface DataResponseDtoStatusResponse {
  code?: string
  message?: string
  data?: StatusResponse
}

export interface StatusResponse {
  /**
   * @format int64
   * @example 1
   */
  id?: number
  /** @example true */
  isAvailable?: boolean
  /** @example "NEED_UPDATE" */
  reason?: 'INVALID_STATUS' | 'NEED_UPDATE'
}

export interface DataResponseDtoSliceResponseDtoPhotoWithoutSequenceResponse {
  code?: string
  message?: string
  data?: SliceResponseDtoPhotoWithoutSequenceResponse
}

export interface PhotoWithoutSequenceResponse {
  /**
   * @format int64
   * @example 1
   */
  id?: number
  /** @example "www.example.com" */
  photoUrl?: string
  /** @example "우리 같이 트리 만든 날 :)" */
  description?: string
}

export interface SliceResponseDtoPhotoWithoutSequenceResponse {
  content?: PhotoWithoutSequenceResponse[]
  first?: boolean
  last?: boolean
}

export interface DataResponseDtoSliceResponseDtoMusicResponse {
  code?: string
  message?: string
  data?: SliceResponseDtoMusicResponse
}

export interface MusicResponse {
  /**
   * @format int64
   * @example 1
   */
  giftBoxId?: number
  /** @example "www.example.com" */
  youtubeUrl?: string
}

export interface SliceResponseDtoMusicResponse {
  content?: MusicResponse[]
  first?: boolean
  last?: boolean
}

export interface DataResponseDtoSliceResponseDtoLetterResponse {
  code?: string
  message?: string
  data?: SliceResponseDtoLetterResponse
}

export interface EnvelopeResponse {
  /** @example "www.example.com" */
  imgUrl?: string
  /** @example "ED76A5" */
  borderColorCode?: string
  /**
   * @format int32
   * @example 30
   */
  opacity?: number
}

export interface LetterResponse {
  /**
   * @format int64
   * @example 1
   */
  id?: number
  /** @example "이 편지는 영국에서 시작되어..." */
  letterContent?: string
  envelope?: EnvelopeResponse
}

export interface SliceResponseDtoLetterResponse {
  content?: LetterResponse[]
  first?: boolean
  last?: boolean
}

export interface DataResponseDtoSliceResponseDtoItemResponse {
  code?: string
  message?: string
  data?: SliceResponseDtoItemResponse
}

export interface GiftResponse {
  /** @example "photo" */
  type?: string
  /** @example "www.example.com" */
  url?: string
}

export interface ItemResponse {
  /**
   * @format int64
   * @example 1
   */
  giftBoxId?: number
  gift?: GiftResponse
}

export interface SliceResponseDtoItemResponse {
  content?: ItemResponse[]
  first?: boolean
  last?: boolean
}

export interface DataResponseDtoSliceResponseDtoGiftBoxesResponse {
  code?: string
  message?: string
  data?: SliceResponseDtoGiftBoxesResponse
}

export interface GiftBoxesResponse {
  /**
   * @format int64
   * @example 1
   */
  id?: number
  /** @example "sent" */
  type?: string
  /** @example "보내는사람" */
  sender?: string
  /** @example "받는사람" */
  receiver?: string
  /** @example "최고의선물박스" */
  name?: string
  /** @format date-time */
  giftBoxDate?: string
  /** @example "www.example.com" */
  boxNormal?: string
}

export interface SliceResponseDtoGiftBoxesResponse {
  content?: GiftBoxesResponse[]
  first?: boolean
  last?: boolean
}

export interface BoxResponse {
  /**
   * @format int64
   * @example 1
   */
  id?: number
  /** @example "www.example.com" */
  boxNormal?: string
  /** @example "www.example.com" */
  boxTop?: string
}

export interface DataResponseDtoGiftBoxResponse {
  code?: string
  message?: string
  data?: GiftBoxResponse
}

export interface GiftBoxResponse {
  /** @example "오늘을 위한 특별한 생일 선물" */
  name?: string
  /** @example "제이" */
  senderName?: string
  /** @example "밀리밀리밀리" */
  receiverName?: string
  box?: BoxResponse
  envelope?: EnvelopeResponse
  /** @example "생일 축하해~" */
  letterContent?: string
  /** @example "https://www.youtube.com" */
  youtubeUrl?: string
  photos?: PhotoResponse[]
  stickers?: StickerResponse[]
  gift?: GiftResponse
}

export interface PhotoResponse {
  /** @example "www.example.com" */
  photoUrl?: string
  /** @example "우리 같이 트리 만든 날 :)" */
  description?: string
  /**
   * @format int32
   * @example 1
   */
  sequence?: number
}

export interface StickerResponse {
  imgUrl?: string
  /** @format int32 */
  location?: number
}

export interface DataResponseDtoKakaoImgResponse {
  code?: string
  message?: string
  data?: KakaoImgResponse
}

export interface KakaoImgResponse {
  /** @example "www.example.com" */
  kakaoMessageImgUrl?: string
}

export interface DataResponseDtoListWaitingGiftBoxResponse {
  code?: string
  message?: string
  data?: WaitingGiftBoxResponse[]
}

export interface WaitingGiftBoxResponse {
  /**
   * @format int64
   * @example 1
   */
  id?: number
  /** @example "선물박스 이름" */
  name?: string
  /** @example "받는 사람 이름" */
  receiverName?: string
  /** @format date-time */
  createdAt?: string
  /** @example "www.example.com" */
  smallImgUrl?: string
}

export interface DataResponseDtoMainGiftBoxResponse {
  code?: string
  message?: string
  data?: MainGiftBoxResponse
}

export interface MainGiftBoxResponse {
  /** @format int64 */
  giftBoxId?: number
  name?: string
  senderName?: string
  normalImgUrl?: string
}

export interface DataResponseDtoFileRequest {
  code?: string
  message?: string
  data?: FileRequest
}

export interface FileRequest {
  /**
   * @example "https://examplebucket.s3.amazonaws.com /test.txt?
   * X-Amz-Algorithm=AWS4-HMAC-SHA256
   * &X-Amz-Credential=<YOUR_ACCESS_KEY_ID>/20160115/ap-northeast-2/s3/aws4_request&
   * &X-Amz-Date=20160115T000000Z
   * &X-Amz-Expires=86400
   * &X-Amz-SignedHeaders=host
   * &X-Amz-Signature=<SIGNATURE_VALUE>"
   */
  url?: string
}

export interface DataResponseDtoSignInResponse {
  code?: string
  message?: string
  data?: SignInResponse
}

export interface SignInResponse {
  /** @example "NOT_REGISTERED" */
  status?: 'NOT_REGISTERED' | 'REGISTERED' | 'WITHDRAWAL' | 'BLACKLIST'
  /** @example "짱제이" */
  nickname?: string
  tokenInfo?: JwtResponse
}

export interface DataResponseDtoListSettingResponse {
  code?: string
  message?: string
  data?: SettingResponse[]
}

export interface SettingResponse {
  /** @example "OFFICIAL_SNS" */
  tag?: string
  /** @example "www.example.com" */
  url?: string
}

export interface DataResponseDtoListMusicResponse {
  code?: string
  message?: string
  data?: MusicResponse[]
}

export interface DataResponseDtoSliceResponseDtoImgResponse {
  code?: string
  message?: string
  data?: SliceResponseDtoImgResponse
}

export interface ImgResponse {
  /**
   * @format int64
   * @example 1
   */
  id?: number
  /**
   * @format int64
   * @example 1
   */
  sequence?: number
  /** @example "www.example.com" */
  imgUrl?: string
}

export interface SliceResponseDtoImgResponse {
  content?: ImgResponse[]
  first?: boolean
  last?: boolean
}

export interface DataResponseDtoListImgResponse {
  code?: string
  message?: string
  data?: ImgResponse[]
}

export interface DataResponseDtoListEnvelopeListResponse {
  code?: string
  message?: string
  data?: EnvelopeListResponse[]
}

export interface EnvelopeListResponse {
  /**
   * @format int64
   * @example 1
   */
  id?: number
  /**
   * @format int64
   * @example 1
   */
  sequence?: number
  envelope?: EnvelopePaperResponse
  letter?: EnvelopePaperResponse
  /** @example "www.example.com" */
  imgUrl?: string
}

export interface EnvelopePaperResponse {
  /** @example "ED76A5" */
  borderColorCode?: string
  /**
   * @format int32
   * @example 30
   */
  opacity?: number
}

export interface BoxImgResponse {
  /**
   * @format int64
   * @example 1
   */
  id?: number
  /**
   * @format int64
   * @example 1
   */
  sequence?: number
  /** @example "www.example.com" */
  boxNormal?: string
  /** @example "www.example.com" */
  boxSmall?: string
  /** @example "www.example.com" */
  boxSet?: string
  /** @example "www.example.com" */
  boxTop?: string
}

export interface DataResponseDtoListBoxImgResponse {
  code?: string
  message?: string
  data?: BoxImgResponse[]
}

export interface GetGiftBoxesParams {
  /**
   * 마지막 선물박스의 giftBoxDate
   * @example "2024-12-31T00:00:00.000"
   */
  lastGiftBoxDate?: string
  /** 선물박스 상태, default는 all */
  type?: 'sent' | 'received' | 'all'
  /** 한 페이지에 보여줄 선물박스 개수. 기본값은 6개 */
  size?: number
}

export type GetGiftBoxesData = DataResponseDtoSliceResponseDtoGiftBoxesResponse

export type CreateGiftBoxData = DataResponseDtoGiftBoxIdResponse

export type SignUpData = DataResponseDtoJwtResponse

export type ReissueData = DataResponseDtoJwtResponse

export type GetProfileData = DataResponseDtoProfileResponse

export type UpdateProfileData = DataResponseDtoProfileResponse

export type OpenGiftBoxData = DataResponseDtoGiftBoxResponse

export type DeleteGiftBoxData = DataResponseDtoString

export type UpdateDeliverStatusData = DataResponseDtoString

export interface GetStatusParams {
  /** @example "1.0.0" */
  'app-version': string
}

export type GetStatusData = DataResponseDtoStatusResponse

export interface GetPhotosParams {
  /** 마지막 사진의 id */
  'last-photo-id'?: number
  /** 한 페이지에 보여줄 사진 개수. 기본값은 6개 */
  size?: number
}

export type GetPhotosData = DataResponseDtoSliceResponseDtoPhotoWithoutSequenceResponse

export interface GetMusicsParams {
  /** 마지막 음악이 담긴 선물박스의 id */
  'last-giftbox-id'?: number
  /** 한 페이지에 보여줄 음악 개수. 기본값은 6개 */
  size?: number
}

export type GetMusicsData = DataResponseDtoSliceResponseDtoMusicResponse

export interface GetLettersParams {
  /** 마지막 편지의 id */
  'last-letter-id'?: number
  /** 한 페이지에 보여줄 편지 개수. 기본값은 6개 */
  size?: number
}

export type GetLettersData = DataResponseDtoSliceResponseDtoLetterResponse

export interface GetItemsParams {
  /** 마지막 선물이 담긴 선물박스의 id */
  'last-giftbox-id'?: number
  /** 한 페이지에 보여줄 선물 개수. 기본값은 6개 */
  size?: number
}

export type GetItemsData = DataResponseDtoSliceResponseDtoItemResponse

export type GetKakaoMessageImgUrlData = DataResponseDtoKakaoImgResponse

export type OpenGiftBoxForWebData = DataResponseDtoGiftBoxResponse

export type GetWaitingGiftBoxesData = DataResponseDtoListWaitingGiftBoxResponse

export type GetMainGiftBoxData = DataResponseDtoMainGiftBoxResponse

export type GetPresignedUrlData = DataResponseDtoFileRequest

export type GetKakaoAccessTokenData = DataResponseDtoString

export type SignInData = DataResponseDtoSignInResponse

export interface ValidateYoutubeUrlParams {
  /** 유튜브 링크 */
  url: string
}

export type ValidateYoutubeUrlData = DataResponseDtoStatusResponse

export type GetSettingUrlsData = DataResponseDtoListSettingResponse

export type GetMusics1Data = DataResponseDtoListMusicResponse

export type HealthCheckData = DataResponseDtoString

export interface GetStickersParams {
  /** 마지막 스티커 ID */
  lastStickerId?: number
  /** 한 페이지에 보여줄 스티커 개수. 기본값은 10개 */
  size?: number
}

export type GetStickersData = DataResponseDtoSliceResponseDtoImgResponse

export type GetProfilesData = DataResponseDtoListImgResponse

export type GetEnvelopesData = DataResponseDtoListEnvelopeListResponse

export type GetBoxesData = DataResponseDtoListBoxImgResponse

export type WithdrawData = DataResponseDtoString
