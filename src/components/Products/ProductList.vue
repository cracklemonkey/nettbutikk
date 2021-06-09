<template>
  <section class="products">
      
          <div class="product" v-for="(product, index) in products" :key="product +index">
              <span>{{product.title}}</span>
               <button><router-link :to="`/products/${product.id}`">info</router-link></button>
              <button>kjøp</button>
              
          </div>
      
  </section>
</template>

<script>
import axios from 'axios'
export default {
    name: 'ProductList',
    created(){
        this.getProducts()
        
       
    },
    data: () =>({
        products: []
    }),
    methods:{
        
        
        getProducts() {
            axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(result => {
                this.products = result.data
               
            }).catch(error => {
                console.log('error', error)
            })
        }
    }

}
</script>

<style>
.products {
    display: flex;
    flex-wrap: wrap;
    color: red;
    
}
.product{
    flex: 1 0 21%;
    margin: 5px;
    height: 100px;
    background-color: blue;
    display: flex;
    flex-direction: column;
    
}



</style>