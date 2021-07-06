<template>
    <section>
        
     <div  v-for="(comment, index) in allComments" :key="comment +index">
        <b-card-group deck>
                    <b-card
                    class="card"
                    :title="comment.body"
                    >
                    
                    <update-comment :id="comment.id" @remove="handelUpdate"/>
                    <remove-comment :id="comment.id"/>
                    </b-card>

                   
         </b-card-group>
              
              
              
              
        </div>
  </section>
</template>

<script>

import {mapGetters, mapActions} from 'vuex';
import RemoveComment from './RemoveComment.vue';
import UpdateComment from './UpdateComment.vue';
export default {
  components: { UpdateComment, RemoveComment },
    name: "ProductFeedback",
    computed: mapGetters(['allComments']),

    data(){
        return{
            comments: []
        }
    },
    
    
    
    created(){
       

       
        console.log("sd", this.$route.params.productsid),
        this.fetchComments(parseInt(this.$route.params.productid))
        
        
        
      
    },
    
    
    methods:{

        ...mapActions(['fetchComments']), 

        handelUpdate(){
            console.log('Hei')
            this.$emit('update')
        }
                 
    }

}
</script>

<style>

</style>