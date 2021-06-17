<template>
  <section>
      <form @submit="postData" method="post">
         <b-form-textarea
                id="textarea"
                type="text"
                name="comment"
                v-model="posts.body"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"
               
        ></b-form-textarea>
        <button type="submit">Post</button>
    </form>
  </section>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name: 'PostComment',
    data(){
        return {
           posts:{
               
            commentid: parseInt(this.$route.params.productid),    
            body: null,
            
            
        },
        comments: {},
    
    }
    
    },
    methods:{

                
        ...mapActions(['postComment']),

        postData(e)
        {
            
            e.preventDefault()
            console.log("d", this.posts)
            this.postComment(this.posts)
            
        },

},
}
</script>

<style>

</style>