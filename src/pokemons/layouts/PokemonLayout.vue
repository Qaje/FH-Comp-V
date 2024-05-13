<script setup lang="ts">
import NavBar from '../shared/views/components/NavBar.vue'
import type { RouterLink } from '@/router/list-routes'

import type { pokemonRoute } from '../router'

pokemonRoute.children?.map
</script>
<template>
  <div>
    <NavBar :links="[]" is-secondary />
    <h4>Pokemon Layout</h4>

    <RouterView />
  </div>
</template>
