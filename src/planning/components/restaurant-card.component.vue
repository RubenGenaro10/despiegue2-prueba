<script>
import {Restaurant} from "../model/restaurant.entity.js";

export default {
  name: "restaurant-card",
  props: {
    restaurant: {
      type: Restaurant,
      required: true
    }
  },
  methods:{
    selectRestaurant() {
      this.$router.push(`/restaurants/${this.restaurant.id}/menus`)
    }
  }
}
</script>

<template>
  <pv-card style="width: 20rem; overflow: hidden">
    <template #header>
      <div class="flex justify-content-center container-img" >
        <img class="flex align-items-center justify-content-center" :src="restaurant.urlToImage" :alt="restaurant.name" style="width:200px;">
      </div>
    </template>
    <template #title><h3 class="ml-3 m-0 p-0">{{restaurant.name}}</h3></template>
    <template #subtitle><span class="ml-3 m-0">Restaurant</span></template>
    <template #content class="m-0 p-0">
        <h4 class="ml-4 p-0 m-0">Horario:</h4>
        <h5 class="ml-4 p-0 m-0">L-s : {{restaurant.schedule}}</h5>
    </template>
    <template #footer>
      <div class="flex justify-content-center">
        <pv-button @click="selectRestaurant" class="bg-green-500" label="Seleccionar" />
      </div>
    </template>
  </pv-card>
</template>

<style scoped>

</style>