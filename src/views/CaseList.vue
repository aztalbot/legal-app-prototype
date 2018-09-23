<template>
   <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-slide-y-transition mode="out-in">
          <v-list>
            <v-list-tile
              v-for="item in items"
              :key="item.title"
              avatar
              ripple
              :to="{ path: 'clients', params: { id: item.id } }"
            >
              <v-avatar :color="item.color">
                <span class="white--text headline">{{ item.title.charAt(0) }}</span>
              </v-avatar>
              <v-list-tile-content class="pl-3">
                <v-list-tile-title>
                  <span class="grey--text headline">{{ item.title }}</span>
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
  name: 'CaseList',
  props: ['id'],
  computed: {
    items () {
      return (
        {
          'dominion_energy': [
            {
              title: 'Remington Solar'
            },
            {
              title: 'Virginia Wind Project'
            },
            {
              title: 'Henrico 230 kV Transmission Line'
            }
          ]
        }
      )[this.id]
    }
  }
}
</script>

