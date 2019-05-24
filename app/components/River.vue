<template>
  <div class="big-header">

    <h1>{{ title }}</h1>
    <p>{{ text }}</p>
    <div class="choice">    
      <div class="div">
      <img src="../assets/image/croco.png" />         

      <router-link class="button" to="/game/4">
        <Choice v-bind:choice="choice[0]"></Choice>     
      </router-link>
      </div>
      <div class="div">
      <img src="../assets/image/croco.png" />         
 
      <router-link class="button" :to="grappinRoute">
        <Choice v-bind:choice="choice[1]"></Choice> 
      </router-link>
    </div>
      </div>

  </div>
</template>



<script>
import Choice from './base/Choice.vue';
import data from '../../data.json';
import service from '../service/grappinRoute.js';

export default {
  data: function(){
    return {
      choice: [
      {  
        name: 'Faire peur au croco',
      },
      {
        name: 'passez en douce',
      }
    ]
  }
  },

  computed: {
    title() {
      return data[5].title;
    },
    text() {
      return data[5].text;
    },
    grappinRoute() {
      if ( service.has('Lance Pierre'))
        return '/game/4';
      else 
        return '/game/5';
    }
  },

  components: {
    Choice
  }
}
</script>