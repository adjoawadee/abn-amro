<template>
  <div class="">
    <header class="header">
      <div class="row flex-center">
        <div class="col-xs-12 col-sm-6 col-md-4">
          <p class="q-pt-md q-pl-xl text-grey-2 text-weight-bold text-h6">
            <router-link style="text-decoration: none; color: inherit" to="/"
              >ABNShows</router-link
            >
          </p>
        </div>
        <div class="q-pa-md q-pr-lg col-xs-12 col-sm-6 col-md-8">
          <div class="q-gutter-xs" style="max-width: 600px">
            <q-input dark rounded outlined modelValue="Genre, Shows, etc..">
              <template v-slot:prepend>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
        </div>
      </div>
    </header>
    <router-view></router-view>
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

<style lang="scss">
body {
  background-color: black;
  color: white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: black;
}
</style>
