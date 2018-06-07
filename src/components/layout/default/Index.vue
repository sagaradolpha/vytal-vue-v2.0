<template>
  <v-app id="inspire">
    <left-drawer :leftDrawerProp="drawer"></left-drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="primary"
      dark
      app
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Vytal Connect</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        prepend-icon="search"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon large>
        <v-avatar size="32px" tile>
          <img
            src="http://vytaldoctor.adolpha.com/assets/oldui/images/Vytal_logo_new.png"
            alt="vytalConnect"
          >
        </v-avatar>
      </v-btn>
    </v-toolbar>
    <v-content>
      <!-- <v-container fluid fill-height>
        <v-layout justify-center align-center>          
        </v-layout>     
      </v-container> -->
      <v-container grid-list-md text-xs-center>
      <v-layout row wrap> 
      <router-view></router-view>
      </v-layout>
      </v-container>  
    </v-content>
    <create-new-patient></create-new-patient>
  </v-app>
</template>

<script>
import LeftDrawer from "./partials/LeftDrawer.vue";
import CreateNewPatient from "../../dashboard/CreateNewPatient.vue";

export default {
  components: {
    CreateNewPatient,
    LeftDrawer
  },
  data() {
    return {
      drawer: null
    };
  },
  methods: {},
  props: {
    source: String
  }
};
</script>
<style>
html {
  overflow-y: hidden;
}
</style>
