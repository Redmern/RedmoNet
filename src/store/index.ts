import { createStore } from "vuex";

export default createStore({
  state: {
    collapsed: false,
    menubarWidth: '240px'
  },
  getters: {
    MenubarWidth(state) {
      return state.menubarWidth
    },
    GetCollapse(state) {
      return state.collapsed
    }
  },
  mutations: {
    ToggleMenubar(state, collapsed){
      if (collapsed) {
        state.menubarWidth = '240px';
        state.collapsed = false;
      }
      else{
        state.menubarWidth = '80px';
        state.collapsed = true;
      }
    }
  },
  actions: {},
  modules: {},
});

