<template>
  <div class="big-header">

    <h1>{{ title }}</h1>
    <p>{{ text }}</p>
    <div class="choice">
      <router-link class="button" to="/game/2">
        <Choice v-bind:choice="choice[0]"></Choice>     
      </router-link>

      <router-link class="button" to="/game/3">
        <Choice v-bind:choice="choice[1]"></Choice> 
      </router-link>
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
        name: 'Jungle',
      },
      {
        name: 'Rivière',
      }
    ]
  }
  },
  computed: {
    title() {
      return data[2].title;
    },
    text() {
      return data[2].text;
    }
  },
  components: {
    Choice
  }
}
</script>