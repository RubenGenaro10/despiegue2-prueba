<script>
export default {
  name: "menu-list",
  props: {
    menus: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div class="p-d-flex p-flex-wrap p-jc-center">
    <menu-card v-for="menu in menus" :key="menu.id" :menu="menu" />
  </div>
</template>

<style scoped>

</style>