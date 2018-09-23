<template>
   <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-slide-y-transition mode="out-in">
          <v-list two-line subheader>
            <v-subheader class="text-large">Open Cases</v-subheader>

            <v-list-tile
              v-for="item in items"
              :key="item.title"
              avatar
              ripple
              :to="`/cases/${item.title}/documents`"
            >
              <v-list-tile-avatar :color="item.color">
                <v-icon class="green white--text">folder</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content class="pl-3">
                <v-list-tile-title>
                  <span class="bold grey--text text--darken-4">{{ item.title }}</span>
                </v-list-tile-title>
              </v-list-tile-content>
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
          'Dominion Energy': [
            {
              title: 'Remington Solar'
            },
            {
              title: 'Virginia Wind Project'
            },
            {
              title: 'Henrico 230 kV Transmission Line'
            },
            {
              title: 'Remington-Wheeler 230 kV Transmission Line'
            },
            {
              title: 'Transmission Line Research'
            },
            {
              title: 'M&A - XYZ Natural Gas, Inc.'
            }
          ]
        }
      )[this.id]
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
.text-large
  font-size: 1.3rem
</style>
