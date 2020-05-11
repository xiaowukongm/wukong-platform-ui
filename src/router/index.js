import Vue from 'vue'
import Router from 'vue-router'
import Register from "../components/User/Register";

Vue.use(Router)
const router = new Router({
  routes: [
    {path: '/register', name:'register',component: Register},
  ]
})
export default router

