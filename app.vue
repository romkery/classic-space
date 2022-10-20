<template>
  <div class="app">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>


<script setup lang="ts">
import 'animate.css'
import {onBeforeMount, onBeforeUnmount} from '@vue/runtime-core';

onBeforeMount(() => {
  const route = useRouter();
  route.push("/home");
})


</script>
<style>
.app {
}
</style>
