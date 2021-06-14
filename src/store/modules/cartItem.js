
const state = {
    cartItems: []
};

const getters = {
    allCartItems: state => state.cartItems
    
};

const actions = {
    addTooCart({commit}, cartItem){
        commit('addTooCart', cartItem)
    },

    removeItem({commit}, cartItem){
        commit('removeItem', cartItem)
    },

    buyItems({commit}, emptyList){
        commit('buyItems', emptyList)
    }
    
};

const mutations = {
   addTooCart: (state, cartItem) => state.cartItems.push(cartItem),
   removeItem:(state, cartItem) => state.cartItems = state.cartItems.filter(obj => obj.id != cartItem),
   buyItems: (state, emptyList) => state.cartItems =  emptyList
    
};

export default {
    state,
    getters,
    actions,
    mutations

};