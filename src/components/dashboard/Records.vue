<template>


<div id="container">
<button @click="addRow">Add</button>
  <div  v-for="row in rows" :key="row.id">
    <div class="input-field col s12 m12 l12">
      <input type="text" :value="row.full_name">
      <input type="text" :value="row.last_name">
    </div>
  </div>

</div>

</template>

<script>
  export default {
    data() {
      return {
        rows : [
          {id:1, full_name: "john", last_name: "doe"}, 
          {id:2, full_name: "jane", last_name: "so"}
        ]
      }
    },
    methods: {
      addRow() {
        this.rows.push({full_name: "damn", last_name: "damn so"})
      }
    }
  }
</script>
