<script>
import {Menu} from "../model/menu.entity.js"

export default {
  name: "menu-card",
  props: {
    menu: {
      type: Menu,
      required: true
    }
  }
}
</script>

<template>
  <pv-card  style="width:300px; overflow: hidden">
    <template #header>
      <div class="center-image">
        <img alt="user header" src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Doki.png" />
      </div>
    </template>
    <template #title >
      <div class="card-title">
        {{menu.segundo.name}}
      </div>
    </template>
    <template #subtitle>
      <div class="p-d-flex p-jc-center">
        Segundo
      </div>
    </template>
    <template #content>
      <div class="p-d-flex p-flex-column p-jc-center p-ai-center">
        <div class="p-d-flex p-jc-center p-ai-center">
          <span>Stock:</span>
          <span>{{menu.segundo.stock}}unidades</span>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="center-button">
        <pv-button type="button" label="Agregar" class="p-button-success" icon="pi pi-plus-circle" />
      </div>
    </template>
  </pv-card>
</template>

<style scoped>

.card-title{
  margin-top:60px;
}

.center-image {
  display: flex;
  justify-content: center;

}
.center-image img {
  border-radius: 50%;
  border: 1px solid #000;
  width: 150px;
  height: 120px;
  margin-top: -60px;
  position:absolute;
}

.center-button {
  display: flex;
  justify-content: center;
}
</style>