import Vue from 'vue'
import VueRouter from 'vue-router'
//components
import Login from './components/authentication/Login.vue'
import Registration from './components/authentication/Registration.vue'
import Appointments from "./components/dashboard/Appointments.vue";
import Records from './components/dashboard/Records.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: "/manage-appointments",
      component: Appointments,
      meta: {
        forAuth: true
      }
    },
    {
      path: "/",
      component: Login,
      meta: {
        forVisitors: true
      }
    },
    {
      path: "/registration",
      component: Registration,
      meta: {
        forVisitors: true
      }
    },
    {
      path: "/records",
      component: Records,
      meta: {
        forAuth: true
      }
    },
  ],
  mode: 'history'
});

export default router
