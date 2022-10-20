<template>
  <v-app>
    <div class="app">
      <Header/>
      <NuxtPage keepalive/>
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
}


</style>
