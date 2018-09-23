<template>
   <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-slide-y-transition mode="out-in">
          <v-list three-line subheader>
            <v-subheader class="text-large">Commission Staff</v-subheader>
            <v-list-tile
              v-for="(item, i) in items.commissionStaff"
              :key="item.name"
              avatar
              ripple
            >
              <v-avatar color="red">
                <span class="white--text headline">{{ item.name.charAt(0) }}</span>
              </v-avatar>
              <v-list-tile-content class="pl-3">
                <v-list-tile-title>
                  <span class="bold grey--text text--darken-4">{{ item.name }}</span>
                </v-list-tile-title>
                <div v-if="item.showInfo">
                  <v-list-tile-sub-title class="grey--text text--darken-4">{{ item.email }}</v-list-tile-sub-title>
                  <v-list-tile-sub-title class="grey--text text--darken-4">{{ item.phone }}</v-list-tile-sub-title>
                </div>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn @click="contacts[id].commissionStaff[i].showInfo = !item.showInfo" icon ripple>
                  <v-icon color="grey lighten-1">info</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>

            <v-subheader class="text-large">Attorney General</v-subheader>
            <v-list-tile
              v-for="item in items.attorneyGeneral"
              :key="item.name"
              avatar
              ripple
            >
              <v-avatar color="green">
                <span class="white--text headline">{{ item.name.charAt(0) }}</span>
              </v-avatar>
              <v-list-tile-content class="pl-3">
                <v-list-tile-title>
                  <span class="bold grey--text text--darken-4">{{ item.name }}</span>
                </v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon ripple>
                  <v-icon color="grey lighten-1">info</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>

            <v-subheader class="text-large">Sierra Club</v-subheader>
            <v-list-tile
              v-for="item in items.sierraClub"
              :key="item.name"
              avatar
              ripple
            >
              <v-avatar color="grey">
                <span class="white--text headline">{{ item.name.charAt(0) }}</span>
              </v-avatar>
              <v-list-tile-content class="pl-3">
                <v-list-tile-title>
                  <span class="bold grey--text text--darken-4">{{ item.name }}</span>
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
  name: 'ContactList',
  props: ['id'],
  data () {
    return {
      contacts: {
        'Remington Solar': {
          attorneyGeneral: [
            {
              name: 'Mitch C. Burton, Jr.',
              email: 'cburtonjr@oag.virginia.gov',
              phone: '(222) 222-2222',
              showInfo: false
            }
          ],
          commissionStaff: [
            {
              name: 'Andrea McGill',
              email: 'andrea.mcgill@scc.virginia.gov',
              phone: '(777) 777-7777',
              showInfo: false
            },
            {
              name: 'Scott Thirsten',
              email: 'scott.thirsten@scc.virginia.gov',
              phone: '(777) 778-7778',
              showInfo: false
            }
          ],
          sierraClub: [
            {
              name: 'Will G. Bushman III',
              email: 'william.bushman@sierraclub.com',
              phone: '(555) 555-5555',
              showInfo: false
            }
          ]
        }
      }
    }
  },
  computed: {
    items () {
      return this.contacts[this.id]
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
