<template>
  <v-form class="teal lighten-2 full-page">
    <v-container fluid>
      <v-layout row wrap justify-center>
        <v-avatar size="200" class="ava teal darken-1">
          <v-icon size="large white--text">gavel</v-icon>
        </v-avatar>
      </v-layout>
      <v-layout row wrap>
        <v-card class="login-card">

        <v-flex xs12 sm6>
          <v-text-field
            v-model="email"
            label="Username or E-mail"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'visibility_off' : 'visibility'"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
          <v-btn light class="full-width teal--text">
            log in
          </v-btn>
        </v-flex>

        </v-card>

      </v-layout>
    </v-container>
  </v-form>
</template>

<style lang="sass" scoped>
.full-page
  height: 100%
.login-card
  width: 100%
  padding: 2rem
  margin-top: 2rem
.full-width
  width: 95%
  font-size: 1.5rem
  margin-top: .5rem
.jumbo
  font-size: 4rem
.large
  font-size: 4rem
.v-icon
  font-size: 6rem
.ava
  margin-top: 2rem
</style>
