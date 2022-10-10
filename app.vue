<template>
  <div class="app">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>


<script setup lang="ts">
import 'animate.css'

onMounted(() => {
  const route = useRouter();
  route.push("/home");
})


</script>
<style>
.app {
  overflow: hidden;
}
</style>
