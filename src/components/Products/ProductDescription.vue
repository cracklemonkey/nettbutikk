<template>
  <section>
      <h1>Produkt informasjon</h1>
      <ul v-if="product && product.title">
          <li>Tittel: {{product.title}}</li>
          <li>Information: {{product.body}}</li>
          

      </ul>
      
      <p>{{errorMassage}}</p>
      
  </section>
</template>

<script>

import axios from 'axios'
export default {
    name: 'ProductDetails',
    
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
         axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
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