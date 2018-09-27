<template>
  <v-container fluid>
    <v-layout row>
      <VueChart type="line" :options="chartOptions" :data="chartData"/>
    </v-layout>
    <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-slide-y-transition mode="out-in">
          <v-list three-line subheader>
            <v-list-tile
              v-for="item in hours"
              :key="item.id"
              avatar
              ripple
            >
              <v-avatar color="red">
                <span class="white--text headline">{{ item.time }}</span>
              </v-avatar>
              <v-list-tile-content class="pl-3">
                <v-list-tile-title>
                  <span class="bold grey--text text--darken-4">{{ item.case }}</span>
                </v-list-tile-title>
                <div>
                  <v-list-tile-sub-title class="grey--text text--darken-4">{{ item.description }}</v-list-tile-sub-title>
                  <v-list-tile-sub-title class="grey--text text--darken-4">{{ item.date.toLocaleString().slice(0, 9) }}</v-list-tile-sub-title>
                </div>
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
  </v-container>
</template>

<script>
import VueChart from 'vue-chart-js'

export default {
  name: 'Timsheet',
  props: ['id'],
  components: { VueChart },
  data () {
    return {
      hours: [
        {
          date: new Date('October 1, 2018'),
          case: 'Remington Solar',
          time: 3.6,
          description: 'reviewed testimony'
        },
        {
          date: new Date('October 1, 2018'),
          case: 'Thomas W. Branson',
          time: 4.5,
          description: 'witness prep'
        }
      ],
      chartData: {
        labels: Array.apply(null, Array(20)).map((x, i) => ``),
        datasets: [
            {
              label: 'Total',
              data: [8.1, 18.5, 25.5, 36.4, 47.7],
              backgroundColor: 'blue',
              fill: false
            },
            {
              label: 'Goal',
              data: Array.apply(null, Array(20)).map((x, i) => i*7.5),
              backgroundColor: 'purple',
              fill: false
            }
          ]
       },
       chartOptions: {
         scales: {
          xAxes: [{
              gridLines: {
                  color: "rgba(0, 0, 0, 0)",
              }
            }],
          yAxes: [{
              gridLines: {
                  color: "rgba(0, 0, 0, 0)",
              }   
            }]
          }
       }
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
