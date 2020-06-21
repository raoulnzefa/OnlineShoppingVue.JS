<template>
    <div class='container'>
        <div class='row'>
            <div class='col-12'><p class="pBTN "> <router-link class="btns" to="List">Products  </router-link></p></div>
           <div class='col-12 col-md-10 offset-md-2'><p class="pBTN "><router-link class="btns" to="Add">AddProduct</router-link></p></div>
           <div class='col-12col-md-7 offset-md-4'><p class="pBTN "><router-link class="btns" to="Categoties">Categories</router-link></p></div>
           <div class='col-12 col-md-6 offset-md-6'><p class="pBTN "><router-link class="btns" to="Admin">Users Info</router-link></p></div>
        </div>
    </div>
</template>
<script>
import {mapMutations } from 'vuex'  

export default {
      created:function(){// to hide main Header
        this.navHide();
    },
    methods:{
        ...mapMutations(['navHide']),}
}
</script>
<style scoped lang='scss'>
  //Lato font
@import url('https://fonts.googleapis.com/css?family=Lato:400,700');
@include btn__split($colorOrange, $colorDark, $colorWhite);
.btns {
    font-family: "Lato", sans-serif;
	text-transform: uppercase;
	text-decoration: none;
    font-weight: 65px;
} 
.pBTN{
    margin: $mainMargin;
}
</style>