<template>
 <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Registration Form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="valid">
                  <v-text-field prepend-icon="person" v-model="username" :rules="nameRules" label="Username" required></v-text-field>
                  <v-text-field prepend-icon="person" v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                  <v-text-field prepend-icon="lock"  v-model="password" :rules="passwordRules" label="Password" type="password" required></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :disabled="!valid" @click="submit" color="primary">Sign Up</v-btn>
                <router-link to="/">Login</router-link>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>        
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
    data: () => ({
      valid: true,
      username:'',
      email:'',
      password:'',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
        ],
        passwordRules: [
            v => !!v || 'Password is required',
            v => (v&&v.length >=5) || 'Password must be greater then 4 character'
        ]
    }),
    props: {
      source: String
    },
    methods: {
      submit() {

      }
    },
    beforeMount() {
      this.$store.commit('SET_LAYOUT', "simple-layout")
    }
  }
  
</script>


