<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <div id="wrapper">
    <h1>{{ msg }}</h1>
    <button type="button" @click="count++">count is: {{ count }}</button>
  </div>
</template>

<style scoped>
#code{
  font-family: Hasklig;
}
</style>
