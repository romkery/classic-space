<template>
  <div class="app">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>


<script setup lang="ts">

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
