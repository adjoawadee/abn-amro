<!-- eslint-disable prettier/prettier -->
<template>
  <div class="show-item-card">
    <div style="width: 250px" class="q-pa-md card-image">
      <q-img :src= show.image.medium>
        <div class="absolute-full text-subtitle2 flex flex-center card-button">
          <q-btn
            unelevated
            rounded
            color="red-7"
            label="Show more"
            :to="'/shows/' + show.id"
          ></q-btn>
        </div>
      </q-img>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Show from "@/types/Show";

export default defineComponent({
  props: {
    show: {
      required: true,
      type: Object as PropType<Show>,
    },
  },
});
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
