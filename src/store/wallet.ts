import { clusterApiUrl, Connection } from '@solana/web3.js'
import { defineStore } from 'pinia'
import { useWallet } from 'solana-wallets-vue'
import * as web3 from '@solana/web3.js'
import { watch } from 'vue'
export const useWalletStore = defineStore('wallet', {
  state: () => ({
    apiUrl: clusterApiUrl('mainnet-beta'),
    balance: 0,
  }),
  getters: {
    wallet: () => {
      const { wallet } = useWallet()
      return wallet.value
    },
    connection: (state) => {
      return new Connection(state.apiUrl)
    },
  },
  actions: {
    async fetchBalance() {
      console.log(this.wallet?.publicKey, useWallet().connecting.value)
      if (!this.wallet || !this.wallet.publicKey) {
        this.balance = 0
        return
      }
      let balance = await this.connection.getBalance(this.wallet.publicKey)
      balance = balance / web3.LAMPORTS_PER_SOL
      balance = +balance.toFixed(3)
      this.balance = balance
    },
  },
})

const walletStore = useWalletStore()
watch(useWallet().wallet, () => {
  console.log('change')
  walletStore.fetchBalance()
})
