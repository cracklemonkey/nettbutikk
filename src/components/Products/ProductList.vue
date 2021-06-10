<template>
  <section class="products">
      
    <div class="product" v-for="(product, index) in products" :key="product +index">
        <b-card-group deck>
                    <b-card
                    class="card"
                    :title="product.title"
                    >
                    <b-card-img src="https://picsum.photos/400/400/?image=2" alt="Image" class="rounded-0"></b-card-img>
                    <b-button variant="secondary">kjøp</b-button>
                    <b-button variant="secondary"><router-link :to="`/products/${product.id}`">info</router-link></b-button>
                    
                    </b-card>

                   
                   
                    
                    
                   
                   
        </b-card-group>
              
              
              
              
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
    
    
    
}
.product{
    flex: 1 0 21%;
    display: flex;
    flex-direction: column;
    
}





</style>