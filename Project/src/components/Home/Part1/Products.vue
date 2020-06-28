<template>
  <div class="container ">
    <div class="row">
      <div class="col-md-6 col-11  content" v-for="item in AllElements" :key="item.h3Data">
        <router-link to="/" class="display d-flex justify-content-between">
          <div class="texts">
            <p class="h5 font-italic">{{item.h5Data}}</p>
            <p class="h3 text-dark font-weight-bold">{{item.h3Data}}</p>
            <p class="text-dark">{{item.pData}}</p>
          </div>
          <div> <img class="img-fluid" :src="item.imgSrc" alt="img1" /> </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import nuts from '@/assets/HomePhotos/Home-Part14.jpg'
import fruit from '@/assets/HomePhotos/Home-Part11.png'
import vegetable from '@/assets/HomePhotos/Home-Part12.png'
import sale from '@/assets/HomePhotos/Home-Part13.png'
export default {
    data(){
        return{
            AllElements:[{h5Data:'Product organic',h3Data:'Fresh Nuts',pData:'100% Natural Nuts',imgSrc:nuts}
            ,{h5Data:'Product Fruits',h3Data:'Fresh Fruit',pData:'Coming From The Natural Farm',imgSrc:fruit}
            ,{h5Data:'Featured',h3Data:'Fresh vegetable Farm',pData:'100% Natural Vegetables',imgSrc:vegetable},
            {h5Data:'Product Sale',h3Data:'Extra 20% Off Food',pData:'On all Weekend Sales',imgSrc:sale}]
        }
    }
};
</script>

<style scoped lang="scss">
.container {
    @media (min-width: 768px){
    .col-md-6 {
    max-width: 47%;
}}
  .content {
    border-radius:$HomePart1BorderRaduis;
    background-color: $LightGrayColor;
    margin: $HomePart1Margin;
    padding: 20px;
    a{
        @include anchor($HomePart1TextDecoration,$DarkColor);
    }
    .texts {
        margin: $HomePart1TextsMargin;
    }
    img {
        margin: $HomePart1ImgMargin;
    }
  }
  .display {
    transition: $transition;
  }
  .display:hover {
    transform: $HomePart1Scale;
  }
}
</style>