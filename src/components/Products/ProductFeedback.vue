<template>
    <section>
        
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

import {mapGetters, mapActions} from 'vuex';
export default {
    name: "ProductFeedback",
    computed: mapGetters(['allComments']),

    data(){
        return{
            comments: []
        }
    },
    
    
    
    created(){
       
        
        this.fetchComments(),
        this.comments = this.allComments.filter(obj => obj.commentid === parseInt(this.$route.params.id)).reverse()
        console.log(this.comments)
        
      
    },
    
    
    methods:{

        ...mapActions(['fetchComments']),          
    }

}
</script>

<style>

</style>