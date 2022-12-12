import {createRouter, createWebHistory} from 'vue-router';
import Home from "@/views/Home.vue";
import Contacts from "@/views/Contacts.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import AddPost from "@/views/AddPost.vue"
import APost from "@/views/APost.vue";
import auth from "../auth"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        beforeEnter: async (to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/login');
            } else {
                next()
            }
        }
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: Contacts
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },
    {
        path: '/addPost',
        name: 'AddPost',
        component: AddPost
    },
    {
        path: '/posts/:id',
        name: 'Post',
        component: APost
    },
    {
        path: '/:catchAll(.*)',
        redirect: {name: 'Home'}
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;