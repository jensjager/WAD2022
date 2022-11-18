import {createStore} from 'vuex'

export default createStore({
    strict: true,

    state: {
        postList: []
    },
    getters: {
        getPosts: state => {
            return state.postList
        }
    },
    mutations: {
        increaseLike: (state, postId) => {
            state.postList.forEach(p => {
                if (p.id === postId)
                    p.likes += 1;
            })
        },
        removeLikes: state => {
            state.postList.forEach(p => {
                p.likes = 0;
            })
        },
        updatePostList: (state, data) => {
            state.postList = data
        }
    },
    actions: {
        increaseLikeAction: (action, postId) => {
            console.log(`Liked post ${postId}`)
            action.commit("increaseLike", postId)
        },
        removeLikesAction: (action) => {
            console.log("Remove likes button clicked")
            action.commit("removeLikes")
        },
        fetchPostsAction: action => {
            // JSON online edit link: https://www.npoint.io/docs/412ac316aca5e1b1fe5a

            //fetch("https://api.npoiant.io/412ac316aca5e1b1fe5a") // Fetch from online JSON hosting site
            fetch("/res/json/data.json")
                .then(response => response.json())
                .then(data => action.commit("updatePostList", data))
                .catch(err => {
                    console.log(err)
                    action.commit("updatePostList", [
                        {
                            id: 404,
                            user: "Error",
                            userAvatar: "https://i.ibb.co/8DY3YCm/user-avatar.png",
                            date: "404",
                            image: "#",
                            body: "Error 404 - Unsuccessful fetch",
                            likes: 0
                        }
                    ])
                })
        }
    },
    modules: {}
})
