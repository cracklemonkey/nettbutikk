<template>
<section>
    <form @submit="updatetData" method="post">
         
        <b-form-input v-model="posts.title" value=productTitle></b-form-input>
         
         <b-form-textarea
                id="textarea"
                type="text"
                name="comment"
                v-model="posts.body"
                value=productBody
                rows="3"
                max-rows="6"
               
        ></b-form-textarea>

        <b-form-input v-model="posts.price" type="number" value=productPrice></b-form-input>


        <button type="submit">Update</button>
    </form>

</section>
  
</template>

<script>
import {mapActions} from 'vuex';
export default {
    props:['productTitle', 'productBody', 'productPrice'],
    name: 'UpdateProduct',

    data(){
        return {
           posts:{
               
            productid : parseInt(this.$route.params.productid),    
            title: null,
            body: null,
            price: 0,
            
            
        },
        products: {},
    
    }
    },
    methods:{

                
        ...mapActions(['updateProduct']),

        updatetData(e)
        {
            
            e.preventDefault()
            console.log("sa", this.posts.productid)
            
            this.updateProduct(this.posts)
            this.$emit('updateproduct')
            
            
            
        },

},

    
}
</script>

<style>

</style>