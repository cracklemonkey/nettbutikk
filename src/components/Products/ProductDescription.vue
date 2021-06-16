<template>
  <section>
      <h1>Produkt informasjon</h1>
      <b-card no-body class="overflow-hidden" style="max-width: 540px; margin: auto;" v-if="product && product.title">
        <b-row no-gutters>
            <b-col md="6">
                <b-card-img src="https://picsum.photos/400/400/?image=2" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
                <b-card-body :title="product.title">
                <b-card-text >
                    {{product.body}}<br>
                    <b>{{product.price}}KR</b>
                </b-card-text>
                <add-too-cart :cartTitle="product.title" :cartPrice="product.price" />
                </b-card-body>
            </b-col>
        </b-row>
  </b-card>
      
      
         
          

    
      <div>
          <post-comment/>
          <product-feedback/>
      </div>
      
      <p>{{errorMassage}}</p>
      
  </section>
</template>

<script>
import ProductFeedback from './ProductFeedback.vue'
import PostComment from './PostComment.vue'
import axios from 'axios'
import AddTooCart from '../shoppingCart/AddTooCart.vue'
export default {
    name: 'ProductDetails',
    
    components:{
        ProductFeedback,
        AddTooCart,
        PostComment
    },
    created() {
        console.log(this.$route.params.id )
        this.getProductDetails(this.$route.params.id)
    },
    



data: () => ({
    product: {},
    errorMassage: ''
}),
methods: {
    getProductDetails(id){
         axios.get(`http://localhost:4000/products/${id}`)
            .then(result => {
                this.product = result.data
            }).catch(() => {
                this.errorMassage = 'finner ingen produkter med denne IDen'
            })

    }
}
}
</script>

<style>

</style>