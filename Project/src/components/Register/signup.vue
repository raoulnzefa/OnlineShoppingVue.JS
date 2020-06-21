<template>
    <div class="container app">
         <div class="d-flex justify-content-center py-4">
                <router-link  to="/">
                    <img src="@/assets/shopping_cart.png" alt="logo"/>
                    <span class="h3 left">FUN</span><span class="h3 ">Shop</span>
                </router-link>
         </div>
          <div class="d-flex justify-content-center d-md-block mr-3 ml-3 py-5">
              <vue-form class="formBorder" :state="formState" @submit.prevent="onSubmit" >
                  <div class="row">
                      <div class="col-12 col-md-5 offsetm-md-1"><!--left side of form-->
                          <validate auto-label class="form-group required-field" :class="fieldForm(formState.FullName)"> 
                              <label  class="h5 mb-3">FullName</label>
                              <input type="text" class="form-control " minlength="5" v-model.lazy="model.FullName" required name='FullName'>
                              <field-messages auto-label class="invalid-feedback"  show='$touched||$submitted' name='FullName'>
                                  <span slot="required">FullName is required ...</span>
                              </field-messages>
                          </validate>

                          <validate auto-label class="form-group required-field" :class="fieldForm(formState.Email)"> 
                              <label  class="h5 mb-3">Email</label>
                              <input class="form-control " type="email" v-model.lazy="model.Email" required name='Email'>
                              <field-messages auto-label class="invalid-feedback"  show='$touched||$submitted' name='Email'>
                                  <span slot="required">Email is required ...</span>
                                  <span slot="email">Email is not valid ...</span>
                              </field-messages>
                          </validate>
<!-- repassword validation && add 0 to input tye -->
                          <validate auto-label class="form-group required-field" :class="fieldForm(formState.Password)"> 
                              <label  class="h5 mb-3">Password</label>
                              <input type="password" class="form-control " required minlength="8" v-model.lazy="model.Password" name="Password">
                              <field-messages auto-label class="invalid-feedback"  show='$touched||$submitted' name='Password'>
                                  <span slot="required">Password is required ...</span>
                                  <span slot="minlength">Password must be 8 letters at least</span>
                              </field-messages>
                          </validate>

                          <validate auto-label class="form-group required-field" :custom='{customValodator:customValodator}' :class="fieldForm(formState.RePassword)"> 
                              <label  class="h5 mb-3">Re-password</label>{{getvalidation}}
                              <input  type="password" class="form-control " customValodator v-model.lazy="model.RePassword" name="RePassword">
                              <field-messages  class="invalid-feedback"  show='$touched||$submitted' name='RePassword'>
                                  <span slot="customValodator">Don't match password ...</span>       
                              </field-messages>
                          </validate>
                      </div>
                      <div class="col-12 col-md-5 offset-md-1"><!--right side of form-->
                        <validate class="form-group required-field" :class='fieldForm(formState.PhoneNumber)'>
                            <label class="h5 mb-3">Phone Number</label> <!--To prevent negative number-->
                            <input type='number' class="form-control " v-model.lazy='model.PhoneNumber' required min="10000000000" max="99999999999"  name="PhoneNumber"/>
                            <field-messages auto-label class="invalid-feedback"  show='$touched||$submitted' name='PhoneNumber'>
                                <span slot="required">Phone Number is required ...</span>
                                <span slot="min" > Phone Number must be 11 </span>
                                <span slot="max"> Phone Number must be 11 </span>
                            </field-messages>
                        </validate>
                        <validate class="form-group required-field" :class='fieldForm(formState.RePassword)'>
                            <label class="h5 mb-3">Date of Birth</label>
                            <input class="form-control " type="date" required v-model.lazy="model.DOB" name="DOB"/>
                            <field-messages auto-label class="invalid-feedback"  show='$touched||$submitted' name='DOB'>
                                <span slot="required">Date of Birth is required ...</span>
                            </field-messages>
                        </validate>
                        <validate class="form-group required-field" :class='fieldForm(formState.Gender)'>
                            <label class="h5 mb-3">Gender</label>
                            <br/>
                            <div v-for="category in GenderVal" :key="category">
                                <input  type="radio" required name="Gender" v-model.lazy='model.Gender' :value="category"/>
                                <span class="h6 ml-3">{{category}}</span>
                            </div>
                        </validate>
                        <p class="h5 text-danger" v-if="check">This Email is exist !</p>
                        <hr/>
                        <button class="btn btnSign" type="submit">SIGN UP</button>
                        <div class="d-flex justify-content-end">
                         <router-link class="h6 forget" to="Login">Arleady Have Account ? </router-link>
                        </div>
                      </div>
                  </div>
              </vue-form>
          </div>
    </div>
</template>

<script>
import  Vue from 'vue'
import {mapMutations } from 'vuex'  

export default {
    data(){
        return{
            formState:{},check:false,
            model:{ FullName:'',Email:'',PhoneNumber:'', Password:'',RePassword:'', Gender : 'Female',DOB : ''},
            GenderVal : ['Female','Male']
        }
    },
    computed: {
        getvalidation:function(){
            return this.model.Password == this.model.RePassword;
        }    
    },
    created:function(){
        this.headerHide();
    },
    methods:{
        ...mapMutations(['headerHide']),
        customValodator:function(){
            return this.model.Password == this.model.RePassword;
        },
        fieldForm:function(field){
            if(!field)return ''
            if(field.$touched || field.$submitted)return 'was-validated'; 
        },
        onSubmit:function(){
            console.log(this.formState.RePassword)
            if(this.formState.$valid){
                Vue.axios.get(this.userData).then((data)=>{
                data.data.forEach(users=>{
                    if(users.Email == this.model.Email)this.check=true;
                    else this.addUser()
                });}).catch(()=>{console.log('err')});  
            }
        },
        addUser:function(){// to add new  user 
             Vue.axios.post(this.userData,this.model).then(()=>this.$router.push({path:'/'})).catch(()=>{});
        }
    }   
}

</script>

<style lang="scss" scoped>

.app{
    @extend  .sign;
    @extend  .border;
    @extend  .required-field ;

    // to hode input number arows
    @extend .disappearNumberArrows;
    
    .forget{
        color: $colorOrange;
        text-decoration: underline;
    }
    .forget:hover{
        color: $colorDark;
        text-decoration: underline;
    }
}
</style>