import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
  	message: "Text from Vuex",
  	current: "",
    fromUSD:0

  },
  mutations: {
	  updateCurrent (state, current, fromUSD) {
	    state.current = current;
	  },
    updateUSD (state, fromUSD) {
      state.fromUSD = fromUSD;
    }
  },
  getters:{
  	current(){
  	return state.current = current + 2;	
  	}
  }
})