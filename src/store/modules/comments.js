import axios from 'axios';

const state = {
    comments: []
};

const getters = {
    allComments: state => state.comments
    
};

const actions = {
    async fetchComments({commit}, commentid) {
        const response = await axios.get(`http://localhost:4000/comments/${commentid}`);

        console.log(response.data)
        commit('setComments', response.data.reverse())

    },

    async postComment({commit}, comment, ) {
        const result = {}
        axios.post(`http://localhost:4000/comments/${comment.commentid}/`, comment )
            .then((result)=>{
                console.log('co', comment)
                console.log("as", result.data)
                
               
            })
        commit('postComment', result.data)
    }
};

const mutations = {
    setComments:(state, comment) => (state.comments = comment),
    postComment:(state, comment ) => state.comments.push(comment),
    
};

export default {
    state,
    getters,
    actions,
    mutations

};