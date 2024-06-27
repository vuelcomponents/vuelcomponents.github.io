<script setup lang="ts">
function toLinkedin(){
  window.open('https://www.linkedin.com/in/mateusz-%C5%9Bwiderski-69630a272/')
}
</script>

<template>
  <h1 class="text-xl font-bold"><i class="mdi mdi-scale-balance"/> MIT License</h1>

  <p class="font-bold">Copyright (c) 2024 Mateusz Świderski, mateuszss00b@gmail.com</p>

  <p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  </p>
  <p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  </p>
  <p>
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
  </p>
  <h1 class="text-2xl mt-5">Mateusz Świderski, Full Stack Developer .NET | Vue</h1>
  <p>If you'd like to support my work, feel free to reach out to me via LinkedIn or email.</p>
  <div class="grid grid-cols-2 gap-5 mt-5">
    <Button class="w-full" severity="info" @click="toLinkedin">
      <i class="mdi mdi-linkedin">LinkedIn</i>
    </Button>
  </div>
</template>

<style scoped>

</style>