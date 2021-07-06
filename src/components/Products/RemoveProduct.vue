<template>

    <div>
      <button @click="remove"><img src="https://img.icons8.com/android/24/000000/delete.png"/></button>
    </div>  
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'RemoveProduct',
    props:['productId'],

    methods:{
        ...mapActions(['removeProduct']),

    remove(){
        console.log(this.productId)
        this.removeProduct(this.productId)
        
    }

    }

}
</script>

<style>

</style>