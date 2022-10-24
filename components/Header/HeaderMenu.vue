<template>
  <div :class="['header__menu']"
       ref="menu">
    <v-icon class="exit__btn"
            @click="closeMenu">
      mdi-window-close
    </v-icon>
    <img :src="require('assets/img/logo.png')" alt="logo">
    <div class="header__menu__tabs">
      <NuxtLink :to="'/'+tab" v-for="tab in tabs" @click="openMenu(false)">{{ toUpper(tab) }}</NuxtLink>
    </div>
  </div>
</template>


<script setup lang="ts">

import {onMounted, Ref} from '@vue/runtime-core';

interface IProps {
  isOpenMenu: Ref<boolean>
  openMenu: (state: boolean) => void
  tabs: string[]
  toUpper: (tab: string) => void
}

const {openMenu, tabs, toUpper} = defineProps<IProps>();
const menu: Ref<HTMLElement> = ref(null);
const closeMenu = () => {
  console.log(menu)
  menu.value.style.top = '-30vh'
  menu.value.style.opacity = '0'
  menu.value.addEventListener('transitionend', () => openMenu(false))
}

onMounted(() => {
  setTimeout(() => {
    menu.value.style.top = '0'
    menu.value.style.opacity = '1'
  }, 10)
})

</script>


<style lang="scss">
@use './assets/scss/util' as *;

@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .header__menu {
    box-sizing: border-box;
    background-blend-mode: overlay;
    -webkit-backdrop-filter: blur(rem(20));
    backdrop-filter: blur(rem(20));
  }
}

.header__menu {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsla(0, 0%, 8%, .7);
  z-index: 100;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  position: absolute;
  transition: 0.3s ease-in;
  opacity: 0;

  .exit__btn {
    position: absolute;
    left: rem(10);
    top: rem(12);
    font-size: rem(22);
    color: hsla(255, 100, 100, .60);
  }

  &__search {
    display: none;
  }

  img {
    width: rem(25);
    height: rem(25);
    object-fit: cover;
    cursor: pointer;
    margin: rem(12) 0;
  }

  &__tabs {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 rem(36);
    height: 100%;
    gap: rem(0);
    justify-content: flex-start;

    ::before {
      position: absolute;
      content: '';
      width: calc(100% - rem(72));
      height: rem(.8);
      background: hsla(255, 100, 100, .30);
    }

    :first-child::before {
      position: absolute;
      content: '';
      width: 100%;
      right: rem(0);
      height: rem(.8);
      background: hsla(255, 100, 100, .30);
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
</style>
