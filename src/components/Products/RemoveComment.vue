<template>

    <div>
      <button @click="remove"><img src="https://img.icons8.com/android/24/000000/delete.png"/></button>
    </div>  
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'RemoveComment',
    props:['id'],

    methods:{
        ...mapActions(['removeComment']),



    remove(){
        console.log(this.id)
        this.$emit('remove')
        this.removeComment(this.id)
        
       
    }

    }

}
</script>

<style>

</style>