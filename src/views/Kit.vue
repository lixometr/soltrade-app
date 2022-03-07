<script lang="ts" setup>
import AButton from '../components/AButton/AButton.vue'
import IconButton from '../components/IconButton/IconButton.vue'
import svgGrid from '../assets/icons/grid.svg?component'
import svgPlus from '../assets/icons/plus.svg?component'
import svgDownload from '../assets/icons/download.svg?component'
import svgOverview from '../assets/icons/overview.svg?component'
import svgInfo from '../assets/icons/info.svg?component'
import svgFire from '../assets/icons/fire.svg?component'
import IconSwitcher from '../components/IconSwitcher/IconSwitcher.vue'
import IconButtonDelete from '../components/IconButton/IconButtonDelete.vue'
import { ref } from 'vue'
import AInput from '../components/AInput/AInput.vue'
import AProgressBar from '@/components/AProgressBar/AProgressBar.vue'
import AStepper from '@/components/AStepper/AStepper.vue'
import ADropdown from '@/components/ADropdown/ADropdown.vue'
import ATag from '@/components/ATag/ATag.vue'
defineProps({})
const activeItem = ref(0)
const inputValue = ref('')
const stepperItems = [
  { name: 'Site info', icon: svgInfo },
  { name: 'Upload videos', icon: svgDownload },
  {
    name: 'Overview',
    icon: svgOverview,
  },
]
const dropdownValue = ref(1)
</script>

<template>
  <div class="py-10">
    <div class="container">
      <div class="grid grid-cols-2 gap-4 mb-10">
        <div>
          <h2 class="mb-3">Buttons</h2>
          <div class="space-x-4 mb-3 flex">
            <AButton type="primary" text="Primary" />
            <AButton type="secondary">Secondary</AButton>
            <AButton type="text">Text</AButton>
          </div>
          <div class="space-x-4 mb-3 flex">
            <AButton type="primary" :disabled="true" text="Primary" />
            <AButton type="secondary" :disabled="true">Secondary</AButton>
            <AButton type="text" :disabled="true">Text</AButton>
          </div>
          <div class="space-x-4 flex mb-3">
            <AButton type="secondary">
              <span>New site</span>
              <svgPlus width="13" />
            </AButton>
            <AButton type="secondary">
              <svgDownload width="13" />
              <span>Download</span>
            </AButton>
          </div>
          <div class="flex space-x-4 mb-3">
            <IconSwitcher
              v-model:active="activeItem"
              :items="[
                { icon: svgGrid, iconSize: 11, value: 1 },
                { icon: svgGrid, iconSize: 11, value: 2 },
                { icon: svgGrid, iconSize: 11, value: 3 },
              ]"
            />
          </div>
          <div class="flex space-x-4">
            <IconButton
              class="text-red border-red"
              :active="false"
              :icon="svgGrid"
              :icon-size="11"
            />

            <IconButtonDelete />
          </div>
        </div>
        <div class="space-y-4">
          <h2 class="mb-3">Inputs</h2>
          <AInput
            v-model="inputValue"
            label="Project name"
            placeholder="Create project name"
          />
          <AInput v-model="inputValue" placeholder="Create project name" />
          <AInput
            v-model="inputValue"
            :is-valid="false"
            error="Email is not correct. Try again"
          />
          <AInput v-model="inputValue" label="Some label" :is-valid="true" />
          <AInput
            v-model="inputValue"
            placeholder="Create project name"
            :disabled="true"
          />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 mb-5">
        <div class="space-y-4 max-w-[300px]">
          <h2>Progress bar</h2>
          <AProgressBar :progress="30" />
          <AProgressBar :progress="100" />
          <AProgressBar :progress="80" :is-error="true" />
        </div>
        <div class="space-y-4">
          <h2>Stepper</h2>
          <AStepper :items="stepperItems" :active="1" />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="space-y-4">
          <h2>Dropdown</h2>
          <ADropdown
            v-model:active="dropdownValue"
            :items="[
              { name: 'Tracks', icon: svgOverview },
              { name: 'Paths', icon: svgDownload },
              { name: 'Heatmap', icon: svgFire },
            ]"
          />
        </div>
        <div class="space-y-4">
          <h2>Tags</h2>
          <div class="gap-3 flex flex-wrap justify-start">
            <ATag name="Car" color="#B72025" />
            <ATag name="Van" color="#F16393" :active="true" />
            <ATag name="Truck" />
            <ATag name="Excel" :active="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss"></style>
