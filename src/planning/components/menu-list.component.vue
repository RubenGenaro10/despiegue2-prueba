<script>


import ItemCard from "./item-card.component.vue";

export default {
  name: "menu-list",
  components: {ItemCard},
  props: {
    menus: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div>
    <h2>Menus</h2>
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