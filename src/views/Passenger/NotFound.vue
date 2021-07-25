<template>
  <h1>Oops!</h1>
  <h3>The page you're looking fir is not here</h3>
  <router-link :to="{ name: 'PassengerList' }">Back to the home page</router-link>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
      default: 'page'
    }
  }
}
</script>
