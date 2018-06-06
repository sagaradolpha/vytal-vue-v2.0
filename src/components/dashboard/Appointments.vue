<template>
  <div id="calendat-event">
    <button @click="refreshEvents">Refresh</button>
    <button v-if="selected._id" @click="removeEvent">Remove</button>
    <pre>{{ selected }}</pre>
    <full-calendar ref="calendar" :event-sources="eventSources" @event-selected="eventSelected" @event-created="eventCreated" :config="config"></full-calendar>
  </div>
</template>

<script>
//import fullCalendar from 'vue-fullcalendar'
import moment from 'moment';
export default {
  data() {
   return {
      events: [
        {
          id: 1,
          title: 'event1',
          start: moment().hours(12).minutes(0),
        },
        {
          id: 2,
          title: 'event2',
          start: moment().hours(12).minutes(0),
        },
        {
          id: 3,
          title: 'event3',
          start: moment().hours(12).minutes(0),
        },
      ],

      config: {
        eventClick: (event) => {
          //this.selected = event;
          console.log(event)
        },
      },

      selected: {},
    };
  },
  methods: {   
    refreshEvents() {
      this.$refs.calendar.$emit('refetch-events');
    },

    removeEvent() {
      this.$refs.calendar.$emit('remove-event', this.selected);
      this.selected = {};
    },

    eventSelected(event) {
      this.selected = event;
    },

    eventCreated(...test) {
      console.log(test);
    },
  },
  components: {
   
  },
    computed: {
    eventSources() {
      const self = this;
      return [
        {
          events(start, end, timezone, callback) {
              callback(self.events);
          },
        },
      ];
    },
  },
}
</script>

<style>
@import '~fullcalendar/dist/fullcalendar.css';
#calendat-event {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

