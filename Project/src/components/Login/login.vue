<template>
    <div class="container  app">
         <div class="d-flex justify-content-center py-5">
            <router-link  to="/">
                <img src="@/assets/shopping_cart.png" alt="logo"/>
                <span class="h3 left">FUN</span><span class="h3 ">Shop</span>
            </router-link>
         </div>
         <div class=" d-flex justify-content-center py-2">
            <vue-form class="formBorder " :state ="formState" @submit.prevent="onSubmit"  >
                <validate auto-label class="form-group " :class="fieldClassName(formState.Email)">
                    <label class="h5 mb-3">Email</label>
                    <input type="email" class="form-control" v-model.lazy="model.Email" required name="Email"/>
                    <field-messages auto-label class="invalid-feedback"   name='Email'>
                        <span slot="required">Email is required ...</span>
                        <span slot="email">Email is not valid ...</span>
                    </field-messages>
                </validate><br/>

                <validate auto-label class="form-group"  :class="fieldClassName(formState.Password)">
                    <label class="h5 mb-3">Password</label>
                    <input type="password" class="form-control" required v-model.lazy="model.Password" name='Password'/>
                    <field-messages auto-label class="invalid-feedback"  name='Password'>
                        <span slot="required">Password is required ...</span>
                    </field-messages>
                </validate>
                <p class="h6 text-danger" v-if="check">Username or Password Incorrect !</p>
                 <div class="py-2 text-center">
                    <button class="btn btnSign" type="submit">sign in</button>
                </div>
                <hr/>
                <router-link class="btn btnSign text-white" to='/Signup' >Create Your FunShop Account  </router-link>
                
            </vue-form>
         </div>
    </div>
</template>

<script>
import Vue from 'vue'
import {mapMutations } from 'vuex'  
export default {
    data(){
        return{
            formState:{},
            check:false,
            model:{
                Email:'',
                Password:''
            }
        }
    },
    created:function(){
        this.headerHide();
    },
    methods:{
        ...mapMutations(['headerHide']),
        fieldClassName:function(field){
            if(!field) {
                return '';
            }
            if((field.$touched || field.$submitted)) {
                return 'was-validated';
            }
        },
        onSubmit:function(){
            if(this.formState.$valid){
                // check if user found login else password or user name is incorrect
                Vue.axios.get(this.userData).then((data)=>
                {
                    data.data.forEach(user =>{
                        if (this.model.Password == 'Admin' && this.model.Email =='Admin@yahoo.com' ) {
                            this.$router.push({path:'/Admin'});
                        }
                        if (user.Password == this.model.Password && user.Email ==this.model.Email ) {
                            this.$router.push({path:'/'});
                        }else{
                            this.check=true;
                        }
                    })
                })
                .catch(err=>console.log(err));
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.app{
    @extend .sign;
    @extend .border;
}
</style>