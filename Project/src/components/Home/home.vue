<template>
    <div>
        <slider-component></slider-component>
        <part1-component></part1-component>
        <feature-component></feature-component>
        <sales-component></sales-component>
        <information-component></information-component>
        <adv-component></adv-component>
        <notified-component></notified-component>
    </div>
</template>
<script>
import {mapMutations } from 'vuex'  
import Slider from './Slider/slider.vue'
import Products from './Part1/Products.vue'
import Adv from './Addversiement/adv.vue'
import Featured from './Featured/feature.vue'
import Information from './Information/information.vue'
import Notified from './Notified/notified.vue'
import Sales from './Sales/sales.vue'

export default {
      created:function(){
        this.headerShow();
    },
    components:{
        sliderComponent:Slider,
        part1Component:Products,
        advComponent:Adv,
        featureComponent:Featured,
        informationComponent:Information,
        notifiedComponent:Notified,
        salesComponent:Sales
    },
    methods:{
        ...mapMutations(['headerShow']),}
}
</script>