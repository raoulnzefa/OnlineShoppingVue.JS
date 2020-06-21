import Vue from 'vue';
import Router from 'vue-router';

import Login from './../components/Login/login.vue';
import Signup from './../components/Register/signup.vue';
import Home from './../components/Home/home.vue';
import AddProduct from './../components/Admin/product/addProduct.vue';
import listProduct from './../components/Admin/product/listProduct.vue';
import editProduct from './../components/Admin/product/editProduct.vue';
import Admin from './../components/Admin/Admin.vue';
import Main from './../components/Admin/main.vue';
import Category from './../components/Admin/Categories/category.vue';

Vue.use(Router);

const router = new Router({
    routes:[
        {path:'/Login',component:Login},
        {path:'/Signup',component:Signup},
        {path:'/Admin',component:Admin ,children:[
            {path:'/Add',component:AddProduct},
            {path:'/Edit',component:editProduct,name:'Edit',props:true},
            {path:'/Categoties',component:Category},
            {path:'/List',component:listProduct},
            {path:'/',component:Main},
        ]},
        {path:'/',component:Home},
    ],
    mode:'history'
});

export default router;
