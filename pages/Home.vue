<template>
  <div class="home">
    <div class="home__title">
      <h1 class="animate__animated animate__slideInLeft">DO YOU WANT TO GO TO SPACE?</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Earth_Western_Hemisphere_transparent_background.png/1024px-Earth_Western_Hemisphere_transparent_background.png"
        alt="earth"
        class="animate__animated animate__slideInRight">
    </div>
    <v-lazy>
      <div class="home__info">
        <h2 class="animate__animated animate__fadeInUp">HERE YOU CAN SEE...</h2>
        <div class="home__info-mars animate__animated animate__fadeInUp">
          <img
            src="http://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2017-11/20170523_sha_z03_456.jpg?itok=xpL1E0Gf"
            alt="mars"/>
          <p>The latest photos<br> and<br> videos<br> from the rovers.</p>
        </div>
      </div>
    </v-lazy>
  </div>
</template>

<script setup lang="ts">

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

    &-mars {
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;

      img {
        width: rem(400);
        height: rem(400);
        border-radius: rem(10);
      }

      p {
        flex-grow: 1;
        @include adaptive_font(60, 20);
        word-break: break-all;
        text-align: center;
      }
    }
  }

}


</style>
