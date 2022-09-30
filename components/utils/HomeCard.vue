<template>
  <v-lazy>
    <div class="home__info-news animate__animated animate__fadeInUp">
      <p v-html="replaceWithBr(props.text)"/>
      <img
        :src="props.imgSrc"
        alt="card"/>
    </div>
  </v-lazy>
</template>

<script setup lang="ts">
interface IProps {
  imgSrc: string,
  text: string,
  flexDirection: string
}

const props = defineProps<IProps>();
const fd = ref(props.flexDirection);

function replaceWithBr(text: string) {
  return text.replace(/\n/g, "<br />")
}

</script>

<style lang="scss">
@use './assets/scss/util' as *;

.home__info-news {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: v-bind(fd);
  align-items: center;
  animation-delay: .5s;

  img {
    width: min(30vw, rem(500));
    height: min(30vw, rem(500));
    border-radius: rem(10);
    object-fit: cover;
  }

  p {
    flex-grow: 1;
    @include adaptive_font(60, 10);
    word-break: break-all;
    text-align: center;
  }

  @include breakpoint-down(sm) {
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;
  }
}
</style>
