import axios from 'axios';

const state = {
    comments: []
};

const getters = {
    allComments: state => state.comments
    
};

const actions = {
    async fetchComments({commit}) {
        const response = await axios.get('https://60c1e1184f7e880017dc0a93.mockapi.io/comments');

        console.log(response.data)
        commit('setComments', response.data)

    },

    async postComment({commit}, comment,) {
        const result = {}
        axios.post("https://60c1e1184f7e880017dc0a93.mockapi.io/comments", {comment}.comment, {comment}.commentid)
            .then((result)=>{
                console.warn(comment.commentid)
                console.warn(result)
            })
        commit('postComment', result)
    }
};

const mutations = {
    setComments:(state, comments) => (state.comments = comments),
    postComment:(state, comment ) => state.comments.push(comment),
    
};

export default {
    state,
    getters,
    actions,
    mutations

};