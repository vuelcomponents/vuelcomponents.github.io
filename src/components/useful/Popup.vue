<script setup lang="ts">
import InputText from "primevue/inputtext";
const props = defineProps<{
  visible: boolean;
  title?: string;
  description?: string;
  header: string;
}>();
const emit = defineEmits(["update:visible"]);
</script>

<template>
  <div
    class="fixed z-[10] top-0 left-0 w-screen h-screen flex items-center justify-center backdrop-blur-sm"
    v-if="visible"
  >
    <div
      class="bg-gang-0 ring-gang-500/10 ring-1 rounded-xl w-[500px] h-[300px] relative"
    >
      <div
        class="w-full bg-gang-500 px-5 py-1 border-b-2 border-gang-300 rounded-t-xl"
      >
        <p class="font-yesteryear text-3xl text-gang-400">{{ header }}</p>
      </div>
      <div class="px-5 grid">
        <p class="text-sm" v-if="title">
          {{ title }}
        </p>
        <p class="text-[0.7em]" v-if="description">
          {{ description }}
        </p>
        <div class="w-full h-full bg-gang-100">
          <slot />
        </div>
      </div>
      <button
        @click="emit('update:visible', false)"
        class="absolute top-0 right-0 bg-gang-300/30 rounded-bl-xl rounded-tr-xl text-gang-100/80 px-5"
      >
        <i class="mdi mdi-close" />
      </button>
    </div>
  </div>
</template>
