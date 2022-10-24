<template>
  <div class="home">
    <div class="home__preview">
      <div class="home__preview-title">
        <h1
          ref="preview_title_h1"
          v-element-visibility="($event) => onElementVisibility($event, this.$refs.preview_title_h1)"
        >
          DO YOU WANT TO GO
          TO
          SPACE?
        </h1>
        <keep-alive>
          <Earth/>
        </keep-alive>
      </div>
      <h2
        ref="preview_h2"
        v-element-visibility="($event) => onElementVisibility($event, this.$refs.preview_h2)"
      >
        HERE YOU CAN SEE...
      </h2>
    </div>
    <div class="home__info">
      <HomeCard
        v-for="(card, index) in store.cards"
        :key="index"
        :card="card"
        :store="store"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

import {useHomeCardStore} from '~/store/HomeStore';
import HomeCard from '../components/utils/HomeCard.vue';
import Earth from '../components/canvas/Earth.vue' ;
import {vElementVisibility} from '@vueuse/components'

const {store} = useHomeCardStore();

const animateCSS = (element, animation, prefix = 'animate__') => {
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;

    element.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      element.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    element.addEventListener('animationend', handleAnimationEnd, {once: true});
  })
}

const onElementVisibility = (state: boolean, el: HTMLElement) => {
  let variable = store.animations[el['__vnode'].ref.r];
  if (variable.state) {
    return;
  }

  variable.state = state;
  animateCSS(el, variable.animation);
}


</script>

<style lang="scss" scoped>
@use './assets/scss/util' as *;

.home {
  width: 100%;
  padding: rem(12);
  background: hsla(0, 0%, 8%, .7) url("assets/img/sky-bg.png");

  &__preview {
    height: calc(100vh - rem(48));
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &-title {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 2;


      h1 {
        animation-duration: 1.5s;
        @include adaptive_font(80, 20);
        padding-right: min(5vw, rem(100));
      }

      img {
        width: min(60vw, rem(400));
        height: min(60vw, rem(400));
        object-fit: cover;
        animation-duration: 1.5s;
      }

      @include breakpoint-down(md) {
        flex-direction: column-reverse;
        justify-content: center;
        text-align: center;
        height: initial;
      }
    }

    h2 {
      @include adaptive_font(70, 20);
      text-align: center;
      animation-duration: 2s;
      justify-self: flex-end;
      padding: rem(50);
    }
  }

  &__info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: rem(12);

    @include breakpoint-down(sm) {
      flex-direction: column-reverse;
      justify-content: center;
      text-align: center;
      height: initial;
    }
  }
}


</style>
