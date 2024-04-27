<script>

import {PlanningApiService} from "../services/planning-api.service.js";
import  {Menu} from "../model/menu.entity.js";
import ItemCard from "../components/item-card.component.vue";

export default {
  name: "menu-selection",
  components:{ ItemCard},
  data(){
    return {
      nameRestaurant:"",
      menus:[],
      errors:[],
      planningApi: new PlanningApiService(),
      selectCategory: ""
    }
  },
  created() {
    const restaurantId = this.$route.params.id;
    this.getMenusByRestaurantId(restaurantId);
    this.getRestaurantById(restaurantId);
  },
  methods:{
    //id, entradas, segundo, bebidas, restaurantId
    buildMenuListFromResponseData(menus){
      return menus.map(menu =>{
        return new Menu(
            menu.id,
            menu.entradas.map(entrada => ({id: entrada.id, name: entrada.name, category: entrada.category, stock: entrada.stock,urlToImage:entrada.urlToImage})),
            menu.segundo.map(segundo => ({id: segundo.id, name: segundo.name, category: segundo.category, stock: segundo.stock,urlToImage:segundo.urlToImage})),
            menu.bebidas.map(bebida => ({id: bebida.id, name: bebida.name, category: bebida.category, stock: bebida.stock,urlToImage:bebida.urlToImage})),
            menu.restaurantId);
      })
    },
    getMenusByRestaurantId(restaurantId) {
      this.planningApi.getMenusByRestaurantId(restaurantId)
          .then(response => {
            let menus = response.data.menus;
            this.menus = this.buildMenuListFromResponseData(menus);
            console.log(menus);
          })
          .catch(error => {
            this.errors.push(error);
          });
    },
    getRestaurantById(restaurantId) {
      this.planningApi.getRestaurantById(restaurantId)
          .then(response => {
            this.nameRestaurant = response.data.name;
          })
          .catch(error => {
            this.errors.push(error);
          });
    },
    onCategorySelected(event) {
      this.selectCategory = event.target.value;
    }
  }
}
</script>

<template>
  <h1 class="m-5 p-2">Carta de {{nameRestaurant}}</h1>
  <select v-model="selectCategory" @change="onCategorySelected">
    <option value="">Selecciona una categoría</option>
    <option value="Saludable">Saludable</option>
    <option value="Normal">Normal</option>
  </select>
  {{selectCategory}}
  <div class="carta">
    <div v-for="menu in menus" :key="menu.id">
      <h4>Entradas</h4>
      <div class=" flex flex-wrap justify-content-center ">
        <item-card v-for="entrada in menu.entradas"  v-show="selectCategory===entrada.category || selectCategory ==='' " :key="entrada.id" :name="entrada.name" :stock="entrada.stock" :imagen="entrada.urlToImage" :category="entrada.category" class="w-1/4 m-6" />
      </div>
      <h4>Segundo</h4>
      <div class=" flex flex-wrap justify-content-center ">
        <item-card v-for="segundo in menu.segundo" v-show="selectCategory===segundo.category || selectCategory ===''" :key="segundo.id" :name="segundo.name" :stock="segundo.stock" :imagen="segundo.urlToImage" :category="segundo.category" class="w-1/4 m-6"/>
      </div>
      <h4>Bebidas</h4>
      <div class=" flex flex-wrap justify-content-center ">
        <item-card v-for="bebida in menu.bebidas" v-show="selectCategory===bebida.category || selectCategory ===''" :key="bebida.id" :name="bebida.name" :stock="bebida.stock" :imagen="bebida.urlToImage" :category="bebida.category" class="w-1/4 m-6"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carta{
  background-color: #d2f0cd;
  padding:50px;
  margin: 50px;
  border:2px solid black;
  border-radius: 20px;
}
</style>