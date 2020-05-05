export const actions = {
  addTodo({ commit }, payload) {
    //no api from backend play then commit :3
    let i = 0;
    const payloadId = {
      id: i++,
      task:payload,
    };
    commit('addTodo', payloadId);
  },

  //new way (arrow function)
  // addTodos :({commit}, payload) =>{
  //     //no api from backend play then commit :3
  //     commit('addTodo',payload)
  // },
};
