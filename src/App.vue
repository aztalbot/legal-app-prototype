<template>
  <v-app id="vuetify-app">
    <!-- TOOLBAR -->
    <v-toolbar
      app
      color="teal"
      dark
      prominent
    >
      <v-btn @click="$router.go(-1)" icon v-if="$route.meta.back">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
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
    },
    title () {
      return this.$route.meta.title.startsWith(':')
        ? this.$route.params[this.$route.meta.title.slice(1)]
        : this.$route.meta.title
    }
  }
}
</script>
