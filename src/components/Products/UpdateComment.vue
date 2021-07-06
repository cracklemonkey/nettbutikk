<template>
<section>
    <form @submit="updateData" method="post">
         
        
         
         <b-form-textarea
                id="textarea"
                type="text"
                name="comment"
                v-model="posts.body"
                value=commentBody
                rows="3"
                max-rows="6"
               
        ></b-form-textarea>

       


        <button type="submit">Update</button>
    </form>

</section>
  
</template>

<script>
import {mapActions} from 'vuex';
export default {
    props:['id'],
    name: 'UpdateComment',

    data(){
        return {
           posts:{
               
            commentid : parseInt(this.$route.params.productid),    
            id: this.id,
            body: null,
            
            
            
        },
        comments: {},
    
    }
    },
    methods:{

                
        ...mapActions(['updateComment']),

        updateData(e)
        {
            
            e.preventDefault()
            
            
            this.updateComment(this.posts)
            
            
            
        },

},

    
}
</script>

<style>

</style>