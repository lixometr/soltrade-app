export interface TrackCollectionItem {
  date: string

  value: number
}
export interface ICollection {
  _id: string

  type: string

  collectionName: string

  collectionTitle?: string

  image?: string

  description?: string

  totalItems?: number

  discord?: string
  twitter?: string
  website?: string

  floor: TrackCollectionItem[]

  volumes: TrackCollectionItem[]

  listedCount: TrackCollectionItem[]

  priceLayers?: any

  floorRange24h?: number[]

  floorDifference?: number
  volumesDifference?: number
  listedCountDifference?: number
  volumes24h?: number
}
