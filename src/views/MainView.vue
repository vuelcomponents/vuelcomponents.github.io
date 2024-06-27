<script setup lang="ts">
import { ref } from "vue";

const mode = ref("components");
const setMode = (_mode: "components" | "systems" | "author") => {
  mode.value = _mode;
};
const components = [
  "CalendarComponent",
  // 'FrequencyComponent'
];
const currentComponent = ref(0);
const switchMode = (direction: "up" | "down") => {
  switch (direction) {
    case "up":
      if (components[currentComponent.value + 1]) {
        currentComponent.value++;
      }
      break;
    case "down":
      if (components[currentComponent.value - 1]) {
        currentComponent.value--;
      }
      break;
  }
};
</script>

<template>
  <section
    class="flex justify-center items-center w-screen h-screen-minus-navbar"
  >
    <div
      :class="{ switchable: components[currentComponent - 1] }"
      @click="switchMode('down')"
      class="h-full w-[50px] transition-colors flex items-center justify-center rounded-r-xl hover:bg-gang-100"
    >
      <i class="mdi mdi-chevron-left" />
    </div>
    <div class="h-full w-full-minus-100 flex flex-col">
      <component :is="components[currentComponent]" />
    </div>
    <div
      :class="{ switchable: components[currentComponent + 1] }"
      @click="switchMode('up')"
      class="h-full w-[50px] transition-colors flex items-center justify-center rounded-l-lg hover:bg-gang-100"
    >
      <i class="mdi mdi-chevron-right" />
    </div>
  </section>
</template>
<style>
.switchable {
  background: theme("colors.gang.410");
  cursor: pointer;
  i {
    color: theme("colors.gang.300");
  }
}
.switchable:hover {
  background: theme("colors.gang.400");
}
</style>
