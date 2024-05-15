<script setup lang="ts">
import pokemonApi from '../api/pokemonApi';
import type { PokemonListResponse } from '../interfaces/pokemons-list-response';

pokemonApi.get<PokemonListResponse>('/pokemon?limit=45')
.then( resp => console.log( resp.data.results[0].url));

</script>

<template>
  <div>
    <h1>Pokemon Lista</h1>   
  </div>
</template>
