export interface MagicEdenItem {
  id: string
  price: number
  escrowPubkey: string
  owner: string
  collectionName: string
  collectionTitle: string
  img: string
  title: string
  content: string
  externalURL: string
  creators: any[]
  // creator fee / 100
  sellerFeeBasisPoints: number
  mintAddress: string
  attributes: any[]
  properties: { files: any[]; creators: any[] }
  rarity?: {
    howrare?: { rank: number }
    moonrank?: {
      rank: number
    }
  }
  supply: number
  updateAuthority: string
  primarySaleHappened: number
  onChainCollection: any
  tokenDelegateValid: boolean
  v2: {
    auctionHouseKey: string
    sellerReferral: string
    expiry: -1
  }
}
