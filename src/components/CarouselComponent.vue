<template>
  <q-carousel
    class="main-carousel"
    animated
    v-model="slide"
    arrows
    navigation
    infinite
    swipeable
    height="80%"
  >
    <q-carousel-slide
      v-for="show in shows"
      :key="show.id"
      :name="show.id"
      :img-src="show.image.original"
      class="no-padding"
    >
      <div class="custom-caption items-center no-margin row">
        <div class="col-md-4 col-lg-4 offset-md-2 offset-lg-2">
          <div class="caption-inner">
            <div class="text-h1 no-margin text-uppercase text-bold">
              {{ show.name }}
            </div>
            <q-chip icon="star" color="orange" size="18px">
              <span class="q-pa-sm" style="display: inline">
                {{ show.rating.average }}
              </span>
            </q-chip>

            <div class="text-h6 q-pt-sm">
              <span v-for="genre in show.genres" :key="genre"
                >{{ genre }} |
              </span>
            </div>
            <div class="text-h4 q-pt-sm">{{ show.runtime }} mins</div>
            <div v-html="show.summary" class="text-body2 q-pt-sm"></div>
          </div>
        </div>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue";
import Show from "@/types/Show";

export default defineComponent({
  props: {
    shows: {
      required: true,
      type: Object as PropType<Show[]>,
    },
  },
  setup() {
    return {
      slide: ref(1),
      ratingModel: ref(1),
    };
  },
  methods: {
    updateRating(rating: number) {
      this.ratingModel = Math.ceil(rating / 5) * 5;
    },
  },
});
</script>

<style lang="scss" scoped>
.main-carousel {
  position: relative;
}
.custom-caption {
  width: 100%;
  height: 100%;
  padding: 40px;
  color: $grey-2;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 38%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>
