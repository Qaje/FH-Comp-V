<script setup lang="ts">
interface Props {
  title?: string
}
withDefaults(defineProps<Props>(), {
  title: 'CompoApp'
})
</script>

<template>
  <nav>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />
    <span>{{ $props.title }}</span>

    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/counter">Counter</RouterLink>
  </nav>
</template>

<style scoped></style>
