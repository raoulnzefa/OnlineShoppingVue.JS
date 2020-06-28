<template>
    <div class=" info p-5 mb-5">
        <h2 class="HomeH2 m-5">We Grow Clean Food</h2>
        <div class="container text-center m-auto row ">
            <div class="col-lg-4 ">
                <div class=" text-lg-left" v-for="(item,index) in leftSide" :key="item.logo">
                    <h5 class="pl-lg-5 pt-2 pb-2"><img :src="getPhotos(index+1)" :alt="'logo'+item.logo"/> {{item.Header}}</h5> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate id quam vel aliquet.</p>
                </div>
            </div>
            <div class="col-lg-4 ">
                <img class="img-fluid" src="@/assets/HomePhotos/GrowPart/banner12.png" alt="brand"/>
            </div>
            <div class="col-lg-4">
                <div class="text-lg-left" v-for="(item,index) in rightSide" :key="item.logo">
                    <h5 class="pr-lg-5 pt-2 pb-2 text-lg-right right"><img :src="getPhotos(index+9)" :alt="'logo'+item.logo"/> {{item.Header}}</h5> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate id quam vel aliquet.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            leftSide:[{logo:'1',Header:"Healthy"},{logo:'2',Header:"Fresh"},{logo:'3',Header:"Premium"}],
            rightSide:[{logo:9,Header:"Nutrition"},{logo:10,Header:"Products"},{logo:11,Header:"Drinks"}],
        }
    },
    methods:{
        getPhotos:function(index){
            return require('../../../assets/HomePhotos/GrowPart/policy'+index+'.png')
        }
    }
    
}
window.onload= function(){getSize();}
window.onresize=function (){getSize()};
function getSize() {
let position = 'left';
document.getElementsByTagName('h5').forEach((element,index) => {
            if(index>2) position ='right';else if(window.innerWidth<992) position ='center';else position='left';
            element.style.background ='url('+require('../../../assets/HomePhotos/GrowPart/background'+(index+1)+'.png')+') no-repeat ' +position;
});
}
</script>
<style scoped lang="scss">
.info{
    background-color: $LightGrayColor;
    h2{
        @extend .HomeH2;
        background: $HomeFeatureBackground;
    }
    h5{
       color: $WhiteColor;
       font-family: $fonts;
    }
    p{
        color:$DarkGrayColor;
    }
}
</style>