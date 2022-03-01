<script setup>
import { ref } from 'vue'

const name = 'Home Page';

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <div id="content">
    <div>
      <!-- <br><i class="las la-4x la-home"></i> -->
      <h1>🏡</h1>
    </div>
    <h1>{{ name }}</h1>
    <br>
    <button type="button" @click="count++">count is: {{ count }}</button>
    <br>

  </div>
</template>

<style scoped>
#code{
  font-family: Hasklig;
}
</style>
