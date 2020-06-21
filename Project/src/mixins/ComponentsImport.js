import Footer  from './../components/Footer/Footer.vue';
import Header from './../components/Headers/Header.vue';
import Login from './../components/Login/login.vue';
import Signup from './../components/Register/signup.vue';
import Home from './../components/Home/home.vue'
import logoComponent from './../components/MainComponents/Logo.vue';

export default{
    components:{
        footerComponent:Footer,
        headerComponent:Header,
        loginComponent:Login,
        registerComponent:Signup,
        homeComponent:Home,
        logoComponent :logoComponent
    }
}