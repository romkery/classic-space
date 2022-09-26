<template>
  <div class="header">
    <div class="header__logo">NASA</div>
    <div class="header__tabs">
      <v-tabs
        background-color="teal-darken-3"
        show-arrows
        slider-color="#57ffec"
      >
        <NuxtLink to="/home">
          <v-tab class="header__tabs-home">Home</v-tab>
        </NuxtLink>
        <NuxtLink to="/news">
          <v-tab class="header__tabs-news">News</v-tab>
        </NuxtLink>
        <NuxtLink to="/planet">
          <v-tab class="header__tabs-planet">Planet</v-tab>
        </NuxtLink>
        <NuxtLink to="/about">
          <v-tab class="header__tabs-about">About</v-tab>
        </NuxtLink>
      </v-tabs>
    </div>
    <div class="header__info">
      <v-btn class="header__info-contacts">Contacts</v-btn>
    </div>
  </div>
</template>


<script setup lang="ts">


</script>


<style lang="scss">

.header {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  &__logo {
  }

  &__tabs {
    display: flex;
    gap: 10px;

    &-home {
    }

    &-news {
    }

    &-planet {
    }

    &-contacts {
    }
  }

  &__info {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
