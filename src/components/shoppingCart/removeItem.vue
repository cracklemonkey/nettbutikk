<template>
  <div>
      <button @click="remove"><img src="https://img.icons8.com/android/24/000000/delete.png"/></button>
  </div>
</template>

<script>

import {mapActions} from 'vuex'
export default {
    name: 'RemoveItem',
    props:['cartItem'],
    

    methods:{
        ...mapActions(['removeItem']),

        remove(){
            console.log('id', this.cartItem)
            this.removeItem(this.cartItem)
        }
    }

}
</script>

<style>

</style>