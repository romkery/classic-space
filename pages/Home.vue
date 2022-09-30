<template>
  <div class="home" v-show="imageLoaded">
    <div class="home__title">
      <h1 class="animate__animated animate__slideInLeft">DO YOU WANT TO GO TO SPACE?</h1>
      <img
        v-show="imageLoaded"
        @load="imageLoaded = true"
        src="../assets/img/home/earth.png"
        alt="earth"
        class="animate__animated animate__slideInRight">
    </div>
    <div class="home__info">
      <v-lazy>
        <h2 class="animate__animated animate__fadeInUp">HERE YOU CAN SEE...</h2>
      </v-lazy>
      <HomeCard
        v-for="card in store.cards"
        :imgSrc="card.imgSrc"
        :flexDirection="card.flexDirection"
        :text="card.text"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

import {useHomeCardStore} from '~/store/Home';
import HomeCard from '../components/utils/HomeCard.vue';

const store = useHomeCardStore()
const imageLoaded = ref(false);
</script>

<style lang="scss">
@use './assets/scss/util' as *;

.home {
  width: 100%;
  height: 100%;
  padding: 0 min(5vw, rem(50));
  background: url("../assets/img/sky-bg.png") repeat;

  &__title {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100vh;

    h1 {
      animation-duration: 1.5s;
      @include adaptive_font(80, 20);
      padding-right: min(5vw, rem(100));
    }

    img {
      width: min(60vw, rem(500));
      height: min(60vw, rem(500));
      object-fit: cover;
      animation-duration: 2.5s;
    }

    @include breakpoint-down(sm) {
      flex-direction: column-reverse;
      justify-content: center;
      text-align: center;
      height: initial;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;

    h2 {
      @include adaptive_font(70, 20);
      text-align: center;
      animation-duration: 2.5s;
    }

    @include breakpoint-down(sm) {
      flex-direction: column-reverse;
      justify-content: center;
      text-align: center;
      height: initial;
    }
  }
}


</style>
