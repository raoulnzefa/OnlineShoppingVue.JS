<template>
  <div class="fluid-container slide">
    <div class="carousel " data-ride="carousel" id="slider">
      <div class="carousel-inner">
        <div class="carousel-item active slide1">
         <div style="position:relative">
              <div class="d-flex justify-content-around">
            <div>
              <p>Fruits</p>
              <h1>Natural 100&#37; Organic</h1>
              <button class="slides rounded-pill border-0 mt-5">VIEW ALL</button>
            </div>
            <div class="d-none d-md-block" >
              <img class="w-75" src="./../../../assets/HomePhotos/imgslide12.png" alt="Fruits" />
            </div>
          </div>
         </div>

           <div  style="position:absolute">
            <img src="./../../../assets/HomePhotos/imgslide20.png">
          </div>
        </div>

         

        <!-- <div class="carousel-item">slide 2</div>
        <div class="carousel-item">slide 3</div>-->
      </div>
      <button class="carousel-control-prev border-0 rounded-circle move" href="#slider" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" ></span>
      </button>
      <button class="carousel-control-next border-0 rounded-circle move" href="#slider" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.slide{
    @extend .slide1;
    .slide1{
         background-image: url(./../../../assets/HomePhotos/slider16.jpg);
         padding: 200px 80px;
    }
    .move {
        width: 50px;
        height: 50px;
        background-color: $DarkColor;
        margin:  auto;
    }
}
</style>