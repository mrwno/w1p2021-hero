<template>
  <div class="big-header">

    <h1>{{ title }}</h1>
    <p>{{ text }}</p>
    <div class="choice">    
      <router-link class="button" :to="grappinRoute">
        <Choice v-bind:choice="choice[0]"></Choice>     
      </router-link>

      <router-link class="button" to="/win">
        <Choice v-bind:choice="choice[1]"></Choice> 
      </router-link>
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
        name: 'Tronc',
      },
      {
        name: 'Lianes',
      }
    ]
  }
  },

  computed: {
    title() {
        return data[4].title;
    },
    text() {
        return data[4].text;
    },

    grappinRoute() {
      if ( service.has('Grappin'))
        return '/win';
      else 
        return '/lose';
    }
  },

  components: {
    Choice
  }
}
</script>