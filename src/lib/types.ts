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
  imgUrl: string
  /** @example "ED76A5" */
  borderColorCode: string
  /**
   * @format int32
   * @example 30
   */
  opacity: number
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
  type: string
  /** @example "www.example.com" */
  url: string
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
  id: number
  /** @example "www.example.com" */
  boxNormal: string
  /** @example "www.example.com" */
  boxTop: string
  /** @example "www.example.com" */
  boxLottie: string
}

export interface DataResponseDtoGiftBoxResponse {
  code?: string
  message?: string
  data?: GiftBoxResponse
}

export interface GiftBoxResponse {
  /** @example "오늘을 위한 특별한 생일 선물" */
  name: string
  /** @example "제이" */
  senderName: string
  /** @example "밀리밀리밀리" */
  receiverName: string
  box: BoxResponse
  envelope: EnvelopeResponse
  /** @example "생일 축하해~" */
  letterContent: string
  /** @example "https://www.youtube.com" */
  youtubeUrl: string
  photos: PhotoResponse[]
  stickers: StickerResponse[]
  gift: GiftResponse
}

export interface PhotoResponse {
  /** @example "www.example.com" */
  photoUrl: string
  /** @example "우리 같이 트리 만든 날 :)" */
  description: string
  /**
   * @format int32
   * @example 1
   */
  sequence: number
}

export interface StickerResponse {
  imgUrl: string
  /** @format int32 */
  location: number
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
  /** @example "www.example.com" */
  boxLottie?: string
}

export interface DataResponseDtoListBoxImgResponse {
  code?: string
  message?: string
  data?: BoxImgResponse[]
}

export type QueryParamsType = Record<string | number, any>
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean
  /** request path */
  path: string
  /** content type of request body */
  type?: ContentType
  /** query params */
  query?: QueryParamsType
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat
  /** request body */
  body?: unknown
  /** base url */
  baseUrl?: string
  /** request cancellation token */
  cancelToken?: CancelToken
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void
  customFetch?: typeof fetch
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D
  error: E
}

