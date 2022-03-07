import { TrackCollectionItem } from './collection.interface'
export interface ICollectionSocketDto {
  collectionName: string
  floor: TrackCollectionItem
  volumes: TrackCollectionItem
  listedCount: TrackCollectionItem
}
