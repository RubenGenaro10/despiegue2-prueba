<script>
import RestaurantList from "../components/restaurant-list.component.vue";
import {PlanningApiService} from "../services/planning-api.service.js";
import {Restaurant} from "../model/restaurant.entity.js";


export default {
  name: "restaurant-selection",
  components:{ RestaurantList},
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
    },
    getMenusByRestaurantId(restaurantId){
      this.planningApi.getMenusByRestaurantId(restaurantId)
          .then(response => {
            let menus = response.data.menus;
            this.menus=this.buildMenuListFromResponseData(menus);
            console.log(menus);
          })
          .catch(error => {
            this.errors.push(error);
          });
    }
  },

}
</script>

<template>
  <div class="container-restaurants">
    <h1 class="flex justify-content-center text-typography mb-8 pt-6">¡Ordena diferentes platillos de estos restaurantes!</h1>
    <restaurant-list :restaurants="restaurants" />
  </div>
</template>

<style scoped>
.container-restaurants{
  width:100%;
  background-color: #d2f0cd;
  margin:0;
}

.text-typography{
  font-family: "Playfair Display", serif;
  font-weight: 400;
  font-style: normal
}

</style>