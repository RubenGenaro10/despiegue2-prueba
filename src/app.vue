<script>

export default {
  components: {},
  data(){
    return {
     items:[
       { label: 'Restaurants',to:'/restaurants'},
       { label: 'Menus',to:'/menus'},
     ]
    }
  }
}
</script>

<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>

.body{
  padding: 100px;
}
</style>