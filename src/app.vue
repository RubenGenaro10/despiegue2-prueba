<script>

import {defineComponent} from "vue";
import MenuCard from "./planning/components/menu-card.component.vue";

export default defineComponent({
  components: {MenuCard}
})
</script>

<template>
   <div class="body">
     <menu-card></menu-card>
   </div>


</template>

<style scoped>

.body{
  padding: 100px;
}
</style>