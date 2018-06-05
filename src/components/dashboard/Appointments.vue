<template>
  <full-calendar :events="fcEvents" locale="en"></full-calendar>
</template>

<script>
import fullCalendar from 'vue-fullcalendar'
var calendarEvents = [
	{
      title : 'appointment for dr.ron',
      start : '2018-06-4',
      end : '2018-06-5'
    }
]
export default {
  data() {
    return {
      fcEvents : calendarEvents
    }
  },
  methods: {   
  },
  components: {
    'full-calendar': fullCalendar
  }
}
</script>

<style>
/* .vueconf {
  background-color: #00a65a !important;
} */
</style>

