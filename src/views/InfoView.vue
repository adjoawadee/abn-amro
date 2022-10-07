<template>
  <div class="q-pa-md row content">
    <div
      class="content-poster col-xs-12 col-sm-12 col-md-4"
      :style="{ backgroundImage: `url(${showDetails.image.medium})` }"
    ></div>

    <div class="content-description col-xs-12 col-sm-12 col-md-5 offset-md-1">
      <h2 class="text-weight-bolder no-margin text-uppercase">
        {{ showDetails.name }}
      </h2>
      <div class="text-h5 q-pt-lg">
        <span v-for="genre in showDetails.genres" :key="genre"
          >{{ genre }} |
        </span>
        <div class="text-h4 q-pt-sm">{{ showDetails.runtime }} mins</div>
      </div>
      <div v-html="showDetails.summary" class="text-body2 q-pt-sm"></div>
      <div class="watch-more-btn" color="orange">
        <q-btn unelevated rounded color="primary" label="Watch Trailer" />
      </div>
    </div>
    <div class="content-extras col-xs-12 col-sm-12 col-md-1">
      <div>
        <h2 class="text-weight-bolder no-margin text-uppercase">
          {{ showDetails.rating.average }}
        </h2>
        <span>/10</span>
      </div>
      <div class="text-subtitle1">33,335 ratings</div>
    </div>
  </div>
</template>

<script lang="ts">
import TvShowDataService from "@/services/TvShowDataService";
import { computed, defineComponent } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import Show from "@/types/Show";
import Cast from "@/types/Cast";
import ItemCard from "@/components/ItemCard.vue";

export default defineComponent({
  name: "InfoView",
  // components: { ItemCard },
  data() {
    return {
      showDetails: {} as Show & Cast,
    };
  },
  setup() {
    const isLoading = true;
    const route = useRoute();
    const id = computed(() => route.params.id);
    return {
      isLoading,
      id,
    };
  },
  methods: {
    async loadShowDetails() {
      TvShowDataService.getShowDetails(this.id).then((response) => {
        this.showDetails = response.data;
        this.isLoading = false;
      });
    },
  },
  created() {
    this.loadShowDetails();
  },
});
</script>

<style lang="scss" scoped>
.content {
  height: auto;
  padding: 5%;
}

.content > .content-poster {
  height: 600px;
  width: 450px;
  background-size: cover;
  background-position: center;
}

.content > .content-description {
  position: relative;
  min-height: 600px;
  width: 450px;
}

.content > .content-description .watch-more-btn {
  position: absolute;
  bottom: 5px;
}

.actor-list {
  position: relative;
}
</style>
