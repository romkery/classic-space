<template>
  <div class="container">
    <div class="daily" v-for="card in data">
      <img :src="card.url" alt="daily">
      <span>{{ card.date }}</span>
      <span>{{ card.copyright }}</span>
      <h1>{{ card.title }}</h1>
      <h3>{{ card.explanation }}</h3>
    </div>
  </div>
</template>


<script setup lang="ts">

import {IAPOD} from '~/api/News/DailyPictureAPI';
import {useFetch} from '#app';
import {reactive, ShallowReactive} from '@vue/reactivity';

const data: ShallowReactive<IAPOD[]> = reactive(await useFetch('https://api.nasa.gov/planetary/apod?count=3&api_key=afnJ1XFijXcMMDHkRZY16keAbGZNgRY2Va0b8NCu').data);

</script>


<style lang="scss" scoped>
@use './assets/scss/util' as *;

.container {
  width: 100%;
  height: 100%;
  padding: rem(10);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: rem(10);
  grid-row-gap: rem(10);

  .daily {

    img {
      width: 100%;
      height: rem(300);
      object-fit: cover;
      border-radius: rem(10);
    }
  }
}

</style>
