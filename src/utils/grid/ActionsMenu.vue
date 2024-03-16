<template>
  <Button
    @click="toggleMenu"
    severity="secondary"
    :label="t('actions')"
    class="flex items-center gap-2"
  >
    <Icon icon="ph:wrench" class="h-4 w-4" />
    <span class="font-semibold">{{ t('actions') }}</span>
    <Icon icon="ph:caret-down" class="h-4 w-4" />
  </Button>

  <Menu ref="menu" :model="props.items" :popup="true">
    <template #item="{ item, props }">
      <a v-bind="props.action" :class="['text-sm', [item.disabled ?'bg-surface-100' : '']]">
        <i v-if="item.icon" :class="[item.icon, 'mr-2']" />
        <span>{{ item.label }} </span>
      </a>
    </template>
  </Menu>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import Button from 'primevue/button';
import Menu from 'primevue/menu';
import type { MenuItem } from 'primevue/menuitem';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
const props = defineProps<{
  items:MenuItem[]
}>();
const emit = defineEmits<{
  deleteSelected: [];
}>();

const { t } = useI18n({});


const menu = ref();
const toggleMenu = (event: Event) => menu.value.toggle(event);
</script>
