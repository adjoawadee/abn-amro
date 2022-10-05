<template>
  <div class="q-pl-md row">
    <div class="col">
      <h5 class="text-bold">Popular</h5>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12">
      <q-scroll-area style="height: 400px">
        <div class="row no-wrap">
          <div v-for="n in 20" :key="n">
            <ItemCard></ItemCard>
          </div>
        </div>
      </q-scroll-area>
    </div>
  </div>
</template>

<script lang="ts">
import ItemCard from "./ItemCard.vue";
export default { components: { ItemCard } };
</script>
