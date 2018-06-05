<template>
  <!-- <div id="app">
    <router-view></router-view>
  </div> -->
  <v-app>
    <component v-bind:is="layout"></component>
  </v-app>
</template>

<script>
//components
import CreateNewPatient from './components/dashboard/CreateNewPatient.vue'

//Layout
import Simple from './components/layout/Simple.vue'
import Default from './components/layout/default/Index.vue'

//constants
//import Constants from './constants.js'

/* export default {
  name: 'app',
  components: {
    Login,
    Registration,
  }
} */
export default {
  computed: {
    layout () {
      return this.$store.getters.layout
    }
  },
  components: {
    'simple-layout': Simple,
    'default-layout': Default,
    'create-new-patient': CreateNewPatient
  }

}
</script>

<style>

</style>
