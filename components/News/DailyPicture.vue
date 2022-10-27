<template>
  <v-overlay
    :model-value="isShowPopUp"
    @click:outside="hidePopUp"
  >
    <div v-html="$refs.daily_img.outerHTML"/>
  </v-overlay>
  <Suspense>
    <div class="daily" v-if="card">
      <div class="daily__card">
        <img :src="card.url"
             alt="daily_img"
             ref="daily_img"
             @click="showPopUp()"
             @load="hideSkeleton"
             v-show="!isShowSkeleton"
        >
        <div id="img_skeleton"
             v-if="isShowSkeleton"
        >
          <v-icon color="#000000">mdi-image</v-icon>
        </div>
        <div class="daily__card-info">
          <p>"{{ card.title }}",
            <span>{{ card.date }}</span>
            <span v-if="card.copyright"> by {{ card.copyright }}.</span>
          </p>
        </div>
      </div>
      <div class="daily__description">
        <div class="daily__title">
          <p>DAILY PICTURE</p>
        </div>
        <div class="daily__description-info">
          <p>{{ card.explanation }}</p>
        </div>
      </div>
    </div>
  </Suspense>
</template>


<script setup lang="ts">
import {defineAsyncComponent, onMounted, Ref, watch} from '@vue/runtime-core';
import {ref} from '@vue/reactivity';
import DailyPictureAPI from '~/api/News/DailyPictureAPI';

const card = await DailyPictureAPI.getDailyPicture();

const isShowPopUp: Ref<boolean> = ref(false);
const isShowSkeleton: Ref<boolean> = ref(true);

const showPopUp = (): void => {
  isShowPopUp.value = true;
}

const hidePopUp = (): void => {
  isShowPopUp.value = false;
}

const hideSkeleton = (): void => {
  isShowSkeleton.value = false;
}

</script>


<style lang="scss" scoped>
@use './assets/scss/util' as *;

@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .daily__card-info, .daily__description {
    box-sizing: border-box;
    background-blend-mode: overlay;
    -webkit-backdrop-filter: blur(rem(2));
    backdrop-filter: blur(rem(2));
  }
}

.daily {
  $daily: &;
  display: flex;
  justify-content: center;
  grid-gap: rem(12);
  width: 100%;
  padding: rem(10);

  @include breakpoint-down(sm) {
    flex-direction: column;
    grid-gap: rem(8);
  }

  &__card {
    display: flex;
    flex-direction: column;
    grid-gap: rem(12);
    width: rem(300);

    @include breakpoint-down(sm) {
      grid-gap: rem(8);
      width: 100%;
      text-align: center;
    }

    img {
      width: rem(300);
      height: rem(300);
      border-radius: rem(18);
      object-fit: cover;
      cursor: pointer;

      @include breakpoint-down(sm) {
        width: 100%;
        height: rem(300);
      }
    }

    &-info {
      display: flex;
      flex-grow: 2;
      justify-content: center;
      align-items: center;
      padding: rem(8) rem(20);
      background: hsla(230, 75%, 60%, 0.14);
      border-radius: rem(18);

      p {
        word-break: break-word;
        @include adaptive_font(32, 12);
      }
    }
  }

  &__description {
    height: 100%;
    border-radius: rem(18);
    overflow: hidden;

    @include breakpoint-down(sm) {
      text-align: center;
    }

    #{$daily}__title {
      padding: rem(10) rem(15);
      background: hsla(230, 100%, 80%, 0.14);

      p {
        @include adaptive_font(30, 12)
      }
    }

    &-info {
      height: 100%;
      background: hsla(230, 75%, 60%, 0.14);


      p {
        padding: rem(10) rem(15);
        @include adaptive_font(32, 12);
        font-weight: bold;
      }
    }
  }
}

#img_skeleton {
  display: flex;
  width: rem(300);
  height: rem(300);
  border-radius: rem(18);
  background: black;
  animation: 1.5s pulse-bg infinite ease-in-out;
  justify-content: center;
  align-items: center;
  @include adaptive_font(100, 50);

  @include breakpoint-down(sm) {
    width: 100%;
    height: rem(300);
  }
}

@keyframes pulse-bg {

  0% {
    background-color: #1c1c1c;
  }
  50% {
    background-color: #414141;
  }
  100% {
    background-color: #1c1c1c;
  }
}

</style>
