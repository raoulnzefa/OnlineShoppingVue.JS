<template>
    <div>
        <slider-component></slider-component>
    </div>
</template>
<script>
import {mapMutations } from 'vuex'  
import Slider from './Slider/slider.vue'
export default {
      created:function(){
        this.headerShow();
    },
    components:{
        sliderComponent:Slider
    },
    methods:{
        ...mapMutations(['headerShow']),}
}
</script>