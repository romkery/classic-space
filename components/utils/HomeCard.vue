<template>
  <div class="home__info-card">
    <p v-html="replaceWithBr(card.text)"/>
    <img
      :src="card.imgSrc"
      alt="card"/>
  </div>
</template>

<script setup lang="ts">
import {vElementVisibility} from '@vueuse/components'
import {ICards} from '~/store/Home';
import {onMounted} from '@vue/runtime-core';

interface IProps {
  card: ICards
}

const {card} = defineProps<IProps>();
const {flexDirection, gridArea, bg} = card.style

function replaceWithBr(text: string) {
  return text.replace(/\n/g, "<br />")
}

</script>

<style lang="scss">
@use './assets/scss/util' as *;


@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .home__info-card {
    box-sizing: border-box;
    background-blend-mode: overlay;
    -webkit-backdrop-filter: blur(rem(2));
    backdrop-filter: blur(rem(2));
  }
}

.home__info-card {
  width: 100%;
  display: flex;
  grid-area: v-bind(gridArea);
  align-items: center;
  //flex-wrap: wrap;
  background-color: v-bind(bg);
  border: rem(1) solid hsl(255 0 0 / .1);

  img {
    width: min(30vw, rem(500));
    height: min(30vw, rem(500));
    object-fit: cover;
  }

  p {
    @include adaptive_font(80, 10);
    word-break: break-all;
    text-align: center;
    flex-grow: 1;
  }

  @include breakpoint-down(sm) {
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;
  }
}
</style>
