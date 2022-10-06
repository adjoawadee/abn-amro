<template>
  <ScrollTitle></ScrollTitle>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12">
      <q-scroll-area style="height: 400px">
        <div class="row no-wrap">
          <ItemCard
            v-for="(show, index) in shows.slice(0, 15)"
            :show="show"
            :key="index"
          ></ItemCard>
        </div>
      </q-scroll-area>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ItemCard from "./ItemCard.vue";
import ScrollTitle from "./ScrollTitle.vue";
import Show from "@/types/Show";

export default defineComponent({
  components: { ScrollTitle, ItemCard },
  props: {
    shows: {
      required: true,
      type: Object as PropType<Show[]>,
    },
  },
  methods: {
    filteredShows(genre: string): Show[] {
      return this.shows.filter((show) => {
        show.genres.includes(genre);
      });
    },
  },
  computed: {
    filterByDrama(): Show[] {
      return this.filteredShows("Drama");
    },
  },
});
</script>
