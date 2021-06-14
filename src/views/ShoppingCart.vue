<template>
  <section>
    
      <h1>Dette er en handlevogn</h1>
      <b-card
              title="Dine produkter"
              img-src="https://picsum.photos/600/300/?image=10"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem; margin: auto;"
              class="mb-2"
  >  <b-list-group v-for="(cartItem, index) in allCartItems" class="cartItem" :key="index">
              <b-list-group-item>{{cartItem.title}} - {{cartItem.price}} KR<remove-item :cartItem="cartItem.id"/></b-list-group-item>
          </b-list-group>
          
          <buy-items/>
      </b-card>

    
  </section>
</template>

<script>
import {mapGetters} from 'vuex';
import buyItems from '../components/shoppingCart/BuyItems'
import RemoveItem from '../components/shoppingCart/removeItem.vue';
export default {
    computed: {
      ...mapGetters(['allCartItems']),

      
    
    },
    components:{
      buyItems,
      RemoveItem
    }


}
</script>

<style>

</style>