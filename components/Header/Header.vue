<template>
  <div class="header">
    <img :src="require('assets/img/logo.png')" alt="logo">
    <div class="header__tabs">
      <NuxtLink :to="'/'+tab" v-for="tab in tabs">{{ toUpper(tab) }}</NuxtLink>
    </div>
    <v-icon>mdi-magnify</v-icon>
  </div>
</template>


<script setup lang="ts">

const tabs = ["home", "news", "planet", "about"]
const currentTab = "home";

const toUpper = (tab: string) => tab[0].toUpperCase() + tab.slice(1)
</script>


<style lang="scss" scoped>
@use './assets/scss/util' as *;

@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .header {
    box-sizing: border-box;
    background-blend-mode: overlay;
    -webkit-backdrop-filter: blur(rem(20));
    backdrop-filter: blur(rem(20));
  }
}

.header {
  position: sticky;
  top: 0;
  height: rem(48);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsla(0, 0%, 8%, .7);
  z-index: 100;

  img {
    width: rem(25);
    height: rem(25);
    object-fit: cover;
    cursor: pointer;
  }

  &__tabs {
    display: inline-flex;
    gap: rem(36);
    padding: 0 rem(36);
    height: 100%;
    align-items: center;
    justify-content: center;
    align-content: center;


    a {
      text-decoration: none;
      line-height: rem(48);
      font-size: rem(16);
      color: hsla(255, 100, 100, .65);
      transition: ease 250ms;
    }

    :hover {
      color: hsla(255, 100, 100);
    }
  }


  i {
    font-size: rem(20);
    cursor: pointer;
  }
}

</style>
