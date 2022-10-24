<template>
  <div class="header">
    <div class="header__main">
      <v-icon
        v-show="width < 575"
        @click="openMenu(true)"
      >mdi-menu
      </v-icon>
      <div class="header__main__center">
        <img :src="require('assets/img/logo.png')" alt="logo">
        <div class="header__main__tabs">
          <NuxtLink :to="'/'+tab" v-for="tab in tabs" @click="openMenu(false)">{{ toUpper(tab) }}</NuxtLink>
        </div>
      </div>
      <v-icon class="header__search">
        mdi-magnify
      </v-icon>
    </div>
    <HeaderMenu v-if="isOpenMenu"
                :isOpenMenu="isOpenMenu"
                :openMenu="openMenu"
                :tabs="tabs"
                :toUpper="toUpper"
    />
  </div>
</template>


<script setup lang="ts">

import {useWindowSize} from '@vueuse/core';
import HeaderMenu from '~/components/Header/HeaderMenu.vue';

const tabs = ["home", "news", "planet", "about"]

const {width, height} = useWindowSize()
const toUpper = (tab: string) => tab[0].toUpperCase() + tab.slice(1)
const isOpenMenu = ref(false);
const openMenu = (state: boolean) => {
  if (state) document.querySelector('body').style.overflowY = 'hidden'
  if (state) document.querySelector('body').style.position = 'fixed'
  else {
    document.querySelector('body').style.overflowY = 'visible'
    document.querySelector('body').style.position = 'static'
  }
  isOpenMenu.value = state;
}

</script>


<style lang="scss">
@use './assets/scss/util' as *;

@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .header {
    box-sizing: border-box;
    background-blend-mode: overlay;
    -webkit-backdrop-filter: blur(rem(20));
    backdrop-filter: blur(rem(25));
  }
}

.header {
  position: sticky;
  top: 0;
  background-color: hsla(0, 0%, 8%, .4);
  z-index: 100;

  &__main {
    $self: &;
    display: flex;
    align-items: center;
    justify-content: center;
    height: rem(48);
    width: 100vw;
    padding: rem(10);

    @include breakpoint-down(sm) {
      justify-content: space-between;
    }

    &__center {
      display: flex;
      align-items: center;

      img {
        width: rem(25);
        height: rem(25);
        object-fit: cover;
        cursor: pointer;
      }

      #{$self}__tabs {
        display: inline-flex;
        width: 100%;
        gap: rem(36);
        padding: 0 rem(36);
        height: 100%;
        justify-content: center;
        align-items: center;

        @include breakpoint-down(sm) {
          display: none;
          gap: 100px
        }
      }

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


      i {
        font-size: rem(20);
        cursor: pointer;
      }

    }
  }
}
</style>
