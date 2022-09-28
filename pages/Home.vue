<template>
  <div class="home">
    <div class="home__title">
      <h1 class="animate__animated animate__slideInLeft"
          v-show="imageLoaded">DO YOU WANT TO GO TO SPACE?</h1>
      <img
        v-show="imageLoaded"
        loading="lazy"
        @load="imageLoaded = true"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Earth_Western_Hemisphere_transparent_background.png/1200px-Earth_Western_Hemisphere_transparent_background.png"
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
  background: url("../assets/img/sky-bg.png") repeat;
  padding: 0 min(10vh, 50rem);

  &__title {
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;

    h1 {
      animation-duration: 1.5s;
      @include adaptive_font(80, 20);
      padding-right: min(10vh, rem(100));
    }

    img {
      width: rem(450);
      height: rem(500);
      object-fit: cover;
      animation-duration: 2.5s;
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

    //&-mars {
    //  width: 100%;
    //  height: 100vh;
    //  display: flex;
    //  align-items: center;
    //
    //  img {
    //    width: rem(400);
    //    height: rem(400);
    //    border-radius: rem(10);
    //    object-fit: cover;
    //  }
    //
    //  p {
    //    flex-grow: 1;
    //    @include adaptive_font(60, 20);
    //    word-break: break-all;
    //    text-align: center;
    //  }
    //}
    //
    //&-news {
    //  width: 100%;
    //  height: 100vh;
    //  display: flex;
    //  align-items: center;
    //
    //  img {
    //    width: rem(400);
    //    height: rem(400);
    //    border-radius: rem(10);
    //    object-fit: cover;
    //  }
    //
    //  p {
    //    flex-grow: 1;
    //    @include adaptive_font(60, 20);
    //    word-break: break-all;
    //    text-align: center;
    //  }
    //}
  }

}


</style>
