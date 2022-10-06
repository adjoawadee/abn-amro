<template>
  <div class="doc-container">
    <!-- carousel -->
    <CarouselComponent :shows="bannerShows"></CarouselComponent>
    <!-- scroller -->
    <ScrollContent :shows="shows"></ScrollContent>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import CarouselComponent from "@/components/CarouselComponent.vue";
import ScrollContent from "@/components/ScrollContent.vue";
import TvShowDataService from "@/services/TvShowDataService";
import Show from "@/types/Show";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  name: "HomeView",
  components: { CarouselComponent, ScrollContent },
  data() {
    return {
      shows: new Array<Show>(),
    };
  },
  methods: {
    loadPopularShows() {
      TvShowDataService.getPopularShows().then((response: ResponseData) => {
        this.shows = response.data;
      });
    },
  },
  created() {
    this.loadPopularShows();
  },
  computed: {
    bannerShows(): Show[] {
      return this.shows.slice(0, 4);
    },
  },
});
</script>

<style>
.doc-container {
  height: 100vh;
}
</style>
