<template>
   <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-slide-y-transition mode="out-in">
          <v-list two-line subheader>
            <v-subheader class="text-large">Testimony</v-subheader>

            <v-list-tile
              v-for="item in items.testimony"
              :key="item.title"
              avatar
              ripple
            >
              <v-list-tile-avatar :color="item.color">
                <v-icon class="green white--text">book</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content class="pl-3">
                <v-list-tile-title>
                  <span class="bold grey--text text--darken-4">{{ item.title }}</span>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-subheader class="text-large">Orders</v-subheader>
            <v-list-tile
              v-for="item in items.orders"
              :key="item.title"
              avatar
              ripple
            >
              <v-list-tile-avatar :color="item.color">
                <v-icon class="red white--text">gavel</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content class="pl-3">
                <v-list-tile-title>
                  <span class="bold grey--text text--darken-4">{{ item.title }}</span>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-subheader class="text-large">Motions</v-subheader>
            <v-list-tile
              v-for="item in items.motions"
              :key="item.title"
              avatar
              ripple
            >
              <v-list-tile-avatar :color="item.color">
                <v-icon class="blue white--text">description</v-icon>
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
  name: 'DocumentList',
  props: ['id'],
  computed: {
    items () {
      return (
        {
          'Remington Solar': {
            testimony: [
              {
                title: 'Testimony of H. Howard Wadsworth'
              },
              {
                title: 'Testimony of Susan B. Anthony'
              }
            ],
            orders: [
              {
                title: 'Order Scheduling Hearing'
              },
              {
                title: 'Order Granting Motion in Limine'
              }
            ],
            motions: [
              {
                title: 'Motion in Limine to exclude Testimony of Susan B. Anthony'
              }
            ]
          }
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
