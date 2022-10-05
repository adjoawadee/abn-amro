<template>
  <div class="q-pt-md row content">
    <div
      class="content-poster col-xs-12 col-sm-12 col-md-4"
      style="
        background-image: url(https://static.tvmaze.com/uploads/images/original_untouched/73/184895.jpg);
        height: 600px;
        width: 450px;
        background-size: cover;
        background-position: center;
      "
    ></div>
    <div class="content-description col-xs-12 col-sm-12 col-md-5 offset-md-1">
      <h2 class="text-weight-bolder no-margin text-uppercase">Movie Title</h2>
      <h6>Genre <span> | </span> 2h 30min</h6>
      <div class="text-subtitle1">A lot happening here we need an api</div>
      <div class="text-subtitle1">Director:</div>
      <div class="watch-more-btn">
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
            <ItemCard></ItemCard>
          </div>
        </div>
      </q-scroll-area>
    </div>
  </div>
</template>

<script lang="ts">
import ItemCard from "../components/ItemCard.vue";
export default { components: { ItemCard } };
</script>

<style lang="scss" scoped>
.content {
  height: auto;
  padding: 5% 0;
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
