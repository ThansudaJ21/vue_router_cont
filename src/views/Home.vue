<template>
  <h1>Events For Good</h1>
  <div class="events">
    <PassengerCard
      v-for="passenger in passengers"
      :key="passenger._id"
      :passenger="passenger"
    />
    <!-- <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'EventList', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
        >Prev Page</router-link
      >
      <router-link
        id="next-prev"
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
        >Next Page</router-link
      ></div>

      <router-link :to="{name: 'EventList', query: { perPage: perPage + 1 }}">Increase</router-link>
      <router-link :to="{name: 'EventList', query: { perPage: perPage - 1 }}">Decrease</router-link> -->
  </div>
</template>

<script>
// @ is an alias to /src
import PassengerCard from '@/components/PassengerCard.vue'
import PassengerService from '@/services/PassengerService.js'
import { watchEffect } from '@vue/runtime-core'
// import axios from 'axios'

export default {
  name: 'Home',
  props: {
    page: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    }
  },
  components: {
    PassengerCard // register it as a child component
  },
  data() {
    return {
      passengers: null,
      totalEvents: 0 // <--- Added thiss to store totalEvents
    }
  },
  created() {
    watchEffect(() => {
      PassengerService.getPassengers(this.perPage, this.page)
        .then((response) => {
          this.passengers = response.data.data
          this.totalEvents = response.headers['x-total-count'] //<===store it
        })
        .catch((error) => {
          console.log(error)
        })
    })
  },
  computed: {
    hasNextPage() {
      //First, calculate total pages
      let totalPages = Math.ceil(this.totalEvents / this.perPage) //this.size is event per pages
      //Then check to see if the current page is less than the tatal pages
      return this.page < totalPages
    }
  }
}
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290 px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #502c2c;
}

#page-prev {
  text-align: left;
  padding-right: 10px;
}
#page-next {
  text-align: right;
}
</style>
