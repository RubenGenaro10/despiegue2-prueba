<script>
import {PlanningApiService} from "../services/planning-api.service.js";

export default {
  name: "menu-selection.component",
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      const planningApiService = new PlanningApiService();
      planningApiService.getAllRestaurants()
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
</script>

<template>
  <h1>Aqui se selecciona los menus por id del restaurante</h1>
</template>

<style scoped>

</style>