import Vue from 'vue'
import VeeValidate from 'vee-validate'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'
import { store } from "./store"
import FullCalendar from "vue-full-calendar";

//components
import App from './App.vue'
import Router from './routes.js'

//css
import 'vuetify/dist/vuetify.min.css'

// Packages 
import Auth from './packages/auth/Auth.js'


Vue.use(VeeValidate)
Vue.config.productionTip = false

//theme property
Vue.use(Vuetify, {
  theme: {
    primary: "#2eca84",
    secondary: "#b0bec5",
    accent: "#8c9eff",
    error: "#b71c1c"
  }
});
Vue.use(FullCalendar);
Vue.use(VueResource)
//register auth package
Vue.use(Auth)

Vue.http.options.root = 'http://127.0.0.1:8000'
Vue.http.headers.common['Authorization'] = 'Bearer '+Vue.auth.getToken()

Router.beforeEach(
  (to, from, next) => {
    if (to.matched.some(record => record.meta.forVisitors)){
      if (Vue.auth.isAuthenticated()) {
        next({ path: "/records" });
      } else next();
    }
    else if (to.matched.some(record => record.meta.forAuth)){
      if (! Vue.auth.isAuthenticated()) {
        next({ path: "/" });
      } else next();
    }
    else next()
  }
)

new Vue({
  router: Router,
  store: store,
  render: h => h(App)
}).$mount('#app')
