<template>
  <router-link
    class="event-link"
    :to="{ name: 'PassengerDetails', params: { id: passenger._id } }"
  >
    <div class="event-card">
      <img :src="passenger.airline.logo" />
      <img
        v-for="airline in passenger.airline"
        :key="airline.id"
        :src="airline.logo"
      />
      <h4>{{ passenger.name }}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'PassengerCard',
  props: {
    passenger: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.event-card {
  padding: 20px;
  width: 300px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}

img {
  width: 300px;
  height: auto;
}
</style>
