<template>
  <v-container fluid>
   <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="display">
        {{ time.toISOString().substr(11, 8) }}
      </v-card>
      <div class="button-group">
        <v-btn v-if="!started" @click="start" dark class="green action-button">
          start
        </v-btn>
        <v-btn v-else @click="stop" dark class="red action-button">
          stop
        </v-btn>
      </div>
      <div class="button-group">
        <v-btn @click="reset" dark class="grey decision-button darken-3">
          reset
        </v-btn>
        <v-btn dark class="grey decision-button darken-3">
          save
        </v-btn>
      </div>
      <v-flex xs12 sm6 d-flex class="form">
        <v-select
          :items="['Remington Solar', 'American Water Company - Water Rate Increase', 'Virginia Wind Project']"
          label="Select a case"
        ></v-select>
      </v-flex>
      <v-flex xs12 sm6 d-flex class="form">
        <v-text-field
          v-model="description"
          label="Description"
          required
        ></v-text-field>
      </v-flex>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Timer',
  data () {
    return {
      description: '',
      startTime: null,
      now: null,
      interval: null,
      accumulated: new Date(0),
      started: false
    }
  },
  computed: {
    time () {
      return this.startTime !== null
        ? new Date(this.now.getTime() - this.startTime.getTime() + this.accumulated.getTime())
        : new Date(0)
    }
  },
  methods: {
    start () {
      if (this.startTime === null) this.reset()
      this.startTime = this.now = new Date()
      this.interval = setInterval(() => { this.now = new Date() }, 1000)
      this.started = true
    },
    stop () {
      clearInterval(this.interval)
      this.started = false
      this.accumulated = this.time
      this.startTime = this.now = new Date()
    },
    reset () {
      this.stop()
      this.accumulated = new Date(0)
    }
  }
}
</script>

<style lang="sass" scoped>
.form
  margin-top: 0.5rem
.button-group
  display: flex
  flex-direction: row
  justify-content: center
  margin-top: 2rem
.action-button
  font-size: 2.5rem
  border-radius: 100px
  padding-top: 3.5rem
  padding-bottom: 6.9rem
  width: 10.5rem
.decision-button
  font-size: 1.6rem
  border-radius: 10px
  padding: 0 4rem 0 4rem
.display
  margin-top: 1.5rem
  font-size: 5rem
  text-align: center
  color: #f5f5f5
  background-color: #212121
  border-radius: 10px
</style>
