<template>
  <div>
      <b-button variant="secondary"  @click="addItem">legg til handlevogn</b-button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  props:['cartTitle', 'cartPrice'],
      

  data(){
    return{
      cartItem:{
        title: this.cartTitle,
        price: this.cartPrice,
        id: Math.floor(Math.random() * 10100090),

      }

    }
  },
  name: 'AddTooCart',

  methods:{
    ...mapActions(['addTooCart']),  
    
    addItem(){
     
      console.log('CI', this.cartItem)
      this.addTooCart(this.cartItem)
      alert(`produktet : ${this.cartItem.title} er lagt til handlevognen med en pris på ${this.cartItem.price}KR`)
    }
  }



}


</script>

<style>

</style>