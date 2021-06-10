<template>
    <div>
        <form @submit="postData" method="post">
            <input type=text name="author" v-model="posts.author"> <br>
            <input type="text" name="stuff" v-model="posts.stuff"> <br>
            <button type="submit">Post</button>
        </form>
    </div>
  
</template>

<script>
import axios from 'axios'
export default {
    name: "ProductFeedback",
    data(){
        return {
            posts:{
                author: null,
                stuff: null
            }
        }

    },
    methods:{
        async postData(e)
        {
            axios.post("backendhost/public/feedback.json", this.posts)
            .then((result)=>{
                console.warn(result)
            })
            e.preventDefault()
        }
    }

}
</script>

<style>

</style>