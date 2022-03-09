<script lang="ts" setup>
import { useApiMagicEden } from '@/api/magic-eden/magic-eden.api'
import AButton from '@/components/AButton/AButton.vue'
import { useMainStore } from '@/store'
import { useCollectionStore } from '@/store/collection'
import { useWalletStore } from '@/store/wallet'
import { Connection } from '@solana/web3.js'
import { useWallet } from 'solana-wallets-vue'
import { computed } from 'vue-demi'
import * as web3 from '@solana/web3.js'
import { useToast } from '@/helpers/composables/useToast'
import { ref } from 'vue'
import { errorHandler } from '@/helpers/errorHandler'
const { signTransaction } = useWallet()

const walletStore = useWalletStore()
const collectionStore = useCollectionStore()
const mainStore = useMainStore()
const commissionFee = computed(() => {
  let com = collectionStore.floorPrice * (mainStore.commission / 100)
  return parseFloat(com.toFixed(5))
})
const totalPrice = computed(() => {
  const floorPrice = collectionStore.floorPrice
  const commission = mainStore.commission
  let total = floorPrice + commissionFee.value
  total = +total.toFixed(2)
  return total
})
const infoItems = computed(() => {
  const floorPrice = collectionStore.floorPrice
  const commission = mainStore.commission

  return [
    {
      name: 'Balance',
      value: walletStore.balance + ' SOL',
    },
    {
      name: 'Floor price',
      value: `${floorPrice} SOL`,
    },
    {
      name: 'Commision',
      value: `${commission} %`,
    },
    {
      name: 'Total',
      value: `${totalPrice.value} SOL`,
    },
  ]
})
const { show: showToast } = useToast()
const isLoading = ref(false)
const buy = async () => {
  isLoading.value = true
  try {
    if (!walletStore.wallet?.publicKey) {
      showToast({ type: 'error', text: 'Please connect the wallet' })
      return
    }
    const publicKey = walletStore.wallet.publicKey.toString() as string
    const tx = await useApiMagicEden.buyFloor({ throw: true }).exec({
      collectionName: collectionStore.collectionName,
      buyer: publicKey,
    })
    const transaction = web3.Transaction.populate(web3.Message.from(tx))

    transaction.add(
      web3.SystemProgram.transfer({
        fromPubkey: walletStore.wallet.publicKey,
        toPubkey: new web3.PublicKey(mainStore.feeCollector),
        lamports: commissionFee.value * web3.LAMPORTS_PER_SOL,
      })
    )
    const signature = await walletStore.wallet?.sendTransaction(
      transaction,
      walletStore.connection
    )
    if (!signature) return
    const result = await walletStore.connection.confirmTransaction(
      signature,
      'processed'
    )
    showToast({
      type: 'success',
      text: 'Transaction was successfully sent! You will receive your NFT in a minute',
    })
  } catch (err: any) {
    if (err.code === -32003) {
      // maybe not enough funds
    }
    if (err.isAxiosError) {
      showToast({
        type: 'error',
        text: errorHandler(err),
      })
      return
    }
    if (err.message) {
      showToast({
        type: 'error',
        text: err.message,
      })
    } else {
      showToast({
        type: 'error',
        text: 'Error! Please, try again',
      })
    }
  } finally {
    isLoading.value = false
  }
}
const notEnoughBalance = computed(() => {
  return walletStore.balance < totalPrice.value
})
const isDisabled = computed(() => {
  return notEnoughBalance.value
})
</script>

<template>
  <div>
    <div class="space-y-2">
      <div
        v-for="(item, idx) in infoItems"
        :key="idx"
        class="collection-sidebar__item"
      >
        <div class="collection-sidebar__item-name">{{ item.name }}</div>
        <div class="collection-sidebar__item-value">{{ item.value }}</div>
      </div>
    </div>

    <AButton
      :disabled="isDisabled"
      type="green"
      class="mt-4 w-full"
      :loading="isLoading"
      @click="buy"
    >
      Buy for {{ totalPrice }} SOL
    </AButton>
    <div v-if="notEnoughBalance" class="text-red mt-1">Not enough balance</div>
    <div class="mt-3">Buy from Magic Eden floor price</div>
  </div>
</template>

<style lang="postcss"></style>
