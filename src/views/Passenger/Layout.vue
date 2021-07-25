<template>
  <div v-if="passenger">
    <div id="nav">
      <router-link :to="{ name: 'PassengerDetails', params: { id } }"
        >Details</router-link
      > |
      <router-link :to="{ name: 'PassengerEdit', params: { id } }"
        >Edit</router-link
      >
    </div>
     <router-view :passenger="passenger" />
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
    //  PassengerService.getPassenger(this.id)
    //   .then((response) => {
    //     this.event = response.data
    //   })
    //   .catch((error) => {
    //     // console.log(error)
    //     // this.$router.push({name: '404Resource', params: {resource:'event'}})
    //     if(error.response && error.response.status == 404) {
    //         this.$router.push({
    //             name: '404Resource',
    //             params: { resource: 'event' }
    //         })
    //     } else {
    //          this.$router.push({name: 'NetworkError'})
    //     }
    //   })
  }
}
</script>
