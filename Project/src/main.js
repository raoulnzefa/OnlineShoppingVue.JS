import Vue from 'vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faFacebookF , faTwitter,faLinkedinIn,faPinterestP} from '@fortawesome/free-brands-svg-icons'
import { faHeart,faPhoneAlt,faEnvelope,faShoppingCart,faPaperPlane ,faSearch,faUser} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import VueForm  from 'vue-form'
import "bootstrap"
import axios from 'axios'
import  VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { DataTables, DataTablesServer } from 'vue-data-tables'

import ComponentsImport from './mixins/ComponentsImport.js'
import AllURL from './mixins/AllURL.js'
import App from './App.vue'
import router from './router'
import store from './store'



// to use fontawesome library
library.add(faFacebookF ,faSearch, faTwitter,faLinkedinIn,faPinterestP,faUser,faHeart,faPhoneAlt,faEnvelope,faShoppingCart,faPaperPlane);
Vue.component('font-awesome-icon',FontAwesomeIcon);

// for form validation
Vue.use(VueForm);

//For use data tables
Vue.use(ElementUI);
Vue.use(DataTables);
Vue.use(DataTablesServer);

//mixins
Vue.mixin(ComponentsImport);
Vue.mixin(AllURL);
Vue.config.productionTip = false

// axios 
Vue.use(VueAxios,axios);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
