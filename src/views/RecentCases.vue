<template>
   <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-slide-y-transition mode="out-in">
          <v-list two-line subheader>
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
                <v-list-tile-sub-title>
                  <span class="grey--text text--darken-4">{{ item.client }}</span>
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'RecentCases',
  props: ['id'],
  computed: {
    items () {
      return [
        {
          title: 'Remington Solar',
          client: 'Dominion Energy'
        },
        {
          title: 'Virginia Wind Project',
          client: 'Dominion Energy'
        },
        {
          title: 'Cross-Hampton-Roads Pipeline',
          client: 'Virginia Natural Gas'
        },
        {
          title: 'American Water - Water Rate Increase',
          client: 'Northumberland County'
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
.text-large
  font-size: 1.3rem
</style>
