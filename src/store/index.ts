import { createStore } from "vuex";

export default createStore({
  state: {
    collapsed: false
  },
  getters: {
    GetCollapse(state) {
      return state.collapsed
    }
  },
  mutations: {
    ToggleMenubar(state, collapsed){
      if (collapsed) {
        state.collapsed = false;
      }
      else{
        state.collapsed = true;
      }
    }
  },
  actions: {},
  modules: {},
});

