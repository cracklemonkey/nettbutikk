<template>
  <section class="products">
      
    <div class="product" v-for="(product, index) in allProducts" :key="product +index">
        <b-card-group deck>
                    <b-card
                    class="card"
                    :title="product.title"
                    >
                    <b-card-img src="https://picsum.photos/400/400/?image=2" alt="Image" class="rounded-0"></b-card-img>
                    <add-too-cart :cartTitle="product.title" :cartPrice="product.price" />
                    <remove-product :productId="product.productid"/>
                    <b-button variant="secondary"><router-link :to="`/products/${product.productid}`">info</router-link></b-button>
                    
                    </b-card>

                   
                   
                    
                    
                   
                   
        </b-card-group>
              
              
              
              
          </div>
          <post-product :productId="this.getNewProductId(allProducts)"/>
      
  </section>
</template>

<script>


import {mapGetters, mapActions} from 'vuex'
import AddTooCart from '../shoppingCart/AddTooCart.vue'
import PostProduct from './PostProduct.vue'
import RemoveProduct from './RemoveProduct.vue'


export default {
    name: 'ProductList',
    computed: mapGetters(['allProducts']),

    
    created(){
        this.fetchProducts()
        
        
       
    },
    data: () =>({
        
    }),
    components: {
        AddTooCart,
        PostProduct,
        RemoveProduct
    },
    methods:{
        
        ...mapActions(['fetchProducts']),
        getNewProductId(proList){
        let highestId = 0
        console.log('testlist', proList)
        proList.forEach(element => {
            if(element.productid >= highestId){
                
                highestId = element.productid
                console.log("a", highestId)
            }
       
        
            
        });
        
        highestId+= 1
        console.log(highestId)
        return highestId  
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