import { createApp } from 'vue'
import './assets/css/index.css'
import App from './App.vue'
import router from './routes/router'
import { pinia, useMainStore } from './store'
import SolanaWallets from 'solana-wallets-vue'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import 'solana-wallets-vue/styles.css'
import {
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets'
const walletOptions = {
  wallets: [
    new PhantomWalletAdapter(),
    new SlopeWalletAdapter(),
    new SolflareWalletAdapter({ network: WalletAdapterNetwork.Devnet }),
  ],
  autoConnect: true,
}
const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(SolanaWallets, walletOptions)
app.mount('#app')