type CancelToken = Symbol | string | number

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = 'http://localhost:8081'
  private securityData: SecurityDataType | null = null
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker']
  private abortControllers = new Map<CancelToken, AbortController>()
  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  }
  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string') ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== 'string' ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key]
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        )
        return formData
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  }

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig)
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data
  }

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken)

    if (abortController) {
      abortController.abort()
      this.abortControllers.delete(cancelToken)
    }
  }

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {}
    const requestParams = this.mergeRequestParams(params, secureParams)
    const queryString = query && this.toQueryString(query)
    const payloadFormatter = this.contentFormatters[type || ContentType.Json]
    const responseFormat = format || requestParams.format

    return this.customFetch(`${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
    }).then(async response => {
      const r = response as HttpResponse<T, E>
      r.data = null as unknown as T
      r.error = null as unknown as E

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then(data => {
              if (r.ok) {
                r.data = data
              } else {
                r.error = data
              }
              return r
            })
            .catch(e => {
              r.error = e
              return r
            })

      if (cancelToken) {
        this.abortControllers.delete(cancelToken)
      }

      if (!response.ok) throw data
      return data
    })
  }

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key)
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key])
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key]
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&')
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {}
    const keys = Object.keys(query).filter(key => 'undefined' !== typeof query[key])
    return keys
      .map(key => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join('&')
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery)
    return queryString ? `?${queryString}` : ''
  }

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    }
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken)
      if (abortController) {
        return abortController.signal
      }
      return void 0
    }

    const abortController = new AbortController()
    this.abortControllers.set(cancelToken, abortController)
    return abortController.signal
  }

  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams)
}

/**
 * @title Packy API
 * @version 1.0.0
 * @baseUrl http://localhost:8081
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags 선물박스 관련 API
     * @name GetGiftBoxes
     * @summary 주고받은 선물박스 조회
     * @request GET:/api/v1/giftboxes
     * @secure
     */
    getGiftBoxes: (
      query?: {
        /**
         * 마지막 선물박스의 giftBoxDate
         * @example "2024-12-31T00:00:00.000"
         */
        lastGiftBoxDate?: string
        /** 선물박스 상태, default는 all */
        type?: 'sent' | 'received' | 'all'
        /** 한 페이지에 보여줄 선물박스 개수. 기본값은 6개 */
        size?: number
      },
      params: RequestParams = {},
    ) =>
      this.request<DataResponseDtoSliceResponseDtoGiftBoxesResponse, any>({
        path: `/api/v1/giftboxes`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description giftType은 photo만 가능합니다. <br> gift가 없을 경우 null로 보내주세요. <br>
     *
     * @tags 선물박스 관련 API
     * @name CreateGiftBox
     * @summary 선물박스 만들기
     * @request POST:/api/v1/giftboxes
     * @secure
     */
    createGiftBox: (data: GiftBoxRequest, params: RequestParams = {}) =>
      this.request<DataResponseDtoGiftBoxIdResponse, void>({
        path: `/api/v1/giftboxes`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description provider는 kakao 또는 apple
     *
     * @tags OAuth 관련 API
     * @name SignUp
     * @summary 회원 가입
     * @request POST:/api/v1/auth/sign-up
     * @secure
     */
    signUp: (data: SignupRequest, params: RequestParams = {}) =>
      this.request<DataResponseDtoJwtResponse, void>({
        path: `/api/v1/auth/sign-up`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OAuth 관련 API
     * @name Reissue
     * @summary JWT 만료 시 재발급
     * @request POST:/api/v1/auth/reissue
     * @secure
     */
    reissue: (data: JwtRequest, params: RequestParams = {}) =>
      this.request<DataResponseDtoJwtResponse, void>({
        path: `/api/v1/auth/reissue`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 마이 페이지 관련 API
     * @name GetProfile
     * @summary 나의 프로필 조회
     * @request GET:/api/v1/my-page/profile
     * @secure
     */
    getProfile: (params: RequestParams = {}) =>
      this.request<DataResponseDtoProfileResponse, any>({
        path: `/api/v1/my-page/profile`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 수정할 column만 request body에 담아서 요청해주세요.
     *
     * @tags 마이 페이지 관련 API
     * @name UpdateProfile
     * @summary 나의 프로필 수정
     * @request PATCH:/api/v1/my-page/profile
     * @secure
     */
    updateProfile: (data: ProfileRequest, params: RequestParams = {}) =>
      this.request<DataResponseDtoProfileResponse, any>({
        path: `/api/v1/my-page/profile`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 선물이 없을 경우 응답에서 gift 객체가 제외됩니다. <br> 이미 열린 선물박스는 다른 사람이 열 수 없습니다. <br>
     *
     * @tags 선물박스 관련 API
     * @name OpenGiftBox
     * @summary 선물박스 열기
     * @request GET:/api/v1/giftboxes/{giftBoxId}
     * @secure
     */
    openGiftBox: (giftBoxId: number, params: RequestParams = {}) =>
      this.request<DataResponseDtoGiftBoxResponse, void>({
        path: `/api/v1/giftboxes/${giftBoxId}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 선물박스 관련 API
     * @name DeleteGiftBox
     * @summary 선물박스 삭제
     * @request DELETE:/api/v1/giftboxes/{giftBoxId}
     * @secure
     */
    deleteGiftBox: (giftBoxId: number, params: RequestParams = {}) =>
      this.request<DataResponseDtoString, void>({
        path: `/api/v1/giftboxes/${giftBoxId}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @description STATUS는 WAITING, DELIVERED 두 가지입니다. <br> 선물박스 만들기 API를 호출하면 WAITING 상태로 만들어집니다. <br> 카카오톡으로 보내기 버튼을 누를 때 해당 API를 호출하여 전송 상태를 DELIVERED로 변경합니다. <br>
     *
     * @tags 선물박스 관련 API
     * @name UpdateDeliverStatus
     * @summary 선물박스 전송 상태 변경
     * @request PATCH:/api/v1/giftboxes/{giftBoxId}
     * @secure
     */
    updateDeliverStatus: (giftBoxId: number, data: DeliverStatusRequest, params: RequestParams = {}) =>
      this.request<DataResponseDtoString, void>({
        path: `/api/v1/giftboxes/${giftBoxId}`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description reason: NEED_UPDATE(업데이트 필요), INVALID_STATUS(탈퇴, 정지 등 올바르지 않은 유저 상태)
     *
     * @tags 유저 관련 API
     * @name GetStatus
     * @summary 앱 사용 가능 상태 확인
     * @request GET:/api/v1/member/status
     * @secure
     */
    getStatus: (
      query: {
        /** @example "1.0.0" */
        'app-version': string
      },
      params: RequestParams = {},
    ) =>
      this.request<DataResponseDtoStatusResponse, any>({
        path: `/api/v1/member/status`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 모아보기 관련 API
     * @name GetPhotos
     * @summary 사진 모아보기
     * @request GET:/api/v1/gifts/photos
     * @secure
     */
    getPhotos: (
      query?: {
        /** 마지막 사진의 id */
        'last-photo-id'?: number
        /** 한 페이지에 보여줄 사진 개수. 기본값은 6개 */
        size?: number
      },
      params: RequestParams = {},
    ) =>
      this.request<DataResponseDtoSliceResponseDtoPhotoWithoutSequenceResponse, any>({
        path: `/api/v1/gifts/photos`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 모아보기 관련 API
     * @name GetMusics
     * @summary 음악 모아보기
     * @request GET:/api/v1/gifts/musics
     * @secure
     */
    getMusics: (
      query?: {
        /** 마지막 음악이 담긴 선물박스의 id */
        'last-giftbox-id'?: number
        /** 한 페이지에 보여줄 음악 개수. 기본값은 6개 */
        size?: number
      },
      params: RequestParams = {},
    ) =>
      this.request<DataResponseDtoSliceResponseDtoMusicResponse, any>({
        path: `/api/v1/gifts/musics`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 모아보기 관련 API
     * @name GetLetters
     * @summary 편지 모아보기
     * @request GET:/api/v1/gifts/letters
     * @secure
     */
    getLetters: (
      query?: {
        /** 마지막 편지의 id */
        'last-letter-id'?: number
        /** 한 페이지에 보여줄 편지 개수. 기본값은 6개 */
        size?: number
      },
      params: RequestParams = {},
    ) =>
      this.request<DataResponseDtoSliceResponseDtoLetterResponse, any>({
        path: `/api/v1/gifts/letters`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 모아보기 관련 API
     * @name GetItems
     * @summary 선물 모아보기
     * @request GET:/api/v1/gifts/items
     * @secure
     */
    getItems: (
      query?: {
        /** 마지막 선물이 담긴 선물박스의 id */
        'last-giftbox-id'?: number
        /** 한 페이지에 보여줄 선물 개수. 기본값은 6개 */
        size?: number
      },
      params: RequestParams = {},
    ) =>
      this.request<DataResponseDtoSliceResponseDtoItemResponse, any>({
        path: `/api/v1/gifts/items`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 선물박스 관련 API
     * @name GetKakaoMessageImgUrl
     * @summary 선물박스 ID로 카카오톡 메시지 이미지 조회
     * @request GET:/api/v1/giftboxes/{giftBoxId}/kakao-image
     * @secure
     */
    getKakaoMessageImgUrl: (giftBoxId: number, params: RequestParams = {}) =>
      this.request<DataResponseDtoKakaoImgResponse, void>({
        path: `/api/v1/giftboxes/${giftBoxId}/kakao-image`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 선물이 없을 경우 응답에서 gift 객체가 제외됩니다. <br> 선물박스를 보낸 뒤 7일이 지나면 선물박스를 열 수 없습니다. <br>
     *
     * @tags 선물박스 관련 API
     * @name OpenGiftBoxForWeb
     * @summary (WEB) 선물박스 열기
     * @request GET:/api/v1/giftboxes/web/{giftBoxId}
     * @secure
     */
    openGiftBoxForWeb: (giftBoxId: string, params: RequestParams = {}) =>
      this.request<DataResponseDtoGiftBoxResponse, void>({
        path: `/api/v1/giftboxes/web/${giftBoxId}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 최신순으로 6개를 조회합니다.
     *
     * @tags 선물박스 관련 API
     * @name GetWaitingGiftBoxes
     * @summary 보내지 않은 선물박스 조회
     * @request GET:/api/v1/giftboxes/waiting
     * @secure
     */
    getWaitingGiftBoxes: (params: RequestParams = {}) =>
      this.request<DataResponseDtoListWaitingGiftBoxResponse, any>({
        path: `/api/v1/giftboxes/waiting`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 선물박스 관련 API
     * @name GetMainGiftBox
     * @summary 홈 화면에 띄울 선물박스 조회
     * @request GET:/api/v1/giftboxes/main
     * @secure
     */
    getMainGiftBox: (params: RequestParams = {}) =>
      this.request<DataResponseDtoMainGiftBoxResponse, any>({
        path: `/api/v1/giftboxes/main`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 응답으로 받은 URL로 파일과 함께 PUT 요청을 보내 S3에 파일을 업로드해주세요. 파일 접근은 URL에서 query string을 제거해서 사용해주세요.
     *
     * @tags 파일 관련 API
     * @name GetPresignedUrl
     * @summary Presigned URL 생성
     * @request GET:/api/v1/file/presigned-url/{fileName}
     * @secure
     */
    getPresignedUrl: (fileName: string, params: RequestParams = {}) =>
      this.request<DataResponseDtoFileRequest, void>({
        path: `/api/v1/file/presigned-url/${fileName}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description 서버에서 테스트용으로 사용하는 API입니다.
     *
     * @tags OAuth 관련 API
     * @name GetKakaoAccessToken
     * @summary 카카오 토큰으로 정보 조회
     * @request GET:/api/v1/auth/token/kakao/{code}
     * @secure
     */
    getKakaoAccessToken: (code: string, params: RequestParams = {}) =>
      this.request<DataResponseDtoString, any>({
        path: `/api/v1/auth/token/kakao/${code}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @description status는 NOT_REGISTERED, REGISTERED, WITHDRAWAL, BLACKLIST
     *
     * @tags OAuth 관련 API
     * @name SignIn
     * @summary 로그인
     * @request GET:/api/v1/auth/sign-in/{provider}
     * @secure
     */
    signIn: (provider: 'kakao' | 'apple', params: RequestParams = {}) =>
      this.request<DataResponseDtoSignInResponse, void>({
        path: `/api/v1/auth/sign-in/${provider}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 관리자 API
     * @name ValidateYoutubeUrl
     * @summary 유튜브 링크 유효성 검사
     * @request GET:/api/v1/admin/youtube
     * @secure
     */
    validateYoutubeUrl: (
      query: {
        /** 유튜브 링크 */
        url: string
      },
      params: RequestParams = {},
    ) =>
      this.request<DataResponseDtoStatusResponse, void>({
        path: `/api/v1/admin/youtube`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description 패키 공식 SNS: OFFICIAL_SNS <br> 1:1 문의하기: INQUIRY <br> 패키에게 의견 보내기: SEND_COMMENT <br> 이용약관: TERMS_OF_USE <br> 개인정보처리방침: PRIVACY_POLICY <br>
     *
     * @tags 관리자 API
     * @name GetSettingUrls
     * @summary 설정 링크 조회
     * @request GET:/api/v1/admin/settings
     * @secure
     */
    getSettingUrls: (params: RequestParams = {}) =>
      this.request<DataResponseDtoListSettingResponse, any>({
        path: `/api/v1/admin/settings`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 관리자 API
     * @name GetMusics1
     * @summary 패키 추천 음악 조회
     * @request GET:/api/v1/admin/music
     * @secure
     */
    getMusics1: (params: RequestParams = {}) =>
      this.request<DataResponseDtoListMusicResponse, any>({
        path: `/api/v1/admin/music`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 관리자 API
     * @name HealthCheck
     * @summary 서버 상태 체크
     * @request GET:/api/v1/admin/health
     * @secure
     */
    healthCheck: (params: RequestParams = {}) =>
      this.request<DataResponseDtoString, any>({
        path: `/api/v1/admin/health`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 관리자 API
     * @name GetStickers
     * @summary 스티커 조회
     * @request GET:/api/v1/admin/design/stickers
     * @secure
     */
    getStickers: (
      query?: {
        /** 마지막 스티커 ID */
        lastStickerId?: number
        /** 한 페이지에 보여줄 스티커 개수. 기본값은 10개 */
        size?: number
      },
      params: RequestParams = {},
    ) =>
      this.request<DataResponseDtoSliceResponseDtoImgResponse, any>({
        path: `/api/v1/admin/design/stickers`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 관리자 API
     * @name GetProfiles
     * @summary 프로필 이미지 조회
     * @request GET:/api/v1/admin/design/profiles
     * @secure
     */
    getProfiles: (params: RequestParams = {}) =>
      this.request<DataResponseDtoListImgResponse, any>({
        path: `/api/v1/admin/design/profiles`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 관리자 API
     * @name GetEnvelopes
     * @summary 편지 봉투 디자인 조회
     * @request GET:/api/v1/admin/design/envelopes
     * @secure
     */
    getEnvelopes: (params: RequestParams = {}) =>
      this.request<DataResponseDtoListEnvelopeListResponse, any>({
        path: `/api/v1/admin/design/envelopes`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 관리자 API
     * @name GetBoxes
     * @summary 박스 디자인 조회
     * @request GET:/api/v1/admin/design/boxes
     * @secure
     */
    getBoxes: (params: RequestParams = {}) =>
      this.request<DataResponseDtoListBoxImgResponse, any>({
        path: `/api/v1/admin/design/boxes`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OAuth 관련 API
     * @name Withdraw
     * @summary 회원 탈퇴
     * @request DELETE:/api/v1/auth/withdraw
     * @secure
     */
    withdraw: (params: RequestParams = {}) =>
      this.request<DataResponseDtoString, any>({
        path: `/api/v1/auth/withdraw`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),
  }
}

export const GIFTBOX_URL_EXPIRED = 'GIFTBOX_URL_EXPIRED'
export const GIFTBOX_NOT_FOUND = 'GIFTBOX_NOT_FOUND'
export type BoxStatus = 'closed' | 'opening' | 'opened' | 'fading'
