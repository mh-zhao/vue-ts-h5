const common = {
  state: {
    count: 10
  },

  mutations: {
    SET_STATE: (state:any, data:object) => {
      state = Object.assign(state, data);
    }
  },

  actions: {

  }
}

export default common;