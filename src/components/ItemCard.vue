<template>
  <div class="show-item-card">
    <div style="width: 250px" class="q-pa-md card-image">
      <q-img src="https://placeimg.com/200/300/nature">
        <div class="absolute-full text-subtitle2 flex flex-center card-button">
          <q-btn
            to="/show"
            unelevated
            rounded
            color="red-7"
            label="Show more"
          />
        </div>
      </q-img>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.show-item-card {
  padding: 0;
}
.card-image:hover .card-button {
  visibility: visible;
  opacity: 1;
  transition: 0.3s;
}
.q-img__content > div {
  color: $grey-2;
  background: linear-gradient(
    0deg,
    $blue-grey-10 0%,
    rgba(255, 255, 255, 0) 100%
  );
}

.show-item-card {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-button {
  visibility: hidden;
  opacity: 0;
  transition: 0.3s;
}
</style>
