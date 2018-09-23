<template>
   <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-slide-y-transition mode="out-in">
          <v-list three-line subheader>
            <v-subheader class="text-large">March</v-subheader>
            <v-list-tile
              v-for="(item, i) in items.march"
              :key="item.name"
              avatar
              ripple
            >
              <v-avatar color="red">
                <span class="white--text headline">{{ item.date }}</span>
              </v-avatar>
              <v-list-tile-content class="pl-3">
                <v-list-tile-title>
                  <span class="bold grey--text text--darken-4">{{ item.name }}</span>
                </v-list-tile-title>
                <div v-if="item.showInfo">
                  <v-list-tile-sub-title class="grey--text text--darken-4">{{ item.location }}</v-list-tile-sub-title>
                  <v-list-tile-sub-title class="grey--text text--darken-4">{{ item.time }}</v-list-tile-sub-title>
                </div>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn @click="dates[id].march[i].showInfo = !item.showInfo" icon ripple>
                  <v-icon color="grey lighten-1">info</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>

            <v-subheader class="text-large">April</v-subheader>
            <v-list-tile
              v-for="(item, i) in items.april"
              :key="item.name"
              avatar
              ripple
            >
              <v-avatar color="red">
                <span class="white--text headline">{{ item.date }}</span>
              </v-avatar>
              <v-list-tile-content class="pl-3">
                <v-list-tile-title>
                  <span class="bold grey--text text--darken-4">{{ item.name }}</span>
                </v-list-tile-title>
                <div v-if="item.showInfo">
                  <v-list-tile-sub-title class="grey--text text--darken-4">{{ item.location }}</v-list-tile-sub-title>
                  <v-list-tile-sub-title class="grey--text text--darken-4">{{ item.time }}</v-list-tile-sub-title>
                </div>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn @click="dates[id].april[i].showInfo = !item.showInfo" icon ripple>
                  <v-icon color="grey lighten-1">info</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
            <v-subheader class="text-large">May</v-subheader>
            <v-list-tile
              v-for="(item, i) in items.may"
              :key="item.name"
              avatar
              ripple
            >
              <v-avatar color="red">
                <span class="white--text headline">{{ item.date }}</span>
              </v-avatar>
              <v-list-tile-content class="pl-3">
                <v-list-tile-title>
                  <span class="bold grey--text text--darken-4">{{ item.name }}</span>
                </v-list-tile-title>
                <div v-if="item.showInfo">
                  <v-list-tile-sub-title class="grey--text text--darken-4">{{ item.location }}</v-list-tile-sub-title>
                  <v-list-tile-sub-title class="grey--text text--darken-4">{{ item.time }}</v-list-tile-sub-title>
                </div>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn @click="dates[id].may[i].showInfo = !item.showInfo" icon ripple>
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
  name: 'DateList',
  props: ['id'],
  data () {
    return {
      dates: {
        'Remington Solar': {
          march: [
            {
              name: 'Local Public Hearing',
              date: 25,
              time: '7:00 PM',
              location: 'Jefferson High School',
              showInfo: false
            }
          ],
          april: [
            {
              name: 'Written Testimony Deadline',
              date: 14,
              time: null,
              location: null,
              showInfo: false
            },
            {
              name: 'Witness Prep',
              date: 28,
              time: '9:00 AM',
              location: '800 E. Canal Street',
              showInfo: false
            }
          ],
          may: [
            {
              name: 'Evidentiary Hearing',
              date: 5,
              time: '10:00 AM',
              location: 'Tyler Building Courthouse, 2nd Floor',
              showInfo: false
            }
          ]
        }
      }
    }
  },
  computed: {
    items () {
      return this.dates[this.id]
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
