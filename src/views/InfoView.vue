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
    <div class="content-extras col-xs-12 col-sm-12 col-md-1 offset-md-3">
      <div>
        <h2 class="text-weight-bolder no-margin text-uppercase">7.9</h2>
        <span>/10</span>
      </div>
      <div class="text-subtitle1">33,335 ratings</div>
    </div>
  </div>
  <!-- casts -->
  <div class="q-pl-md row">
    <div class="col">
      <h5 class="text-bold">Popular</h5>
    </div>
  </div>
  <div class="row actor-list">
    <div class="col-xs-12 col-sm-12 col-md-12">
      <q-scroll-area style="height: 400px">
        <div class="row no-wrap">
          <div v-for="n in 20" :key="n">
            <!-- <ItemCard></ItemCard> -->
          </div>
        </div>
      </q-scroll-area>
    </div>
  </div>
</template>

<script lang="ts">
import TvShowDataService from "@/services/TvShowDataService";
import { anyTypeAnnotation } from "@babel/types";
import { computed, ComputedRef, defineComponent } from "@vue/runtime-core";
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
    loadShowDetails() {
      TvShowDataService.getShowDetails(this.id).then((response) => {
        this.showDetails = response.data;
        console.log(this.showDetails);
        this.isLoading = false;
      });
    },
  },
  mounted() {
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
  bottom: 0;
}

.actor-list {
  position: relative;
}
</style>
