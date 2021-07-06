import axios from 'axios';

const state = {
    products: [],
    product: ""
};

const getters = {
    allProducts: state => state.products,
    oneProduct: state => state.product
    
};

const actions = {
    async fetchProducts({commit}) {
        const response = await axios.get(`http://localhost:5000/api/products`);

        console.log(response.data)
        commit('setProducts', response.data)

    },

    async fetchProductById({commit}, productid) {
        const response = await axios.get(`http://localhost:5000/api/products/${productid}`);

        console.log(response.data)
        commit('setProduct', response.data)

    },

    async postProduct({commit}, product, ) {
        const result = {}
        axios.post(`http://localhost:5000/api/products/${product.productid}`, product )
            .then((result)=>{
                console.log('co', product)
                console.log("as", result.data)
                
               
            })
        commit('postProduct', result.data)
    },

    async removeProduct({commit}, productid){
        axios.delete(`http://localhost:5000/api/products/${productid}`)
        

        commit('removeProduct')

    },

    async updateProduct({commit}, product){
        const result = {}
        axios.put(`http://localhost:5000/api/products/${product.productid}`, product )
            .then((result)=>{
                console.log('co', product)
                console.log("as", result.data)
                
               
            })
        commit('updateProduct', result.data)
    }
}
    

const mutations = {
    setProducts:(state, product) => (state.products = product),
    setProduct:(state, product ) => (state.product = product),
    postProduct:(state, product ) => state.products.push(product),
    updateProduct:(state, product) => state.products.forEach(element => {
        if(element.productid == product.productid){
            element = product
        }
        
    }),
    removeProduct:(state) => (state.products)
    
};

export default {
    state,
    getters,
    actions,
    mutations

};