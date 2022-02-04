import { createStore } from "vuex";

export default createStore({
  state: {
    collapsed: false,
    menubarWidth: '260px'
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
        state.menubarWidth = '260px';
        state.collapsed = false;
      }
      else{
        state.menubarWidth = '100px';
        state.collapsed = true;
      }
    }
  },
  actions: {},
  modules: {},
});

