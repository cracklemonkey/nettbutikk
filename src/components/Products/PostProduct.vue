<template>
<section>
    <form @submit="postData" method="post">
         
        <b-form-input v-model="posts.title" placeholder="Enter name of product"></b-form-input>
         
         <b-form-textarea
                id="textarea"
                type="text"
                name="comment"
                v-model="posts.body"
                placeholder="Eneter description..."
                rows="3"
                max-rows="6"
               
        ></b-form-textarea>

        <b-form-input v-model="posts.price" type="number" placeholder="Enter price"></b-form-input>


        <button type="submit">Post</button>
    </form>

</section>
  
</template>

<script>
import {mapActions} from 'vuex';
export default {
    props:['productId'],
    name: 'PostProduct',

    data(){
        return {
           posts:{
               
            productid : this.productId,    
            title: null,
            body: null,
            price: 0,
            
            
        },
        products: {},
    
    }
    },
    methods:{

                
        ...mapActions(['postProduct']),

        postData(e)
        {
            
            e.preventDefault()
            console.log("sa", this.productId)
            this.posts.productid = this.productId
            console.log("H_V", this.posts.productid)
            this.postProduct(this.posts)
            
            
            
        },

},

    
}
</script>

<style>

</style>