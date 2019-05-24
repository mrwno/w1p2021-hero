<template>
  <div class="big-header">

    <h1>{{ title }}</h1>
    <p>{{ text }}</p>
    <div class="choice">
      <div class="div">
      <img src="../assets/image/river.png" />         
      <router-link class="button" to="/lose">
        <Choice v-bind:choice="choice[0]"></Choice>     
      </router-link>
      </div>
      <div class="div">
      <img src="../assets/image/river.png" />         
      <router-link class="button" to="/game/2">
        <Choice v-bind:choice="choice[1]"></Choice> 
      </router-link>
    </div>
      </div>

  </div>
</template>



<script>
import Choice from './base/Choice.vue';
import data from '../../data.json';


export default {
  data: function(){
    return {
      choice: [
      {  
        name: 'Nager à contre courrant',
      },
      {
        name: 'Longer la cote',
      }
    ]
  }
  },

  computed: {
    title() {
      return data[6].title;
    },
    text() {
      return data[6].text;
    }
  },

  components: {
    Choice
  }
}
</script>