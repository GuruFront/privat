import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
  	message: "Text from Vuex",
  	current: 0
  },
  mutations: {
	  updateCurrent (state, current) {
	    state.current = current;
	  }
  },
  getters:{
  	current(){
  	return state.current = current + 2;	
  	}
  }
})