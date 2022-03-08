import { clusterApiUrl, Connection } from '@solana/web3.js'
import { defineStore } from 'pinia'
import { useWallet } from 'solana-wallets-vue'
import * as web3 from '@solana/web3.js'
import { watch } from 'vue'
import { watchOnce } from '@vueuse/core'
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
const { connected, connecting } = useWallet()
const checkBalance = async () => {
  if (connected.value) {
    walletStore.fetchBalance()
  } else if (connecting.value) {
    watchOnce(connected, () => {
      if (connected.value) {
        walletStore.fetchBalance()
      }
    })
  } else {
    walletStore.balance = 0
  }
}
checkBalance()
watch(connected, checkBalance)
