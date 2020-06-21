<template>
  <div class="app">
    <header-component v-if='headerShow=="All"'></header-component>
    <router-view class="router"></router-view>
    <footer-component></footer-component><!-- import footer -->
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  computed:{
    ...mapGetters(['headerShow'])
  }
}
</script>

<style scoped lang="scss">
body{
  background-color:$backgroundColorBody;
  .router{
      min-height: $minHeightBody;
    }
}
</style>