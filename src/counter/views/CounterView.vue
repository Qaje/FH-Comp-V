<!-- Composicion API -->
<!-- Option API -->
<!-- Script Setup -->

<!-- <script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const counter = ref(5)

    const increase = () => {
      counter.value++
    }

    return {
      counter,
      increase
    }
  }
})
</script> -->

<script setup lang="ts">
import { ref } from 'vue'

const entero = ref(1)
// const increment = () => {
//   entero.value++
// }
</script>

<template>
  <h1>Counter view : {{ entero }}</h1>
  <button @click="entero++">+ 1</button>
</template>
