<script>
export default {
  name: "item-card",
  props: {
    name: {
      type: String,
      required: true
    },
    stock: {
      type: Number,
      required: true
    },
    imagen:{
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <pv-card style="width: 16rem; overflow: hidden" class="border-1 border-round-3xl mb-8">
    <template #header>
      <div class="flex justify-content-center container-img">
        <img :alt="name" :src="imagen" class="flex align-items-center justify-content-center border-1 border-circle absolute" />
      </div>
    </template>

    <template #title>
      <div class="ml-3 mt-7 mb-0 p-0">
        {{ name }}
      </div>
    </template>
    <template #subtitle><span class="ml-3 m-0 mb-0 p-0">{{category}}</span></template>
    <template #content>
      <div class="pt-0 mt-0 container-stock">
        <span class="ml-3 p-0 m-0">Stock:{{ stock }} unidades</span>
      </div>
    </template>
    <template #footer>
      <div class="flex justify-content-center">
        <pv-button class="bg-green-500 mt-0 border-round-3xl" label="Seleccionar" icon="pi pi-plus-circle"  />
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
img{
  width:160px;
  height:144px;
  margin-top:-74px;
}

</style>