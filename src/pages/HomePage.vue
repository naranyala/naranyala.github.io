<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <div id="content">
    <div>
      <br><i class="las la-4x la-home"></i>
    </div>
    <h1>Home Page</h1>
    <br>
    <h2>Halo 🖐 </h2>
    <h1>{{ msg }}</h1>
    <button type="button" @click="count++">count is: {{ count }}</button>
    <br>

  </div>
</template>

<style scoped>
#code{
  font-family: Hasklig;
}
</style>
