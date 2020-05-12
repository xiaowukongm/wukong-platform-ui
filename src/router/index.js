import Vue from 'vue'
import Router from 'vue-router'
import Register from "../components/User/Register";
import Login from "../components/User/Login";

Vue.use(Router)
const router = new Router({
  routes: [
    {path: '/register', name:'register',component: Register},
    {path: '/login', name:'login',component: Login},
  ]
})
export default router

