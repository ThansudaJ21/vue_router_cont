<template>
  <hr />
  <div v-if="passenger">
    <h1>Name: {{ passenger.name }}</h1>
    <h3>Trips: {{ passenger.trips }}</h3>
  </div>
</template>

<script>
export default {
  props: ['passenger'],
  computed: {
    check: function () {
      var check = this.passenger._id
      if (check == '5f1c59d0fa523c3aa793c0ac') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
img {
  width: 300px;
  height: auto;
  margin-bottom: 20px;
}
</style>
