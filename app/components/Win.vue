<template>
  <div class="big-header">

    <h1> Ca à marché! Me voila de l’autre côté du ravin. Vous avez gagné !</h1>
    <br />
    <div class="buttons m1">
     <router-link class="button" to="/">
        <Choice v-bind:choice="choice[0]"></Choice>     
     </router-link>
    </div>
  </div>
</template>

<script>

import Choice from './base/Choice.vue';


export default {
  data: function() {
    return {
      choice: [
      {  
        name: 'Recommencer',
      },
      ]
    };
  },
  components: {
    Choice
  }
};
</script>
