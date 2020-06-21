import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    header : 'All',
    nav: 'Hide'
  },
  getters:{
    headerShow:function (state){
      return state.header;
    },
    nav:function (state){
      return state.nav;
    }
  },
  mutations: {
    headerHide:function (state) {
      state.header='Sign';
    },
    headerShow:function (state) {
      state.header='All';  
    },
    navHide:function (state) {
      state.nav='Hide';
    },
    navShow:function (state) {
      state.nav='Show';  
    }
  },
  actions: {
  },
  modules: {
  }
})
