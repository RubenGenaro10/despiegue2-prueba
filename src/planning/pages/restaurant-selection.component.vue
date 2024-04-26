<script>
import RestaurantList from "../components/restaurant-list.component.vue";
import {PlanningApiService} from "../services/planning-api.service.js";
import {Restaurant} from "../model/restaurant.entity.js";
import MenuList from "../components/menu-list.component.vue";

export default {
  name: "restaurant-selection",
  components:{MenuList, RestaurantList},
  data(){
    return {
      restaurants:[],
      menus:[],
      errors:[],
      planningApi: new PlanningApiService()
    }
  },
  created() {
    this.getAllRestaurants();
  },
  methods:{
    //build restaurant list from response data
    buildRestaurantListFromResponseData(restaurants){
      return restaurants.map(restaurant =>{
        return new Restaurant(
            restaurant.id,
            restaurant.name,
            restaurant.email,
            restaurant.phone,
            restaurant.address,
            restaurant.schedule,
            restaurant.urlToImage);
      })
    },

    getAllRestaurants(){
      this.planningApi.getAllRestaurants()
        .then(response => {
          let restaurants = response.data;
          this.restaurants = this.buildRestaurantListFromResponseData(restaurants);
          console.log(response.data);
        })
        .catch(error => {
          this.errors.push(error);
        });
    }
  },
  getMenusByRestaurantId(restaurantId){
    this.planningApi.getMenusByRestaurantId(restaurantId)
      .then(response => {
        let menus = response.data.menus;
      })
      .catch(error => {
        this.errors.push(error);
      });
  }
}
</script>

<template>
  <div>
    <h1>Restaurant Selection</h1>
    <restaurant-list :restaurants="restaurants" />
    <menu-list v-if="menus.length > 0" :menus="menus"/>
  </div>
</template>

<style scoped>

</style>