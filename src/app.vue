<script>

import {defineComponent} from "vue";
import MenuCard from "./planning/components/menu-card.component.vue";

export default defineComponent({
  components: {MenuCard},
  data(){
    return {
     items:[
       { label: 'Restaurants',to:'/restaurants'},
       { label: 'Menus',to:'/menus'},
     ]
    }
  }
})
</script>

<template>
   <div class="body">
     <menu-card></menu-card>
   </div>
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>

.body{
  padding: 100px;
}
</style>