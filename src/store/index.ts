import { createStore } from "vuex";

export default createStore({
  state: {
    collapsed: false,
    menubarWidth: '180px'
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
        state.menubarWidth = '180px';
        state.collapsed = false;
      }
      else{
        state.menubarWidth = '60px';
        state.collapsed = true;
      }
    }
  },
  actions: {},
  modules: {},
});

