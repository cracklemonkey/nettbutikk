<template>
    <section>
        <form @submit="postData" method="post">
         <b-form-textarea
                id="textarea"
                type="text"
                name="comment"
                v-model="posts.comment"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"
               
        ></b-form-textarea>
        <button type="submit">Post</button>
    </form>
     
     
     
     
     
     <div  v-for="(comment, index) in comments" :key="comment +index">
        <b-card-group deck>
                    <b-card
                    class="card"
                    :title="comment.comment"
                    >
                    
                    
                    </b-card>

                   
         </b-card-group>
              
              
              
              
        </div>
  </section>
</template>

<script>
/*<form @submit="postData" method="post">
         <b-form-textarea
                id="textarea"
                type="text"
                name="comment"
                v-model="posts.comment"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"
               
        ></b-form-textarea>
        <button type="submit">Post</button>
    </form>*/
//import axios from 'axios'
import {mapGetters, mapActions} from 'vuex';
export default {
    name: "ProductFeedback",
    computed: mapGetters(['allComments']),
    
    
    created(){
        //this.getcomments()
        this.fetchComments(),
        this.comments = this.allComments.filter(obj => obj.commentid === parseInt(this.$route.params.id))
        console.log(this.comments)
        
      
    },
    data(){
        return {
           posts:{
               
            commentid: parseInt(this.$route.params.id),    
            comment: null,
            
            
        },
        comments: {},
    
    }
    
    },
    
    
    methods:{

        ...mapActions(['fetchComments']),        
        ...mapActions(['postComment']),

        postData(e)
        {
            
            e.preventDefault()
            console.log("d", this.posts)
            this.postComment(this.posts)
        },
        /*            axios.post("https://60c1e1184f7e880017dc0a93.mockapi.io/comments", this.posts)
            .then((result)=>{
                console.warn(result)
            })
*/
       /*getcomments() {
            axios.get('https://60c1e1184f7e880017dc0a93.mockapi.io/comments')
            .then(result => {
                const templist = (result.data)
                console.log('liste',templist[0])
                console.log("id", templist.id)
                console.log('rpi', this.$route.params.id)
                this.comments = result.data.filter(obj => obj.commentid === parseInt(this.$route.params.id))
                console.log('d', this.comments)
               
            }).catch(error => {
                console.log('error', error)
            })
        }*/

    }

}
</script>

<style>

</style>