<template>
    <section>
        
     <div  v-for="(comment, index) in allComments" :key="comment +index">
        <b-card-group deck>
                    <b-card
                    class="card"
                    :title="comment.body"
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
       

       
        console.log("sd", this.$route.params.id),
        this.fetchComments(parseInt(this.$route.params.id))
        
        
        
      
    },
    
    
    methods:{

        ...mapActions(['fetchComments']), 
                 
    }

}
</script>

<style>

</style>