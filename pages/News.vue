<template>
  <div class="news">
      <DailyPicture/>
  </div>
</template>

<script setup lang="ts">

import DailyPicture from '~/components/News/DailyPicture.vue';
</script>

<style scoped lang="scss">

@use './assets/scss/util' as *;

.news {
  width: 100%;
  display: grid;
  grid-template-rows: repeat(2, 100%);
  padding: 0 rem(15);
}
</style>
