export default {
    addPet: ({commit}, payload) => {
        commit('appendPet', payload) // commit comes from vuex and pet is the parameter passing to the function and appendPet is the mutation
    }
}