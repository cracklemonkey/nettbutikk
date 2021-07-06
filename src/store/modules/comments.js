import axios from 'axios';

const state = {
    comments: []
};

const getters = {
    allComments: state => state.comments
    
};

const actions = {
    async fetchComments({commit}, commentid) {
        const response = await axios.get(`http://localhost:5000/api/comments/${commentid}`);

        console.log(response.data)
        commit('setComments', response.data.reverse())

    },

    async postComment({commit}, comment, ) {
        const result = {}
        axios.post(`http://localhost:5000/api/comments/${comment.commentid}/`, comment )
            .then((result)=>{
                console.log('co', comment)
                console.log("as", result.data)
                
               
            })
        commit('postComment', result.data)
    },

    async updateComment({commit}, comment){
        const result = {}
        axios.put(`http://localhost:5000/api/comments/${comment.id}/comment`, comment )
            .then((result)=>{
                console.log('co', comment)
                console.log("as", result.data)
                
               
            })
        commit('updateComment', result.data)
    },

    async removeComment({commit}, id){
        axios.delete(`http://localhost:5000/api/comments/${id}/comment`)
        

        commit('removeComment')

    }
};

const mutations = {
    setComments:(state, comment) => (state.comments = comment),
    postComment:(state, comment ) => state.comments.push(comment),
    updateComment:(state, comment) => state.comments.forEach(element => {
        if(element.id == comment.id){
            element = comment
        }
        
    }),
    removeComment:(state) => (state.comments)
    
};

export default {
    state,
    getters,
    actions,
    mutations

};