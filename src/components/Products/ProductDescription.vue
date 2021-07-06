<template>
  <section>
      <h1>Produkt informasjon</h1>
      <b-card no-body class="overflow-hidden" style="max-width: 540px; margin: auto;" v-if="oneProduct && oneProduct.title">
        <b-row no-gutters>
            <b-col md="6">
                <b-card-img src="https://picsum.photos/400/400/?image=2" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
                <b-card-body :title="oneProduct.title">
                <b-card-text >
                    {{oneProduct.body}}<br>
                    <b>{{oneProduct.price}}KR</b>
                </b-card-text>
                <add-too-cart :cartTitle="oneProduct.title" :cartPrice="oneProduct.price" />
                <update-product :productTitle="oneProduct.title" :productBody="oneProduct.body" :productPrice="oneProduct.price" @updateproduct="updateProducthandler" :key="updateAfterUpdateProductKey"/>
                </b-card-body>
            </b-col>
        </b-row>
  </b-card>
      
      
         
          

    
      <div>
          <post-comment @updatecomments="updateParent" :key="updateAfterPostKey"/>
          <product-feedback @update="updateParent" :key="updateAfterPostKey"/>
      </div>
      
      <p>{{errorMassage}}</p>
      
  </section>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import ProductFeedback from './ProductFeedback.vue'
import PostComment from './PostComment.vue'
import AddTooCart from '../shoppingCart/AddTooCart.vue'
import UpdateProduct from './UpdateProduct.vue';

export default {
    name: 'ProductDetails',
    computed: mapGetters(['oneProduct']),
    
    components:{
        ProductFeedback,
        AddTooCart,
        PostComment,
        UpdateProduct
    },
    created() {
        console.log(this.$route.params.productid )
        this.fetchProductById(this.$route.params.productid)
        
    },
 data() {
    return {
        product: {},
        errorMassage: '',
        updateAfterPostKey: 0,
        updateAfterUpdateProductKey: 0,

    };
  },   





methods: {
    ...mapActions(['fetchProductById']), 
    
    updateParent(){
        
        this.updateAfterPostKey += 1;
        
    },

    updateProducthandler(){
        
        this.updateAfterUpdateProductKey += 1;
        
    }

}
}

</script>

<style>

</style>