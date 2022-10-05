<template>
  <div class="doc-container">
    <!-- carousel -->
    <CarouselComponent></CarouselComponent>
    <!-- scroller -->
    <ScrollContent></ScrollContent>
  </div>
</template>

<script lang="ts">
import CarouselComponent from "@/components/CarouselComponent.vue";
import ScrollContent from "@/components/ScrollContent.vue";
export default {
  name: "HomeView",
  components: { CarouselComponent, ScrollContent },
};
</script>

<style>
.doc-container {
  height: 100vh;
}
</style>
