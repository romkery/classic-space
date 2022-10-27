<template>
  <v-app>
    <div class="app">
      <Header/>
      <NuxtPage/>
    </div>
  </v-app>
</template>

<script setup>
import {useRoute} from 'nuxt/app';

const route = useRoute();

</script>


<style lang="scss">

.app {
  width: 100%;
  height: 100%;
  background: hsla(0, 0%, 8%, .7) url("assets/img/sky-bg.png");
}


</style>
