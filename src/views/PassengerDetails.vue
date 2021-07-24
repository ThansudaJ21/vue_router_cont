<template>
  <h1>Details</h1>
<hr>
  <div v-if="passenger">
    <h1>{{ passenger.name }}</h1>
    <h3>{{ passenger.airline.country }}</h3>
    <h5>{{ passenger.airline.head_quaters }}</h5>
    <p>{{ passenger.airline.website }}</p>
    <h2>Slogan: {{ passenger.airline.slogan }}</h2>
    <span v-for="airline in passenger.airline" :key="airline.id">
      <h3>{{ airline.country }}</h3>
      <h5>{{ airline.head_quaters }}</h5>
      <p>{{ airline.website }}</p>
    </span>
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
  }
}
</script>
