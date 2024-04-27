<script>
import RestaurantCard from "./restaurant-card.component.vue";

export default {
  name: "restaurant-list",
  components: {RestaurantCard},
  props: {
    restaurants: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div  class="flex flex-wrap justify-content-center">
    <restaurant-card v-for="restaurant in restaurants" :restaurant="restaurant" class="w-1/4 m-6"/>
  </div>
</template>

<style scoped>

</style>