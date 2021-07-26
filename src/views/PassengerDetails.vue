<template>
  <h1>Details</h1>
  <hr />
  <div v-if="passenger">
    <h1>Name: {{ passenger.name }}</h1>
    <div v-if="check">
      <h2>Airline name: {{ passenger.airline.name }}</h2>
      <h3>Slogan: {{ passenger.airline.slogan }}</h3>
      <h4>Country: {{ passenger.airline.country }}</h4>
      <p>Head quaters: {{ passenger.airline.head_quaters }}</p>
      <p>Website: {{ passenger.airline.website }}</p>
    </div>
    <div v-if="check == false">
      <span v-for="airline in passenger.airline" :key="airline.id">
        <h2>Airline name: {{ airline.name }}</h2>
        <h3>Slogan: {{ airline.slogan }}</h3>
        <h4>Country: {{ airline.country }}</h4>
        <p>Head quaters: {{ airline.head_quaters }}</p>
        <p>Website: {{ airline.website }}</p>
      </span>
    </div>
  </div>
</template>

<script>
import PassengerService from '@/services/PassengerService.js'

export default {
  props: ['id'],
  data() {
    return {
      passenger: null
    }
  },
  created() {
    PassengerService.getPassenger(this.id)
      .then((response) => {
        this.passenger = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  computed: {
    check: function () {
      var check = this.id
      if (check == '5f1c59d0fa523c3aa793c0ac') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
