<template>
  <div class="doc-container">
    <!-- header -->
    <div class="row flex-center">
      <div class="q-pl-lg col-xs-12 col-sm-6 col-md-4">
        <p class="q-pt-md text-grey-2 text-weight-bold text-h6">ABNShows</p>
      </div>
      <div class="q-pa-md q-pl-lg q-pr-lg col-xs-12 col-sm-6 col-md-8">
        <div class="q-gutter-xs" style="max-width: 600px">
          <q-input dark rounded outlined modelValue="Genre, Shows, etc..">
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
      </div>
    </div>
    <!-- highlight details -->
    <div class="highlight-details row">
      <div class="q-pa-xl col-xs-12 col-sm-6 col-md-4">
        <div class="q-pl-xl highlight-text absolute-bottom-left">
          <p class="text-grey-2">Trending</p>
          <p class="text-grey-2">Trending</p>
        </div>
      </div>
    </div>
    <!-- scroller -->
    <div class="q-pt-xl row">
      <div class="q-pr-lg col-xs-12 col-sm-12 col-md-12">
        <q-scroll-area style="height: 330px">
          <div class="row no-wrap">
            <div
              v-for="n in 10"
              :key="n"
              style="width: 250px; height: 300px"
              class="q-pr-md q-pl-lg"
            >
              <q-img src="https://placeimg.com/200/300/nature" />
            </div>
          </div>
        </q-scroll-area>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  props: {
    modelValue: String,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.doc-container {
  height: 100vh;
  background-image: url(https://cdn.quasar.dev/img/parallax2.jpg);
}
.highlight-details {
  height: 100vh;
}
</style>
