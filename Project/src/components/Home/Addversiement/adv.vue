<template>
    <diV class="container adv">
        <h2 class="HomeH2">Our Brands</h2>
         <VueSlickCarousel class="pt-5 pb-5" v-bind="settings" >
             <div><img  src="@/assets/HomePhotos/Ads/brand1.png"/></div>
             <div><img  src="@/assets/HomePhotos/Ads/brand2.png"/></div>
             <div><img  src="@/assets/HomePhotos/Ads/brand3.png"/></div>
             <div><img  src="@/assets/HomePhotos/Ads/brand4.png"/></div>
             <div><img  src="@/assets/HomePhotos/Ads/brand5.png"/></div>
             <div><img  src="@/assets/HomePhotos/Ads/brand1.png"/></div>
             <div><img  src="@/assets/HomePhotos/Ads/brand1.png"/></div>
        </VueSlickCarousel>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    data(){
       return{  
           "settings":{ 
                    "lazyLoad": "ondemand", "infinite": true,"speed": 200,//fast of scroll
                    "slidesToShow": 6, "slidesToScroll": 2, "touchThreshold": 5,
                    "responsive":[// according window sizes => number of slides to shoe
                         {"breakpoint":1024//breakpoint == window size
                        ,"settings":{"slidesToShow":4}}, {"breakpoint":820,"settings":{"slidesToShow":3}},{"breakpoint":600,"settings":{"slidesToShow":2,"slidesToScroll":2}}  ]
           }
        }
    },
    components: { VueSlickCarousel },
  }
</script>

<style scoped lang="scss">
.adv{
   div:focus{
        outline: $HomeBrandDivOutline;
    }
    img{
         margin: $HomeBrandImgMargin;
    }
    div{
        width: $HomeBrandDivWidth;
    }
    h2{
        background: $HomeFeatureBackground;
       @extend .HomeH2;
    }
}
</style>