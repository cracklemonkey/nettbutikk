<template>
  <div>
      <b-button  variant="primary" @click="purchase">kjøp</b-button>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {


computed: mapGetters(['allCartItems']),

data(){
    return{
        emptyList : []
    }
},
   

methods:{
    ...mapActions(['buyItems']),  
    
    
    

    purchase(){
        
       

        this.buyItems(this.emptyList)
        alert("Takk for at du handlet hos oss")
        
        
    }
}
}

</script>

<style>

</style>