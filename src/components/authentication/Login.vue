<template>
 <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login Form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="valid">
                  <v-text-field prepend-icon="person" v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                  <v-text-field prepend-icon="lock"  v-model="password" :rules="passwordRules" label="Password" type="password" required></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :disabled="!valid" @click="login" color="primary">Login</v-btn>
                <router-link to="/registration">Registration</router-link>
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
      email:'',
      password:'',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
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
        login() {
          var data = {
            client_id: 2,
            client_secret: 'OkBI9cbD1ACjK5l5nX7lLCeIvJvjPZzAPCnt0MSW',
            grant_type: 'password',
            username: this.email,
            password: this.password
          }
            this.$http.post("oauth/token", data)
            .then( response => {
              this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now())
              this.$router.push('/records')
            })
        }
    },
    beforeMount() {
      this.$store.commit('SET_LAYOUT', "simple-layout")
    }
  }
</script>
