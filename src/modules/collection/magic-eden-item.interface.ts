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
  creators: [[], []]
  // creator fee / 100
  sellerFeeBasisPoints: number
  mintAddress: string
  attributes: [[Object]]
  properties: { files: []; creators: [] }
  rarity?: {
    howrare?: { rank: number }
    moonrank?: {
      rank: number
    }
  }
  supply: number
  updateAuthority: string
  primarySaleHappened: 1
  onChainCollection: {}
  tokenDelegateValid: boolean
  v2: {
    auctionHouseKey: string
    sellerReferral: string
    expiry: -1
  }
}
