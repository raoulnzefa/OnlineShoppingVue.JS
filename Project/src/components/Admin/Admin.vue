<template>
    <div>
        <nav class=" navbar navbar-expand-lg navbar-dark">
            <div class="container">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
                </button>
                <router-link class="navbar-brand" to="Admin">Administrator</router-link>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0" >
                        <li class="nav-item active">
                            <router-link v-if="nav=='Show'" class="nav-link" to="List">Products <span class="sr-only">(current)</span></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link v-if="nav=='Show'" class="nav-link" to="Add">Add Product</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link v-if="nav=='Show'" class="nav-link" to="Categoties">Categoties</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link v-if="nav=='Show'" class="nav-link" to="Admin">Users</router-link>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <p class="h6 mr-2"> Welcome</p>
                        <button class="btn  my-2 my-sm-0 logout" type="submit"></button>
                    </form>
                </div>
            </div>
        </nav>
        <router-view></router-view>
    </div>  
</template>
<script>
import {mapMutations,mapGetters } from 'vuex'  
export default {
      created:function(){// to hide main Header
        this.headerHide();
    },
    computed:{
        ...mapGetters(['nav'])
    },
    methods:{
        ...mapMutations(['headerHide']),}
}
</script>
<style scoped lang='scss'>
    nav{
        background-color: $colorDark;
        color: $colorWhite;
        @extend .AdminButton;      
    }
</style>