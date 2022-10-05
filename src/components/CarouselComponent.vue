<template>
  <div class="q-pa-md">
    <q-carousel
      class="main-carousel"
      animated
      v-model="slide"
      arrows
      navigation
      infinite
    >
      <q-carousel-slide
        :name="1"
        img-src="https://cdn.quasar.dev/img/mountains.jpg"
      >
        <div class="absolute-bottom custom-caption">
          <div class="text-h3 text-bold">Movie Title</div>
          <div>
            <q-rating
              v-model="ratingModel"
              size="2em"
              color="orange"
              readonly
            />
          </div>
          <div class="text-subtitle1">Drama</div>
          <div class="text-subtitle1">staring:</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        :name="2"
        img-src="https://cdn.quasar.dev/img/parallax1.jpg"
      />
      <q-carousel-slide
        :name="3"
        img-src="https://cdn.quasar.dev/img/parallax2.jpg"
      />
      <q-carousel-slide
        :name="4"
        img-src="https://cdn.quasar.dev/img/quasar.jpg"
      />
    </q-carousel>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
      ratingModel: ref(3),
    };
  },
};
</script>

<style lang="scss">
.main-carousel {
  height: 93vh !important;
}
.custom-caption {
  padding: 40px;
  color: $grey-2;
  background: linear-gradient(
    0deg,
    $blue-grey-10 0%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>
