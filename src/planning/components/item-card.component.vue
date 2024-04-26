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
    }
  }
}
</script>

<template>
  <pv-card style="width: 300px; overflow: hidden">
    <template #header>
      <div class="center-image">
        <img alt="user header" :src="imagen" />
      </div>
    </template>
    <template #title>
      <div class="card-title">
        {{ name }}
      </div>
    </template>
    <template #content>
      <div class="p-d-flex p-flex-column p-jc-center p-ai-center">
        <div class="p-d-flex p-jc-center p-ai-center">
          <span>Stock:</span>
          <span>{{ stock }} unidades</span>
        </div>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>

</style>