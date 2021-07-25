<template>
  <hr />
  <div v-if="passenger">
    <h1>{{ passenger.name }}</h1>
    <h3>{{ passenger.airline.country }}</h3>
    <h5>{{ passenger.airline.head_quaters }}</h5>
    <p>{{ passenger.airline.website }}</p>
    <span v-for="airline in passenger.airline" :key="airline.id">
      <h3>{{ airline.country }}</h3>
      <h5>{{ airline.head_quaters }}</h5>
      <p>{{ airline.website }}</p>
    </span>
  </div>
</template>

<script>
export default {
  props: ['passenger']
}
</script>
