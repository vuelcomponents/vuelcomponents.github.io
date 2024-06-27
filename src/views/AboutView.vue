<script setup lang="ts">
import jungle from "../assets/jungle.jpg";
import jungle2 from "../assets/jungle2.jpg";
import Button from "primevue/button";
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
    <div class="col-span-1">
      <img :src="jungle" class="shadow" />
    </div>
    <div class="col-span-1">
      <h1 class="text-3xl">Few words</h1>
      <p>
        A fully stable version 1.0 has been enabled for VanillaJS and Vue users.
        Alongside application development, I plan to make it available for
        Angular users as well.
      </p>
      <p>
        If you'd like to support my project, please refer to the License
        section. VuelCalendar is <strong>free</strong>, but the work behind it
        is demanding and time-consuming.
      </p>
      <h1 class="text-3xl mt-5">Development</h1>
      <p>
        I'll be developing this tool in my spare time, outside of my full-time
        job as a fullstack developer. I'm committed to ensuring that this tool
        reaches the highest standards and remains completely free, eliminating
        paid competition.
      </p>
      <p>
        Despite my full-time commitments, I always find time for my personal
        projects, which I love to engage with. What's coming up soon includes
        access for other popular frameworks, various types of views and
        previews, as well as improvements based on user feedback.
      </p>
      <h1 class="text-3xl mt-5">Issue Section</h1>
      <p>
        I encourage you to visit the Issue Section and report any suggestions or
        bugs encountered while using the application. Your comfort when using my
        application is paramount, and I want to ensure that it meets the
        standards you deserve.
      </p>
    </div>
  </div>
  <div class="flex justify-center pt-5 mb-5">
    <Button
      severity="info"
      icon="mdi mdi-timer-play"
      class="w-full"
      @click="$router.push({ name: 'Guide' })"
    >
      <i class="mdi mdi-timer-play mr-5"></i>
      Get started
    </Button>
  </div>
</template>

<style></style>
