<template>
  <div v-if="icon" class="flex items-center gap-2">
    <component :is="tag">
      <span class="text-lg font-bold text-surface-700 dark:text-surface-50">
        <slot />
      </span>
    </component>
    <Icon :icon="icon" class="h-6 w-6 text-primary-500 dark:text-primary-400" />
  </div>
  <component v-else :is="tag">
    <span class="text-lg font-bold">
      <slot />
    </span>
  </component>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';

defineProps<{
  tag: string;
  icon?: string;
}>();
</script>
