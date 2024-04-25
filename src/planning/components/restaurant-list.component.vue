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
  <div v-for="restaurant in restaurants">
    <restaurant-card :restaurant="restaurant"/>
  </div>
</template>

<style scoped>

</style>