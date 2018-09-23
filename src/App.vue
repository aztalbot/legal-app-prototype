<template>
  <v-app id="vuetify-app">
    <!-- TOOLBAR -->
    <v-toolbar
      app
      color="teal"
      dark
      prominent
    >
      <v-toolbar-title v-text="$route.meta.title"></v-toolbar-title>
    </v-toolbar>
    <!-- CONTENT -->
    <v-content>
      <router-view/>
    </v-content>
    <v-bottom-nav
      :active="bottomNav"
      :value="true"
      absolute
      color="transparent"
    >
      <v-btn
        color="teal"
        flat
        value="clients"
      >
        <span>Clients & Cases</span>
        <v-icon>gavel</v-icon>
      </v-btn>
      <v-btn
        color="teal"
        flat
        value="recent"
      >
        <span>Recent Cases</span>
        <v-icon>history</v-icon>
      </v-btn>
      <v-btn
        color="teal"
        flat
        value="timer"
      >
        <span>Timer</span>
        <v-icon>hourglass_empty</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  computed: {
    bottomNav () {
      return this.$route.meta.value
    }
  }
}
</script>
