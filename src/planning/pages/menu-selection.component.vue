<script>

import {PlanningApiService} from "../services/planning-api.service.js";
import  {Menu} from "../model/menu.entity.js";
import ItemCard from "../components/item-card.component.vue";
export default {
  name: "menu-selection",
  components:{ItemCard},
  data(){
    return {
      restaurant: [],
      menus:[],
      errors:[],
      planningApi: new PlanningApiService()
    }
  },
  created() {
    this.getMenusByRestaurantId(2);
  },
  methods:{
    //id, entradas, segundo, bebidas, restaurantId
    buildMenuListFromResponseData(menus){
      return menus.map(menu =>{
        return new Menu(
            menu.id,
            menu.entradas.map(entrada => ({id: entrada.id, name: entrada.name, category: entrada.category, stock: entrada.stock})),
            menu.segundo.map(segundo => ({id: segundo.id, name: segundo.name, category: segundo.category, stock: segundo.stock})),
            menu.bebidas.map(bebida => ({id: bebida.id, name: bebida.name, category: bebida.category, stock: bebida.stock})),
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
    }
  }
}
</script>

<template>
  <h1>Aqui se selecciona los menus por id del restaurante</h1>
  <div>
    <div v-for="menu in menus" :key="menu.id">
      <h3>Menu {{ menu.id }}</h3>
      <div>
        <h4>Entradas</h4>
        <item-card v-for="entrada in menu.entradas" :key="entrada.id" :name="entrada.name" :stock="entrada.stock" />
      </div>
      <div>
        <h4>Segundo</h4>
        <item-card v-for="segundo in menu.segundo" :key="segundo.id" :name="segundo.name" :stock="segundo.stock" />
      </div>
      <div>
        <h4>Bebidas</h4>
        <item-card v-for="bebida in menu.bebidas" :key="bebida.id" :name="bebida.name" :stock="bebida.stock" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>