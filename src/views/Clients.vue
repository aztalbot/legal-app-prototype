<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-slide-y-transition mode="out-in">
          <v-list three-line subheader>
            <v-list-tile
              v-for="item in items"
              :key="item.title"
              avatar
              ripple
              :to="`clients/${item.title}`"
            >
              <v-avatar :color="item.color">
                <span class="white--text headline">{{ item.title.charAt(0) }}</span>
              </v-avatar>
              <v-list-tile-content class="pl-3">
                <v-list-tile-title class="bold grey--text text--darken-4">
                  {{ item.title }}
                </v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-btn icon ripple>
                  <v-icon color="grey lighten-1">info</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
    <v-btn
      class="above-nav"
      fixed
      dark
      fab
      bottom
      right
      color="pink"
    >
      <v-icon>add</v-icon>
    </v-btn>
  </v-layout>
</template>

<script>
export default {
  name: 'Clients',
  data () {
    return {
      clipped: false,
      title: 'Clients',
      items: [
        {
          title: 'Dominion Energy',
          color: 'red'
        },
        {
          title: 'Ford Motors',
          color: 'green'
        },
        {
          title: 'Virginia Natural Gas',
          color: 'purple'
        },
        {
          title: 'Thomas W. Branson',
          color: 'grey'
        },
        {
          title: 'Northumberland County',
          color: 'red'
        }
      ]
    }
  }
}
</script>

<style scoped lang="sass">
.above-nav
  bottom: 80px
.bold
  font-weight: 700
  font-size: 1.3rem
</style>
