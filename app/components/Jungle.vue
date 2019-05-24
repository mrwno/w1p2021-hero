<template>
  <div class="big-header">

    <h1>{{ title }}</h1>
    <p>{{ text }}</p>
    <div class="choice">   
      <div class="div">
      <img src="../assets/image/singe.png" />    
        <router-link class="button" :to="grappinRoute">
        <Choice v-bind:choice="choice[0]"></Choice>     
      </router-link>
      </div>
      <div class="div">

      <img src="../assets/image/arbre.png" />
      <router-link class="button" to="/game/4">
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
        name: 'Suivre les bruits de singes',
      },
      {
        name: 'Monter en haut de l\'arbre',
      }
    ]
  }
  },

  computed: {
    title() {
      return data[3].title;
    },
    text() {
      return data[3].text;
    },

    grappinRoute() {
      if ( service.has('Grappin'))
        return '/lose';
      else 
        return '/win';
    }
  },

  components: {
    Choice
  }
}
</script>