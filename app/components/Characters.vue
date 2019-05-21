<template>
  <div class="big-header">
    <h1>{{ title }}</h1>
    <p>{{ text }}</p>

    <router-link  class="button" to="/game/1">
      <Character v-bind:character="character[0]"></Character>     
    </router-link>

    <router-link class="button" to="/game/1">
      <Character v-bind:character="character[1]"></Character> 
    </router-link>
  </div>
</template>



<script>
import Character from './base/Character.vue';
import data from '../../data.json';

export default {
  data: function(){
    return {
      character: [
      {  
        name: 'Perso 1',
        speciality: 'Grappin',
      },
      {
        name: 'Perso 2',
        speciality: 'Lance Pierre',
      }
    ]
  }
  },

  computed: {
    addObject() {
       ObjectsService.add('grappin');
    },
    title() {
      return data[0].title;
    },
    text() {
      return data[0].text;
    }
  },

  components: {
    Character
  }
}
</script>